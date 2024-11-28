// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Acerca de', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Portafolio', href: '#portfolio' },
        { name: 'Beneficios', href: '#benefits' },
        { name: 'Precios', href: '#pricing' },
        { name: 'Reseñas', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contáctanos', href: '#contact' },
    ];

    return (
        <nav className="bg-white shadow fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#hero" className="text-xl font-bold text-gray-800">
                            TuLogo
                        </a>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="ml-6 text-gray-700 hover:text-blue-500 transition duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={handleToggle}
                            type="button"
                            className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {isOpen ? (
                                // Icono de cerrar (X)
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Icono de menú (hamburguesa)
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
