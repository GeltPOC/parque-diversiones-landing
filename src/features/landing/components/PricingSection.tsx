interface PricingProps {
  onBuyTicket: () => void
}

const plans = [
  {
    id: 'nino',
    name: 'Niño',
    ageRange: '3 – 11 años',
    emoji: '👧',
    price: 18,
    originalPrice: 25,
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/40',
    glowColor: 'shadow-pink-500/20',
    features: [
      'Acceso a zona infantil',
      'Carrusel Mágico ilimitado',
      'Mini autos de choque',
      'Show infantil incluido',
      'Pulsera de acceso',
    ],
    popular: false,
  },
  {
    id: 'general',
    name: 'General',
    ageRange: '12 – 59 años',
    emoji: '🎢',
    price: 35,
    originalPrice: 50,
    color: 'from-yellow-400 to-orange-500',
    borderColor: 'border-yellow-400/50',
    glowColor: 'shadow-yellow-400/30',
    features: [
      'Acceso ilimitado al parque',
      'Todas las atracciones',
      'Shows y espectáculos',
      'Zona de juegos arcade',
      'Descuento 10% en gastronomía',
      'Pulsera de acceso',
    ],
    popular: true,
  },
  {
    id: 'senior',
    name: 'Senior',
    ageRange: '60+ años',
    emoji: '🧓',
    price: 22,
    originalPrice: 30,
    color: 'from-green-500 to-teal-500',
    borderColor: 'border-green-500/40',
    glowColor: 'shadow-green-500/20',
    features: [
      'Acceso completo al parque',
      'Atracciones para adultos mayores',
      'Shows y espectáculos',
      'Zona de descanso VIP',
      'Pulsera de acceso',
    ],
    popular: false,
  },
  {
    id: 'familia',
    name: 'Pack Familia',
    ageRange: '2 adultos + 2 niños',
    emoji: '👨‍👩‍👧‍👦',
    price: 99,
    originalPrice: 140,
    color: 'from-purple-500 to-indigo-500',
    borderColor: 'border-purple-500/40',
    glowColor: 'shadow-purple-500/20',
    features: [
      'Acceso ilimitado para 4',
      'Todas las atracciones',
      'Shows y espectáculos',
      'Comida para 4 incluida',
      'Foto familiar de recuerdo',
      'Acceso prioritario Fast Pass',
      'Pulseras de acceso',
    ],
    popular: false,
  },
]

export default function PricingSection({ onBuyTicket }: PricingProps) {
  return (
    <section id="precios" className="bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-bold uppercase tracking-widest mb-4">
            🎟️ Entradas
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Elige tu{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #facc15, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              experiencia
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Precios especiales online. ¡Ahorra hasta un 30% comprando por adelantado!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gray-950 rounded-3xl border ${plan.borderColor} shadow-xl ${plan.glowColor} overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-gray-900' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-black uppercase tracking-widest text-center py-2">
                  🔥 Más Popular
                </div>
              )}

              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${plan.color}`} />

              <div className="p-6">
                {/* Emoji & Name */}
                <div className="text-4xl mb-3">{plan.emoji}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                  {plan.ageRange}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{plan.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black text-white">${plan.price}</span>
                    <div className="pb-2">
                      <div className="text-gray-500 line-through text-sm">
                        ${plan.originalPrice}
                      </div>
                      <div className="text-green-400 text-xs font-bold">Precio online</div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">por persona / día</div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={onBuyTicket}
                  className={`w-full bg-gradient-to-r ${plan.color} text-${plan.popular ? 'black' : 'white'} font-black py-3 rounded-2xl uppercase tracking-wide text-sm hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl`}
                >
                  Comprar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <span className="mr-1">ℹ️</span>
          Los menores de 3 años entran <span className="text-white font-semibold">gratis</span>.
          Precios en USD. Incluye impuestos.
        </div>
      </div>
    </section>
  )
}
