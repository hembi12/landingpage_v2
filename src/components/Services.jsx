// src/components/Services.jsx
import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaPaintBrush, FaLock, FaDatabase } from 'react-icons/fa'; // Agregamos el ícono para bases de datos

const services = [
    {
        id: 1,
        icon: <FaLaptopCode className="text-blue-500 w-12 h-12 mb-4" aria-hidden="true" />,
        title: 'Desarrollo Web',
        description: 'Creamos sitios web personalizados y responsivos que se adaptan a las necesidades de tu negocio.',
    },
    {
        id: 2,
        icon: <FaMobileAlt className="text-blue-500 w-12 h-12 mb-4" aria-hidden="true" />,
        title: 'Desarrollo Móvil',
        description: 'Desarrollamos aplicaciones móviles intuitivas y funcionales para iOS y Android.',
    },
    {
        id: 3,
        icon: <FaSearch className="text-blue-500 w-12 h-12 mb-4" aria-hidden="true" />,
        title: 'SEO y Marketing Digital',
        description: 'Optimización para motores de búsqueda y estrategias de marketing digital para aumentar tu visibilidad online.',
    },
    {
        id: 4,
        icon: <FaPaintBrush className="text-blue-500 w-12 h-12 mb-4" aria-hidden="true" />,
        title: 'Diseño UX/UI',
        description: 'Diseños atractivos y funcionales que mejoran la experiencia de tus usuarios.',
    },
    {
        id: 5,
        icon: <FaLock className="text-blue-500 w-12 h-12 mb-4" aria-hidden="true" />,
        title: 'Seguridad Web',
        description: 'Implementamos medidas de seguridad avanzadas para proteger tu sitio web y los datos de tus clientes.',
    },
    {
        id: 6,
        icon: <FaDatabase className="text-blue-500 w-12 h-12 mb-4" aria-hidden="true" />,
        title: 'Bases de Datos',
        description: 'Diseñamos, implementamos y optimizamos bases de datos para garantizar la eficiencia y escalabilidad de tus sistemas.',
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Título de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-gray-600">
                        Ofrecemos una amplia gama de servicios para ayudarte a establecer y hacer crecer tu presencia en línea.
                    </p>
                </div>
                {/* Lista de Servicios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                            {/* Ícono */}
                            <div className="flex items-center justify-center">
                                {service.icon}
                            </div>
                            {/* Título */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                                {service.title}
                            </h3>
                            {/* Descripción */}
                            <p className="text-gray-600 text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
