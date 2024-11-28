// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Carlos Pérez',
        role: 'CEO de E-commerce XYZ',
        testimonial:
            'Trabajar con este equipo fue una experiencia increíble. Diseñaron nuestra tienda online con un enfoque profesional y atención al detalle.',
        image: 'https://via.placeholder.com/150',
        projectLink: 'https://ecommercexyz.com',
    },
    {
        id: 2,
        name: 'Ana Gómez',
        role: 'Fundadora de Startup Creativa',
        testimonial:
            'El diseño de nuestra landing page superó nuestras expectativas. Logramos duplicar nuestras conversiones en poco tiempo.',
        image: 'https://via.placeholder.com/150',
        projectLink: 'https://startupcreativa.com',
    },
    {
        id: 3,
        name: 'Luis Rodríguez',
        role: 'Director de Plataforma Educativa',
        testimonial:
            'Gracias a su excelente trabajo, nuestra plataforma ahora es mucho más intuitiva y funcional. Nuestros usuarios están encantados.',
        image: 'https://via.placeholder.com/150',
        projectLink: 'https://plataformaeducativa.com',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Reseñas
                    </h2>
                    <p className="text-gray-600">
                        Lo que nuestros clientes dicen sobre nosotros.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full shadow-md mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
                            <a
                                href={testimonial.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 transition"
                            >
                                Ver Proyecto
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
