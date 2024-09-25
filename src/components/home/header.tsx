import { Link } from "react-router-dom";
import { FileSearch } from 'lucide-react';
import React from 'react';

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <FileSearch className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-gray-900">PlagiarismAI</span>
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-primary hover:underline transition duration-300 ease-in-out"
                            >
                                Home
                            </Link>
                        </li>
                        <li>

                            <a
                                href="#features"
                                className="text-gray-600 hover:text-primary hover:underline transition duration-300 ease-in-out"
                            >
                                Features
                            </a>

                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-gray-600 hover:text-primary hover:underline transition duration-300 ease-in-out"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
