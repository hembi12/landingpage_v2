import React from 'react';
import { Parallax } from 'react-scroll-parallax'; // Importamos Parallax
import HeroImage from '../assets/images/Home.svg'; // Importa la imagen local

const HeroSection = () => {
    return (
        <section id="hero" className="bg-gradient-to-t from-blue-200 via-blue-300 to-blue-500 relative">
            <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center">
                {/* Texto y CTA */}
                <div className="w-full md:w-1/2 text-center md:text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
                        Impulsa tu Negocio con una Página Web Profesional
                    </h1>
                    <p className="text-lg text-blue-950 mb-6">
                        Creamos sitios web personalizados que destacan tu marca y atraen a tus clientes.
                    </p>
                    <div className="flex justify-center space-x-4">
                        {/* Botón de Portafolio */}
                        <a
                            href="#portfolio"
                            className="inline-block bg-amber-400 text-blue-950 font-bold px-6 py-3 rounded-md shadow-lg hover:bg-amber-300 transition"
                        >
                            Portafolio
                        </a>
                        {/* Botón de Reseñas */}
                        <a
                            href="#testimonials"
                            className="inline-block border border-blue-950 text-blue-950 font-bold px-6 py-3 rounded-md shadow-lg hover:bg-amber-300 hover:text-blue-950 transition"
                        >
                            Reseñas
                        </a>
                    </div>
                </div>
                {/* Imagen con Parallax */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Parallax speed={-10}>
                        <img
                            src={HeroImage}
                            alt="Diseño Web Profesional"
                            className="w-full h-auto"
                        />
                    </Parallax>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
