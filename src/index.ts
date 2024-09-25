import { makeGeminiRequest } from "./requests/gemini-request";
import { createUGCPost } from "./requests/linkedin-request";
//createUGCPost();

async function main() {
    try {
        const generatedContent = await makeGeminiRequest();
        await createUGCPost(generatedContent);
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();