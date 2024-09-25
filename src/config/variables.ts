import * as dotenv from 'dotenv';
dotenv.config();

export const GEMINI_API_KEY= process.env.GEMINI_API_KEY
export const GEMINI_API_SECRET= process.env.GEMINI_API_SECRET
export const GEMINI_BASE_URL= process.env.GEMINI_BASE_URL

export const LINKEDIN_CLIEND_ID= process.env.LINKEDIN_CLIEND_ID
export const LINKEDIN_PERSON_URN = process.env.LINKEDIN_PERSON_URN
export const LINKEDIN_SECRET= process.env.LINKEDIN_SECRET
export const LINKEDIN_BEARER_TOKEN= process.env.LINKEDIN_BEARER_TOKEN