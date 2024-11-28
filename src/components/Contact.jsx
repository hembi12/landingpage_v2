// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 py-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Contáctanos
                    </h2>
                    <p className="text-gray-600">
                        Ponte en contacto con nosotros para más información.
                    </p>
                </div>
                {/* Formulario de Contacto */}
                <form className="bg-white p-8 md:p-10 lg:p-12 rounded-lg shadow-lg space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Tu Nombre"
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="tu@correo.com"
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                            Asunto
                        </label>
                        <select
                            id="subject"
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Seleccione el asunto</option>
                            <option value="collaboration">Colaboración en proyectos</option>
                            <option value="freelance">Trabajo independiente</option>
                            <option value="job-opportunity">Oportunidad laboral</option>
                            <option value="general-inquiry">Consulta general</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            placeholder="Tu Mensaje"
                            rows="5"
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
