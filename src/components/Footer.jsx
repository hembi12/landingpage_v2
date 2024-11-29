// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-80 backdrop-saturate-100 backdrop-contrast-100 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Derechos Reservados */}
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-white font-bold">
                            © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
                        </p>
                    </div>
                    {/* Enlaces de Redes Sociales */}
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition"
                        >
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
