import { Zap, CheckCircle, FileText } from 'lucide-react'
import React from 'react'

export default function Features() {
    const features = [
        {
            icon: <Zap className="h-10 w-10 text-primary" />,
            title: "Lightning Fast",
            description: "Get results in seconds, not minutes. Our AI processes documents at unparalleled speeds."
        },
        {
            icon: <CheckCircle className="h-10 w-10 text-primary" />,
            title: "Highly Accurate",
            description: "Advanced AI algorithms ensure the highest level of accuracy in plagiarism detection."
        },
        {
            icon: <FileText className="h-10 w-10 text-primary" />,
            title: "Detailed Reports",
            description: "Receive comprehensive reports with highlighted text and source citations."
        }
    ]

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="mb-4 flex justify-center">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}