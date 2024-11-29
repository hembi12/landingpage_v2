// src/components/Pricing.jsx
import React from 'react';

const plans = [
    {
        id: 1,
        title: 'Plan Básico',
        price: '$99/mes',
        features: [
            '1 Página Web',
            'Diseño Responsivo',
            'Soporte Básico',
        ],
    },
    {
        id: 2,
        title: 'Plan Pro',
        price: '$199/mes',
        features: [
            'Hasta 5 Páginas Web',
            'Diseño Personalizado',
            'Optimización SEO Básica',
            'Soporte Prioritario',
        ],
        highlighted: true,
    },
    {
        id: 3,
        title: 'Plan Empresarial',
        price: '$399/mes',
        features: [
            'Sitio Web Ilimitado',
            'Integraciones Avanzadas',
            'Optimización SEO Completa',
            'Soporte Dedicado 24/7',
        ],
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-950 mb-4">
                        Precios
                    </h2>
                    <p className="text-blue-950">
                        Elige el plan que mejor se adapte a tus necesidades.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-90 backdrop-saturate-100 backdrop-contrast-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ${
                                plan.highlighted ? 'bg-yellow-400 transform scale-105' : 'bg-gray-100'
                            }`}
                        >
                            <h3 className="text-xl font-semibold text-blue-950 text-center mb-4">
                                {plan.title}
                            </h3>
                            <p className="text-3xl font-bold text-blue-950 text-center mb-4">
                                {plan.price}
                            </p>
                            <ul className="text-blue-600 mb-6">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center mb-2">
                                        <span className="mr-2 text-blue-600">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-center">
                                <button
                                    className={`px-6 py-3 rounded-md text-white font-bold shadow-lg ${
                                        plan.highlighted ? 'bg-blue-600 hover:bg-blue-500' : 'bg-amber-400 hover:bg-amber-300 text-blue-950'
                                    } transition`}
                                >
                                    Elegir Plan
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
