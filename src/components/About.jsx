// src/components/About.jsx
import React from 'react';
import AboutImage from '../assets/images/About.svg'; // Importa la imagen local

const About = () => {
    return (
        <section id="about" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Texto */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Acerca de Nosotros
                    </h2>
                    <p className="text-gray-600 mb-4">
                        En [Nombre de Tu Empresa], nos dedicamos a crear soluciones web innovadoras que impulsan el crecimiento de tu negocio. Nuestro equipo de expertos está comprometido con la excelencia y la satisfacción del cliente.
                    </p>
                    <div className="mt-6">
                        {/* Misión */}
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2">Nuestra Misión</h3>
                        <p className="text-gray-600 mb-4">
                            Proporcionar servicios de desarrollo web de alta calidad que ayuden a nuestros clientes a alcanzar sus objetivos comerciales.
                        </p>
                        {/* Visión */}
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2">Nuestra Visión</h3>
                        <p className="text-gray-600 mb-4">
                            Ser líderes en la industria de desarrollo web, reconocidos por nuestra innovación, integridad y compromiso con la excelencia.
                        </p>
                        {/* Valores */}
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2">Nuestros Valores</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Innovación</li>
                            <li>Calidad</li>
                            <li>Integridad</li>
                            <li>Trabajo en Equipo</li>
                            <li>Orientación al Cliente</li>
                        </ul>
                    </div>
                </div>
                {/* Imagen */}
                <div className="w-full md:w-1/2">
                    <img
                        src={AboutImage}
                        alt="Espacio de Trabajo"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
