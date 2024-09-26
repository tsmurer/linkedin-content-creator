import axios from 'axios';

const url = 'https://code2img.vercel.app/api/to-image?'

// Define the return type for the function
export async function getCodeImage(codeSnippet: string): Promise<ArrayBuffer | string> {
  try {
    const response: ImageResponse = await axios.post(url, 
      codeSnippet, 
      {
        headers: { 'Content-Type': 'text/plain' },
        params: {
          language: 'java',
          theme: 'atom-dark',
          'line-numbers': false,
        },
        responseType: 'arraybuffer' 
      }
    );

    return response.data; 
  } catch (error) {
    console.error('Error making API request:', error);
    return 'Error generating image. Please try again later.';
  }
}

type ImageResponse = {
    data: ArrayBuffer; // Define the structure of the response data
  };