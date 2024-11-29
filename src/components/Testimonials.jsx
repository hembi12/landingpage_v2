import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importamos los íconos de estrellas
import ManImage from '../assets/images/Man.jpg'; // Imagen para ID 1
import WomanImage from '../assets/images/Woman.jpg'; // Imagen para ID 2
import YoungImage from '../assets/images/Young.jpg'; // Imagen para ID 3

const testimonials = [
    {
        id: 1,
        name: 'Carlos Pérez',
        role: 'CEO de E-commerce XYZ',
        testimonial:
            'Trabajar con este equipo fue una experiencia increíble. Diseñaron nuestra tienda online con un enfoque profesional y atención al detalle.',
        image: ManImage, // Usamos la imagen local importada
        projectLink: 'https://ecommercexyz.com',
        rating: 5, // Calificación
        date: '20 de Noviembre de 2023', // Fecha de la reseña
    },
    {
        id: 2,
        name: 'Ana Gómez',
        role: 'Fundadora de Startup Creativa',
        testimonial:
            'El diseño de nuestra landing page superó nuestras expectativas. Logramos duplicar nuestras conversiones en poco tiempo.',
        image: WomanImage, // Usamos la imagen local importada
        projectLink: 'https://startupcreativa.com',
        rating: 4, // Calificación
        date: '5 de Diciembre de 2023', // Fecha de la reseña
    },
    {
        id: 3,
        name: 'Luis Rodríguez',
        role: 'Director de Plataforma Educativa',
        testimonial:
            'Gracias a su excelente trabajo, nuestra plataforma ahora es mucho más intuitiva y funcional. Nuestros usuarios están encantados.',
        image: YoungImage, // Usamos la imagen local importada
        projectLink: 'https://plataformaeducativa.com',
        rating: 5, // Calificación
        date: '15 de Enero de 2024', // Fecha de la reseña
    },
];

const Testimonials = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ) : (
                    <FaRegStar key={i} className="text-yellow-400 w-5 h-5" />
                )
            );
        }
        return stars;
    };

    return (
        <section id="testimonials" className="bg-gradient-to-t from-blue-200 via-blue-300 to-blue-400 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-950 mb-4">
                        Reseñas
                    </h2>
                    <p className="text-blue-950">
                        Lo que nuestros clientes dicen sobre nosotros.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-80 backdrop-saturate-100 backdrop-contrast-100 p-6 rounded-lg shadow-md hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full shadow-md mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-950">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-blue-950">{testimonial.role}</p>
                                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="flex">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
                            </div>
                            <p className="text-blue-950 mb-4">"{testimonial.testimonial}"</p>
                            <a
                                href={testimonial.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 hover:underline transition"
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
