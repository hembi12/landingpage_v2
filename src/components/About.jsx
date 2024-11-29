import React from 'react';
import { FaBullseye, FaEye, FaHandsHelping } from 'react-icons/fa'; // Íconos para misión, visión y valores

const aboutCards = [
    {
        id: 1,
        icon: <FaBullseye className="text-blue-800 w-12 h-12 mb-4" aria-hidden="true" />,
        title: 'Nuestra Misión',
        description: 'Proporcionar servicios de desarrollo web de alta calidad que ayuden a nuestros clientes a alcanzar sus objetivos comerciales.',
    },
    {
        id: 2,
        icon: <FaEye className="text-blue-800 w-12 h-12 mb-4" aria-hidden="true" />,
        title: 'Nuestra Visión',
        description: 'Ser líderes en la industria de desarrollo web, reconocidos por nuestra innovación, integridad y compromiso con la excelencia.',
    },
    {
        id: 3,
        icon: <FaHandsHelping className="text-blue-800 w-12 h-12 mb-4" aria-hidden="true" />,
        title: 'Nuestros Valores',
        description: 'Innovación, calidad, integridad, trabajo en equipo y orientación al cliente son los pilares de nuestro trabajo.',
    },
];

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Título y Descripción */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-950 mb-4">
                        Acerca de Nosotros
                    </h2>
                    <p className="text-blue-950">
                        En [Nombre de Tu Empresa], nos dedicamos a crear soluciones web innovadoras que impulsan el crecimiento de tu negocio. Nuestro equipo de expertos está comprometido con la excelencia y la satisfacción del cliente.
                    </p>
                </div>
                {/* Tarjetas de Misión, Visión y Valores */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutCards.map((card) => (
                        <div key={card.id} className="bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-80 backdrop-saturate-100 backdrop-contrast-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            {/* Ícono */}
                            <div className="flex items-center justify-center">
                                {card.icon}
                            </div>
                            {/* Título */}
                            <h3 className="text-xl font-semibold text-blue-950 mb-2 text-center">
                                {card.title}
                            </h3>
                            {/* Descripción */}
                            <p className="text-blue-950 text-center">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
