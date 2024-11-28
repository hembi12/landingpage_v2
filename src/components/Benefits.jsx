// src/components/Benefits.jsx
import React from 'react';
import { FaRegLightbulb, FaHandsHelping, FaRocket } from 'react-icons/fa';

const benefits = [
    {
        id: 1,
        icon: <FaRegLightbulb className="text-blue-500 w-12 h-12 mb-4" />,
        title: 'Innovación Constante',
        description: 'Utilizamos las últimas tecnologías para crear soluciones modernas y efectivas.',
    },
    {
        id: 2,
        icon: <FaHandsHelping className="text-blue-500 w-12 h-12 mb-4" />,
        title: 'Atención Personalizada',
        description: 'Trabajamos contigo en cada etapa para garantizar que el proyecto cumpla con tus expectativas.',
    },
    {
        id: 3,
        icon: <FaRocket className="text-blue-500 w-12 h-12 mb-4" />,
        title: 'Resultados Garantizados',
        description: 'Entregamos proyectos de alta calidad que impulsan el crecimiento de tu negocio.',
    },
];

const Benefits = () => {
    return (
        <section id="benefits" className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                        ¿Por qué Elegirnos?
                    </h2>
                    <p className="text-gray-600">
                        Descubre los beneficios de trabajar con nosotros.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-center">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 text-center">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
