import React from 'react'
import { Download } from 'lucide-react'

interface ResultsDisplayProps {
    results: {
        plagiarismPercentage: number
        flaggedSections: Array<{
            text: string
            similarity: number
            source: string
        }>
    }
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
    const handleDownload = () => {
        const reportData = {
            plagiarismPercentage: results.plagiarismPercentage,
            flaggedSections: results.flaggedSections.map(section => ({
                text: section.text,
                similarity: section.similarity,
                source: section.source,
            })),
        };

        const jsonString = JSON.stringify(reportData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });

        // Creating a temporary download link and trigger it
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'plagiarism_report.json'; 
        document.body.appendChild(link);
        link.click();

        // Removing the temporary link after download
        document.body.removeChild(link);

    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Plagiarism Detection Results</h2>

            <div className="mb-6">
                <p className="text-lg">
                    Plagiarism Percentage:
                    <span className={`font-bold ml-2 ${results.plagiarismPercentage > 20 ? 'text-red-500' : 'text-green-500'
                        }`}>
                        {results.plagiarismPercentage}%
                    </span>
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Some of the Flagged Sections:</h3>
                {results.flaggedSections.map((section, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="mb-2">{section.text}</p>
                        <p className="text-sm text-gray-600">
                            Similarity: {section.similarity}% | Source: {section.source}
                        </p>
                    </div>
                ))}
            </div>

            <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition duration-300" onClick={handleDownload} >
                <Download className="mr-2 h-4 w-4" />
                Download Report
            </button>
        </div>
    )
}