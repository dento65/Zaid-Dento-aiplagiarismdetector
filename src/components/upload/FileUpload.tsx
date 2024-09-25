import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FileText } from 'lucide-react'

interface FileUploadProps {
    onFileUpload: (file: File) => void
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onFileUpload(acceptedFiles[0])
        }
    }, [onFileUpload])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        },
        multiple: false
    })

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'
                }`}
        >
            <input {...getInputProps()} />
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
                Drag and drop a PDF here, or click to select a file
            </p>
            <p className="text-xs text-gray-500 mt-1">
                (Only .pdf files are accepted)
            </p>
        </div>
    )
}