// src/components/FAQ.jsx
import React, { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: '¿Cuánto tiempo toma desarrollar un sitio web?',
        answer: 'El tiempo depende de la complejidad del proyecto, pero en promedio, tomamos entre 2 a 6 semanas para completar un sitio web.',
    },
    {
        id: 2,
        question: '¿Ofrecen mantenimiento después del lanzamiento?',
        answer: 'Sí, ofrecemos planes de mantenimiento para asegurarnos de que tu sitio web esté siempre actualizado y funcionando correctamente.',
    },
    {
        id: 3,
        question: '¿Qué necesito para comenzar un proyecto?',
        answer: 'Solo necesitas tener una idea clara de lo que deseas. Nuestro equipo te ayudará a concretar los detalles y el alcance del proyecto.',
    },
    {
        id: 4,
        question: '¿Pueden ayudarme con el diseño y el contenido?',
        answer: '¡Por supuesto! Contamos con diseñadores y redactores que pueden crear un diseño atractivo y contenido persuasivo para tu sitio.',
    },
];

const FAQ = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleFAQ = (id) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section id="faq" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-600">
                        Resolvemos tus dudas más comunes.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-gray-100 p-6 rounded-lg shadow-md transition"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {faq.question}
                                </h3>
                                <span className="text-blue-500">
                                    {activeId === faq.id ? '-' : '+'}
                                </span>
                            </div>
                            {activeId === faq.id && (
                                <p className="text-gray-600 mt-4">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
