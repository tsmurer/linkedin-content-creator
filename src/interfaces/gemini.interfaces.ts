interface GeminiResponse {
    candidates: Candidate[];
    usageMetadata: UsageMetadata;
}

interface Candidate {
    content: Content;
    finishReason: string;
    index: number;
    safetyRatings: SafetyRating[];
}

interface Content {
    parts: Part[];
    role: string;
}

interface Part {
    text: string;
}

interface SafetyRating {
    category: string;
    probability: string;
}

interface UsageMetadata {
    promptTokenCount: number;
    candidatesTokenCount: number;
    totalTokenCount: number;
}
