import axios from 'axios';
import dotenv from 'dotenv';
import { LINKEDIN_BEARER_TOKEN, LINKEDIN_PERSON_URN } from '../config/variables';

dotenv.config();

export async function createUGCPost(content: string) {
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
                shareMediaCategory: 'NONE', 
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

// Example usage
const postContent = 'teste';
createUGCPost(postContent);
