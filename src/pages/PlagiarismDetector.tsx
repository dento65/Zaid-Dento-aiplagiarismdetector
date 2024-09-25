import React, { useState } from 'react'
import { Upload, CloudUpload } from 'lucide-react'


import FileUpload from '../components/upload/FileUpload.tsx'
import ResultsDisplay from '../components/upload/ResultsUpload.tsx'
import { detectPlagiarism } from '../service/plagiarismService.ts'

export default function PlagiarismDetector() {
    const [file, setFile] = useState<File | null>(null)
    const [results, setResults] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleFileUpload = (uploadedFile: File) => {
        setFile(uploadedFile)
        setResults(null)
    }

    const handleSubmit = async () => {
        if (!file) return

        setIsLoading(true)
        try {
            const plagiarismResults = await detectPlagiarism(file)
            setResults(plagiarismResults)
        } catch (error) {
            console.error('Error detecting plagiarism:', error)
            // Handle error (e.g., show error message to user)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-gray-400 via-gray-700 to-black0 bg-clip-text text-transparent">
                    AI Plagiarism Detector
                </h1>


                <div className="bg-white shadow-xl rounded-lg p-8 mb-12 transition-all duration-300 hover:shadow-2xl">
                    <FileUpload onFileUpload={handleFileUpload} />

                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={handleSubmit}
                            disabled={!file || isLoading}
                            className={`
                flex items-center px-6 py-3 font-semibold text-white text-lg rounded-full
                transition-all duration-300 ${isLoading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'
                                }
              `}
                        >
                            {isLoading ? (
                                <>
                                    <CloudUpload className="mr-3 h-6 w-6 animate-bounce" />
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    <Upload className="mr-3 h-6 w-6" />
                                    Detect Plagiarism
                                </>
                            )}
                        </button>
                    </div>

                    {isLoading && (
                        <div className="mt-8">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 animate-pulse rounded-full" style={{ width: '33%' }} />
                            </div>
                            <p className="text-center text-gray-600 mt-2">Analyzing document...</p>
                        </div>
                    )}
                </div>

                {results && <ResultsDisplay results={results} />}
            </div>
        </div>
    )
}
