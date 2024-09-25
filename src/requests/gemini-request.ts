import axios from 'axios';
import { GEMINI_API_KEY } from "../config/variables";
import angularPostTemplate from '../prompts/angularContent';

const apiKey = GEMINI_API_KEY;
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;


const requestData = {
    contents: [
      {
        parts: [
          {
            text: `Think of a random feature that exists in Angular 16+ that users would find interesting and create content in this format \n ${angularPostTemplate}\n WRITE IT IN BRAZILIAN PORTUGUESE`
          }
        ]
      }
    ]
  };

export async function makeGeminiRequest(): Promise<string> {
    try {
      const response = await axios.post<GeminiResponse>(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const generatedText = response.data.candidates[0].content.parts[0].text;
      return generatedText;
  
    } catch (error) {
        // Handle errors and log the error message
        console.error('Error making API request:', error);

        // Return a default value in case of error
        return 'Error generating content. Please try again later.';
    }
  }