import OpenAI from "openai";
import pdfToText from "react-pdftotext";
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function detectPlagiarism(file: File): Promise<any> {
  const text = await readFileContent(file); //  function to read file content

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Analyze the following text for plagiarism and provide the result in the following format:
            
Report:
-------------------------
Plagiarism percentage: [percentage]%
-------------------------
Flagged sections:
- "[flagged section 1]" (flagged)
- "[flagged section 2]" (flagged)
- "[unique section]" (not flagged)

Make sure to strictly follow this format:

-------------------------
Plagiarism percentage: [percentage]%
-------------------------
Flagged sections:
- "[Flagged section]" (flagged)
- "[Another flagged section]" (flagged)
- "[Unique section]" (not flagged)

Here is the text to analyze:
\n\n${text}`,
        },
      ],
      max_tokens: 300, 
    });

     console.log(response);
   const result = response.choices[0].message.content;
    const parsedResult = parsePlagiarismResult(result ?? " "); // Implement this function to parse the response
    return parsedResult;
  } catch (error) {
    console.error("Error detecting plagiarism:", error);
    throw new Error("Plagiarism detection failed.");
  }
}

// Function to read file content 
async function readFileContent(file: File) {
  try {
    const text = await pdfToText(file); 
    return text; // Return the extracted text
  } catch (error) {
    console.error("Failed to extract text from PDF:", error);
    throw error; 
  }
}

// Function to parse the result from OpenAI 
function parsePlagiarismResult(result: string): any {
  const lines = result.split("\n");

  const percentageLine = lines.find((line) => line.includes("percentage"));

  const plagiarismPercentage = percentageLine
    ? parseInt(percentageLine.match(/\d+/)?.[0] || "0", 10)
    : 0; // Default to 0 if percentageLine is not found

  const flaggedSections = lines
    .filter((line) => line.includes("flagged"))
    .map((section) => ({
      text: section,
      source: "N/A", 
    }));

  return {
    plagiarismPercentage,
    flaggedSections,
  };
}
