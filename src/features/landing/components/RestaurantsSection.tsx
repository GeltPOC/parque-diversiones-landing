const restaurants = [
  {
    id: 1,
    emoji: '🍔',
    name: 'Burger Galaxy',
    category: 'Americana',
    description:
      'Las hamburguesas más jugosas del parque. Ingredientes frescos, pan artesanal y salsas secretas que te harán volver por más.',
    specialty: 'Burger Doble Volcán',
    priceRange: '$$',
    gradient: 'from-yellow-500 to-orange-500',
    border: 'border-yellow-500/30',
    glow: 'shadow-yellow-500/20',
    zone: 'Zona Gastronómica',
    schedule: '10:00 - 21:00',
    rating: 5,
    tags: ['Sin gluten', 'Para niños'],
  },
  {
    id: 2,
    emoji: '🍕',
    name: 'Pizzería Express',
    category: 'Italiana',
    description:
      'Pizzas al horno de leña con masa napolitana, preparadas en minutos. El clásico favorito de toda la familia.',
    specialty: 'Pizza Mágica 4 Quesos',
    priceRange: '$$',
    gradient: 'from-red-500 to-orange-600',
    border: 'border-red-500/30',
    glow: 'shadow-red-500/20',
    zone: 'Zona Gastronómica',
    schedule: '10:00 - 21:00',
    rating: 5,
    tags: ['Vegetariano', 'Para niños'],
  },
  {
    id: 3,
    emoji: '🌮',
    name: 'Cantina México',
    category: 'Mexicana',
    description:
      'Auténticos sabores mexicanos: tacos, burritos, quesadillas y nachos preparados con recetas tradicionales y picante al gusto.',
    specialty: 'Taco Combo Fiesta',
    priceRange: '$',
    gradient: 'from-green-500 to-emerald-600',
    border: 'border-green-500/30',
    glow: 'shadow-green-500/20',
    zone: 'Zona Gastronómica',
    schedule: '11:00 - 20:00',
    rating: 4,
    tags: ['Picante', 'Sin gluten'],
  },
  {
    id: 4,
    emoji: '🍦',
    name: 'Heladería Polar',
    category: 'Postres',
    description:
      'Más de 30 sabores de helados artesanales, frappés, batidos y waffles. El punto dulce imprescindible de tu visita.',
    specialty: 'Sundae Arcoíris',
    priceRange: '$',
    gradient: 'from-pink-500 to-rose-500',
    border: 'border-pink-500/30',
    glow: 'shadow-pink-500/20',
    zone: 'Zona Familiar',
    schedule: '10:00 - 22:00',
    rating: 5,
    tags: ['Vegano', 'Para niños'],
  },
  {
    id: 5,
    emoji: '🍱',
    name: 'Dragon Wok',
    category: 'Asiática',
    description:
      'Cocina asiática fusión: ramen, sushi rolls, dim sum y salteados al wok llenos de sabor y color en cada bocado.',
    specialty: 'Ramen del Dragón',
    priceRange: '$$$',
    gradient: 'from-purple-600 to-indigo-600',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
    zone: 'Food Court Central',
    schedule: '12:00 - 21:00',
    rating: 5,
    tags: ['Sin gluten', 'Vegetariano'],
  },
  {
    id: 6,
    emoji: '🥗',
    name: 'Green & Fresh',
    category: 'Saludable',
    description:
      'Ensaladas gourmet, bowls nutritivos, jugos naturales y opciones saludables para quienes cuidan su alimentación sin renunciar al sabor.',
    specialty: 'Power Bowl Tropical',
    priceRange: '$$',
    gradient: 'from-cyan-500 to-teal-500',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/20',
    zone: 'Food Court Central',
    schedule: '10:00 - 20:00',
    rating: 4,
    tags: ['Vegano', 'Sin gluten'],
  },
]

const priceColors: Record<string, string> = {
  $: 'bg-green-500/20 text-green-400 border border-green-500/30',
  $$: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  $$$: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
}

const tagColors: Record<string, string> = {
  'Sin gluten': 'bg-blue-500/10 text-blue-400',
  Vegetariano: 'bg-green-500/10 text-green-400',
  Vegano: 'bg-emerald-500/10 text-emerald-400',
  'Para niños': 'bg-pink-500/10 text-pink-400',
  Picante: 'bg-red-500/10 text-red-400',
}

export default function RestaurantsSection() {
  return (
    <section id="restaurantes" className="bg-gray-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 text-amber-400 text-sm font-bold uppercase tracking-widest mb-4">
            🍽️ Restaurantes
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Sabores para{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              todos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recarga energías con nuestra selección de restaurantes. Desde comida rápida hasta
            opciones gourmet, ¡hay para todos los gustos!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className={`group relative bg-gray-900 rounded-3xl p-6 border ${restaurant.border} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl ${restaurant.glow} overflow-hidden`}
            >
              {/* BG gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${restaurant.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${restaurant.gradient} flex items-center justify-center text-3xl shadow-lg`}
                >
                  {restaurant.emoji}
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-full ${priceColors[restaurant.priceRange]}`}
                >
                  {restaurant.priceRange}
                </span>
              </div>

              {/* Category */}
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                {restaurant.category}
              </div>

              {/* Name */}
              <h3 className="text-xl font-black text-white mb-2">{restaurant.name}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{restaurant.description}</p>

              {/* Specialty */}
              <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 mb-4">
                <span className="text-sm">⭐</span>
                <span className="text-gray-300 text-xs font-semibold">
                  Especialidad: <span className="text-white font-bold">{restaurant.specialty}</span>
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {restaurant.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[tag] ?? 'bg-gray-700 text-gray-400'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                <span className="flex items-center gap-1">📍 {restaurant.zone}</span>
                <span className="flex items-center gap-1">🕙 {restaurant.schedule}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-0.5 mt-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={i < restaurant.rating ? 'text-yellow-400' : 'text-gray-700'}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border border-amber-500/20 rounded-3xl p-8 text-center">
          <div className="text-4xl mb-3">🍽️</div>
          <h3 className="text-white font-black text-2xl mb-2">¿Tienes alguna restricción alimentaria?</h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-5">
            Todos nuestros restaurantes cuentan con menús especiales para celíacos, veganos y
            vegetarianos. Consulta con nuestro personal en cada punto de venta.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            🥗 Ver menús especiales
          </a>
        </div>
      </div>
    </section>
  )
}
