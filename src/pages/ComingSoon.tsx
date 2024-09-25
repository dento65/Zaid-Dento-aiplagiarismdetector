import React from 'react'

export default function ComingSoon() {
    return (
        <main className="flex-grow flex items-center justify-center px-4 bg-gray-900 text-white min-h-screen">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-down">Coming Soon</h1>
                <p className="text-xl md:text-3xl mb-12 animate-fade-in-up">
                    We're working hard to bring you the future of plagiarism detection with AI.
                    Stay tuned for groundbreaking innovations!
                </p>
                <div className="mb-12 animate-fade-in">
                    <p className="text-lg mb-6">Be the first to know when we launch:</p>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow max-w-md text-lg py-6 px-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-gray-600 hover:bg-blue-700 text-white text-lg py-6 px-8 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Notify Me
                        </button>
                    </form>
                </div>
                <div className="text-sm text-gray-400 animate-fade-in-up">
                    <p>Join our waiting list and get exclusive early access!</p>
                    <p className="mt-2">We respect your privacy and won't share your information.</p>
                </div>
            </div>
        </main>
    )
}