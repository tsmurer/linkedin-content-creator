import axios from 'axios';
import dotenv from 'dotenv';
import { LINKEDIN_BEARER_TOKEN, LINKEDIN_PERSON_URN } from '../config/variables';
import { RegisterUploadResponse } from '../interfaces/linkedin.interfaces';
import { getCodeImage } from './code2img';
import { removeMarkdown } from '../utils/utils';

dotenv.config();

async function registerImage(): Promise<RegisterUploadResponse> {
    try {
      const response = await axios.post<RegisterUploadResponse>(
        'https://api.linkedin.com/v2/assets?action=registerUpload',
        {
          registerUploadRequest: {
            recipes: [
              'urn:li:digitalmediaRecipe:feedshare-image',
            ],
            owner: `urn:li:person:${LINKEDIN_PERSON_URN}`,
            serviceRelationships: [
              {
                relationshipType: 'OWNER',
                identifier: 'urn:li:userGeneratedContent',
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${LINKEDIN_BEARER_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log("Image registered!")
      return response.data; // This will contain uploadUrl and asset
    } catch (error) {
      console.error('Error registering image:', error);
      throw error;
    }
  }
  async function createUGCPost(content: string, imageAsset: string) {
    const accessToken = LINKEDIN_BEARER_TOKEN; // Use your access token
    const apiUrl = 'https://api.linkedin.com/v2/ugcPosts';

    const requestData = {
        author: `urn:li:person:${LINKEDIN_PERSON_URN}`, 
        lifecycleState: 'PUBLISHED',
        specificContent: {
            'com.linkedin.ugc.ShareContent': {
                shareCommentary: {
                    text: content, 
                },
                shareMediaCategory: 'IMAGE', // Change to IMAGE
                media: [
                    {
                        status: 'READY',
                        media: imageAsset, // Include the uploaded image asset
                    },
                ],
            },
        },
        visibility: {
            'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
        },
    };

    try {
        const response = await axios.post(apiUrl, requestData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        console.log('Post created:', response.data);
    } catch (error) {    
        console.log(JSON.stringify(error));
    }
}

async function uploadImage(uploadUrl: string, imageBuffer: ArrayBuffer): Promise<void> {
    try {
        const blob = new Blob([imageBuffer], { type: 'image/png' });

        const uploadResponse = await axios.put(uploadUrl, blob, {
            headers: {
                'Content-Type': 'image/png',
            },
        });

        console.log('Image uploaded successfully:', uploadResponse.data);
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}

// Main function to orchestrate the steps
export async function postImageToLinkedIn(generatedContent: string) {
    try {
        const [content, code] = removeMarkdown(generatedContent).split('%%%%%%%%%%');
        await console.log(content);
        await console.log(code);

        // Step 1: Get the image from your existing function
        const imageBuffer = await getCodeImage(code); // Ensure you have this function to get the image buffer
        console.log(imageBuffer);

        // Ensure imageBuffer is an ArrayBuffer
        if (typeof imageBuffer === 'string') {
            throw new Error('Failed to generate image, received string instead of ArrayBuffer.');
        }

        // Step 2: Register the image
        const registerResponse = await registerImage();
        const uploadUrl = registerResponse.value.uploadMechanism['com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'].uploadUrl;

        // Step 3: Upload the image
        await uploadImage(uploadUrl, imageBuffer);

        // Get the image asset from the registration response
        const imageAsset = registerResponse.value.asset; // This should be the asset you need

        // Step 4: Create the LinkedIn post with the image
        await createUGCPost(content, imageAsset);
    } catch (error) {
        console.error('Error in posting image to LinkedIn:', error);
    }
}