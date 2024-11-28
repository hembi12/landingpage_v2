// src/components/HeroSection.jsx
import React from 'react';
import HeroImage from '../assets/images/Hero.svg'; // Importa la imagen local

const HeroSection = () => {
    return (
        <section id="hero" className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
            <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center">
                {/* Texto y CTA */}
                <div className="w-full md:w-1/2 text-center md:text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Impulsa tu Negocio con una Página Web Profesional
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Creamos sitios web personalizados que destacan tu marca y atraen a tus clientes.
                    </p>
                    <a
                        href="#contacto"
                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
                    >
                        Comienza Ahora
                    </a>
                </div>
                {/* Imagen o Gráfico */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img
                        src={HeroImage} // Usa la imagen importada
                        alt="Diseño Web Profesional"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;