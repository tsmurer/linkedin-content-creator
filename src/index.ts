
import { makeGeminiRequest } from "./requests/gemini-request";
import { postImageToLinkedIn } from "./requests/linkedin-request";


async function main() {
    try {
        const generatedContent = await makeGeminiRequest();
        await postImageToLinkedIn(generatedContent);
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();