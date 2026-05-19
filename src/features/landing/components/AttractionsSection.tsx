const attractions = [
  {
    id: 1,
    emoji: '🎢',
    name: 'Thunder Dragon',
    category: 'Montaña Rusa',
    description:
      'La montaña rusa más veloz de Latinoamérica. Alcanza los 130 km/h en caída libre de 80 metros.',
    intensity: 'Extrema',
    intensityColor: 'red',
    minHeight: '1.40m',
    gradient: 'from-red-600 to-orange-600',
    border: 'border-red-500/30',
    glow: 'shadow-red-500/20',
    duration: '3 min',
    rating: 5,
  },
  {
    id: 2,
    emoji: '🌊',
    name: 'Río Loco',
    category: 'Agua',
    description:
      'Un descenso épico por rápidos artificiales con caídas, giros y salpicones garantizados.',
    intensity: 'Moderada',
    intensityColor: 'blue',
    minHeight: '1.20m',
    gradient: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
    duration: '5 min',
    rating: 5,
  },
  {
    id: 3,
    emoji: '🚀',
    name: 'Lanzador G-Force',
    category: 'Lanzador',
    description:
      'De 0 a 120 km/h en 2.5 segundos. La adrenalina pura en su máxima expresión vertical.',
    intensity: 'Extrema',
    intensityColor: 'red',
    minHeight: '1.45m',
    gradient: 'from-purple-600 to-pink-600',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
    duration: '2 min',
    rating: 5,
  },
  {
    id: 4,
    emoji: '🎡',
    name: 'Noria Estelar',
    category: 'Familiar',
    description:
      'La noria más alta de la región. Vistas panorámicas de 360° a 80 metros de altura.',
    intensity: 'Suave',
    intensityColor: 'green',
    minHeight: 'Sin restricción',
    gradient: 'from-yellow-500 to-amber-500',
    border: 'border-yellow-500/30',
    glow: 'shadow-yellow-500/20',
    duration: '8 min',
    rating: 4,
  },
  {
    id: 5,
    emoji: '🎠',
    name: 'Carrusel Mágico',
    category: 'Infantil',
    description:
      'Un carrusel encantado con figuras de unicornios y dragones iluminados, perfecto para los pequeños.',
    intensity: 'Suave',
    intensityColor: 'green',
    minHeight: 'Sin restricción',
    gradient: 'from-pink-500 to-rose-500',
    border: 'border-pink-500/30',
    glow: 'shadow-pink-500/20',
    duration: '4 min',
    rating: 5,
  },
  {
    id: 6,
    emoji: '🌀',
    name: 'Vórtice 360',
    category: 'Inverso',
    description:
      'Loops completos a gran velocidad. Tu cerebro no sabrá dónde está el suelo... ¿o sí?',
    intensity: 'Extrema',
    intensityColor: 'red',
    minHeight: '1.40m',
    gradient: 'from-indigo-600 to-blue-600',
    border: 'border-indigo-500/30',
    glow: 'shadow-indigo-500/20',
    duration: '3 min',
    rating: 5,
  },
]

const intensityColors: Record<string, string> = {
  red: 'bg-red-500/20 text-red-400 border border-red-500/30',
  blue: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  green: 'bg-green-500/20 text-green-400 border border-green-500/30',
}

export default function AttractionsSection() {
  return (
    <section id="atracciones" className="bg-gray-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-orange-400 text-sm font-bold uppercase tracking-widest mb-4">
            🎢 Atracciones
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Emociones sin{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f97316, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              límite
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desde la adrenalina más extrema hasta la magia para los más pequeños. ¡Tenemos algo para
            todos!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className={`group relative bg-gray-900 rounded-3xl p-6 border ${attraction.border} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl ${attraction.glow} overflow-hidden`}
            >
              {/* BG gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${attraction.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${attraction.gradient} flex items-center justify-center text-3xl shadow-lg`}
                >
                  {attraction.emoji}
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-full ${intensityColors[attraction.intensityColor]}`}
                >
                  {attraction.intensity}
                </span>
              </div>

              {/* Category */}
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                {attraction.category}
              </div>

              {/* Name */}
              <h3 className="text-xl font-black text-white mb-2">{attraction.name}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{attraction.description}</p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                <span className="flex items-center gap-1">⏱ {attraction.duration}</span>
                <span className="flex items-center gap-1">📏 {attraction.minHeight}</span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={i < attraction.rating ? 'text-yellow-400' : 'text-gray-700'}
                    >
                      ★
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* More */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Y muchas más...{' '}
            <span className="text-yellow-400 font-bold">¡Más de 50 atracciones te esperan!</span>
          </p>
        </div>
      </div>
    </section>
  )
}
