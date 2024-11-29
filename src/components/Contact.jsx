import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido.';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Seleccione un asunto.';
        if (!formData.message.trim()) newErrors.message = 'El mensaje no puede estar vacío.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulario enviado:', formData);
            alert('Formulario enviado exitosamente.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({});
        }
    };

    return (
        <section id="contact" className="bg-gradient-to-t from-blue-200 via-blue-300 to-blue-400 py-20">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-950 mb-4">
                        Contáctanos
                    </h2>
                    <p className="text-blue-950">
                        Ponte en contacto con nosotros para más información.
                    </p>
                </div>
                {/* Formulario de Contacto */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-80 backdrop-saturate-100 backdrop-contrast-100 p-8 md:p-10 lg:p-12 rounded-lg shadow-md hover:shadow-xl space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-blue-950 font-medium mb-2">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Tu Nombre"
                            className="w-full px-4 py-3 border border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-blue-950 font-medium mb-2">
                            Correo Electrónico:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="tu@correo.com"
                            className="w-full px-4 py-3 border border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-blue-950 font-medium mb-2">
                            Asunto:
                        </label>
                        <select
                            id="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border rounded-md focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Seleccione el asunto</option>
                            <option value="website-creation">Creación de una página web</option>
                            <option value="website-redesign">Rediseño de mi página web</option>
                            <option value="ecommerce">Desarrollo de una tienda en línea</option>
                            <option value="seo-optimization">Optimización SEO para mi sitio web</option>
                            <option value="maintenance">Mantenimiento de una página web</option>
                            <option value="custom-project">Desarrollo de un proyecto personalizado</option>
                            <option value="consultation">Consulta o asesoramiento</option>
                        </select>
                        {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-blue-950 font-medium mb-2">
                            Mensaje:
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tu Mensaje"
                            rows="5"
                            className="w-full px-4 py-3 border border rounded-md focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold px-4 py-3 rounded-md shadow-lg hover:bg-blue-500 transition"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
