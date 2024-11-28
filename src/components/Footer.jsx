// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo o Nombre de la Empresa */}
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-semibold">Tu Empresa</h1>
                    </div>
                    {/* Enlaces de Redes Sociales */}
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                    {/* Derechos Reservados */}
                    <div>
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
