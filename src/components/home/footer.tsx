import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer id="contact" className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p>Email: info@plagiarism-ai.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Legal</h3>
                        <ul>
                            <li>
                                <Link to="/coming-soon" className="hover:text-blue-300">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/coming-soon" className="hover:text-blue-300">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://twitter.com" className="text-2xl hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://facebook.com" className="text-2xl hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://linkedin.com" className="text-2xl hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    © 2023 PlagiarismAI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
