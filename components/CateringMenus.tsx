'use client';

import { motion } from 'framer-motion';

interface CateringMenusProps {
  onBooking: () => void;
}

const cateringPackages = [
  {
    id: 1,
    name: 'Lett & Leken',
    dishes: 6,
    price: '495',
    color: 'from-mint to-turkis',
    description: 'Perfekt for småselskaper og hyggestunder',
    features: [
      'Sesongbaserte råvarer',
      'Fargerik presentasjon',
      'Vegan-mulighet',
      'Minimum 10 personer'
    ]
  },
  {
    id: 2,
    name: 'Fest & Farger',
    dishes: 10,
    price: '695',
    color: 'from-cerise to-rosa',
    description: 'For bursdager, jubileer og feiring',
    features: [
      'Kreative smakskombinas jonner',
      'Kunstnerisk anretning',
      'Vegan 5-retters alternativ',
      'Minimum 10 personer'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Den Store Festpakken',
    dishes: 15,
    price: '895',
    color: 'from-gul to-orange',
    description: 'Alt du trenger for den store festen',
    features: [
      'Komplett meny',
      'Raw food-alternativer',
      'Vegan 10-retters alternativ',
      'Minimum 10 personer'
    ]
  }
];

export default function CateringMenus({ onBooking }: CateringMenusProps) {
  return (
    <section id="catering" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream via-mint/10 to-gul/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-brun mb-4"
          >
            Cateringmenyer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brun/70 max-w-2xl mx-auto"
          >
            Hver meny er unik og tilpasses dine ønsker. Priser er veiledende – 
            kontakt meg for et skreddersydd tilbud!
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cateringPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                pkg.popular ? 'ring-4 ring-cerise transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-cerise text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mest populær
                </div>
              )}

              <div className={`h-3 bg-gradient-to-r ${pkg.color}`} />

              <div className="p-8">
                <h3 className="font-display text-3xl font-bold text-brun mb-2">
                  {pkg.name}
                </h3>
                <p className="text-brun/70 mb-4">{pkg.description}</p>

                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-brun">{pkg.price}</span>
                  <span className="text-xl text-brun/70 ml-2">kr / kuvert</span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center text-brun/80 mb-3">
                    <svg className="w-5 h-5 mr-2 text-cerise" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold">{pkg.dishes} retter</span>
                  </div>

                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-brun/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onBooking}
                  className={`w-full py-3 bg-gradient-to-r ${pkg.color} text-white font-semibold rounded-full hover:shadow-lg transition-all`}
                >
                  Be om tilbud
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-display text-2xl font-bold text-brun mb-4">
            Viktig informasjon
          </h3>
          <ul className="space-y-3 text-brun/80">
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-cerise flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span><strong>Minimum:</strong> 10 personer for alle pakker</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-cerise flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span><strong>Priser:</strong> Er veiledende og avhenger av sesong, råvarer og antall gjester</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-cerise flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span><strong>Vegan:</strong> Alle menyer kan tilpasses til 100% plantebasert</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-cerise flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span><strong>Bestilling:</strong> Kontakt meg minst 2 uker før arrangementet</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
