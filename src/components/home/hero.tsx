import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/plagiarism-check');
    };

    return (
        <section className="bg-gradient-to-r from-black to-gray-700 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Real-time AI-Powered Plagiarism Detection</h1>
                <p className="text-xl mb-8">Ensure originality in seconds with our cutting-edge AI technology</p>
                <button
                    onClick={handleButtonClick}
                    className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition duration-300"
                >
                    Detect Plagiarism Now
                </button>
            </div>
        </section>
    );
}

export default Hero;
