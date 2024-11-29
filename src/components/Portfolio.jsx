// src/components/Portfolio.jsx
import React from 'react';

const projects = [
    {
        id: 1,
        title: 'E-commerce Moderno',
        description: 'Desarrollo de una tienda online con diseño responsivo y funcionalidad avanzada.',
        image: 'https://via.placeholder.com/600x400',
        link: 'https://tu-ecommerce.com',
    },
    {
        id: 2,
        title: 'Landing Page Creativa',
        description: 'Página de destino diseñada para maximizar conversiones y atraer clientes potenciales.',
        image: 'https://via.placeholder.com/600x400',
        link: 'https://tu-landingpage.com',
    },
    {
        id: 3,
        title: 'Plataforma Educativa',
        description: 'Sitio web para cursos online, con gestión de usuarios y contenido dinámico.',
        image: 'https://via.placeholder.com/600x400',
        link: 'https://tu-plataformaeducativa.com',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-950 mb-4">
                        Portafolio
                    </h2>
                    <p className="text-blue-950">
                        Aquí tienes algunos ejemplos de proyectos que hemos realizado.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-80 backdrop-saturate-100 backdrop-contrast-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-center text-xl font-semibold text-blue-950 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-center text-blue-950 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-amber-400 text-blue-950 font-bold px-6 py-2 rounded-md shadow-lg hover:bg-amber-300 transition"
                                    >
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
