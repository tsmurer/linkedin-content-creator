export function getRandomNumber(until: number): number {
    return Math.floor(Math.random() * until); // Generates a number between 0 and 69
}

export function removeMarkdown(text: string): string {
    return text
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // Remove bold (**) and underline (__)
    .replace(/#{2,6}\s*/g, '') // Remove headers (##, ###, etc.)
    .replace(/```(javascript|typescript)?\n([\s\S]*?)```/g, '$2') // Remove code blocks
    .replace(/```(javascript|typescript)?/g, '') // Remove opening code block indicators
    .replace(/```/g, '') // Remove any remaining closing code block indicators
}