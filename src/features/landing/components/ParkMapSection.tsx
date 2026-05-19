'use client'

import { useState } from 'react'

const zones = [
  {
    id: 'extrema',
    emoji: '🎢',
    label: 'Zona Extrema',
    color: 'from-red-600 to-orange-600',
    border: 'border-red-500/40',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    dot: 'bg-red-500',
    attractions: ['Thunder Dragon', 'Vórtice 360', 'Lanzador G-Force', 'Free Fall Tower'],
    description: 'Adrenalina al máximo para los más valientes.',
    position: { top: '10%', left: '60%' },
    size: { width: '28%', height: '30%' },
  },
  {
    id: 'familiar',
    emoji: '🎡',
    label: 'Zona Familiar',
    color: 'from-yellow-500 to-amber-500',
    border: 'border-yellow-500/40',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    dot: 'bg-yellow-400',
    attractions: ['Noria Estelar', 'Tren Fantasma', 'Bumper Cars', 'Mini Coaster'],
    description: 'Diversión para toda la familia sin límite de edad.',
    position: { top: '10%', left: '18%' },
    size: { width: '30%', height: '28%' },
  },
  {
    id: 'infantil',
    emoji: '🎠',
    label: 'Zona Infantil',
    color: 'from-pink-500 to-rose-500',
    border: 'border-pink-500/40',
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    dot: 'bg-pink-400',
    attractions: ['Carrusel Mágico', 'Mini Avioncitos', 'Casa del Mago', 'Trencito Arcoíris'],
    description: 'El reino encantado de los más pequeños.',
    position: { top: '50%', left: '8%' },
    size: { width: '26%', height: '28%' },
  },
  {
    id: 'acuatica',
    emoji: '🌊',
    label: 'Zona Acuática',
    color: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    dot: 'bg-blue-400',
    attractions: ['Río Loco', 'Splash Mountain', 'Piscina de Olas', 'Toboganes Acuáticos'],
    description: 'Refréscate con las mejores atracciones de agua.',
    position: { top: '50%', left: '52%' },
    size: { width: '34%', height: '30%' },
  },
  {
    id: 'gastronomica',
    emoji: '🍔',
    label: 'Zona Gastronómica',
    color: 'from-green-500 to-emerald-500',
    border: 'border-green-500/40',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    dot: 'bg-green-400',
    attractions: ['Food Court Central', 'Heladería Polar', 'Pizzería Express', 'Cantina Mexico'],
    description: 'Sabores del mundo en el corazón del parque.',
    position: { top: '50%', left: '38%' },
    size: { width: '14%', height: '28%' },
  },
]

const landmarks = [
  { emoji: '🚗', label: 'Estacionamiento', top: '84%', left: '5%' },
  { emoji: '🎟️', label: 'Entrada Principal', top: '84%', left: '42%' },
  { emoji: '🚻', label: 'Servicios', top: '84%', left: '70%' },
  { emoji: '🏥', label: 'Primeros Auxilios', top: '84%', left: '85%' },
]

export default function ParkMapSection() {
  const [activeZone, setActiveZone] = useState<string | null>(null)

  const selected = zones.find((z) => z.id === activeZone)

  return (
    <section id="mapa-parque" className="bg-gray-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">
            🗺️ Mapa del Parque
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Explora{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              FunWorld
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Planifica tu visita y descubre cada rincón del parque. Haz clic en una zona para ver sus
            atracciones.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div className="xl:col-span-2">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Map aspect ratio container */}
              <div className="relative w-full" style={{ paddingBottom: '70%' }}>
                {/* Background grid */}
                <div className="absolute inset-0">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={`h${i}`}
                      className="absolute left-0 right-0 border-t border-white/[0.04]"
                      style={{ top: `${(i + 1) * 10}%` }}
                    />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={`v${i}`}
                      className="absolute top-0 bottom-0 border-l border-white/[0.04]"
                      style={{ left: `${(i + 1) * 10}%` }}
                    />
                  ))}

                  {/* Main paths */}
                  {/* Horizontal central path */}
                  <div
                    className="absolute bg-gray-600/30 rounded-full"
                    style={{ top: '47%', left: '5%', right: '5%', height: '5px' }}
                  />
                  {/* Vertical central path */}
                  <div
                    className="absolute bg-gray-600/30 rounded-full"
                    style={{ top: '5%', bottom: '12%', left: '48%', width: '5px' }}
                  />
                  {/* Diagonal path */}
                  <div
                    className="absolute bg-gray-600/20"
                    style={{
                      top: '20%',
                      left: '15%',
                      width: '40%',
                      height: '4px',
                      transform: 'rotate(8deg)',
                    }}
                  />

                  {/* Zone blocks */}
                  {zones.map((zone) => (
                    <button
                      key={zone.id}
                      onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                      className={`absolute rounded-2xl border-2 transition-all duration-300 cursor-pointer group ${zone.border} ${
                        activeZone === zone.id
                          ? 'opacity-100 scale-[1.02] shadow-2xl'
                          : 'opacity-80 hover:opacity-100 hover:scale-[1.01]'
                      }`}
                      style={{
                        top: zone.position.top,
                        left: zone.position.left,
                        width: zone.size.width,
                        height: zone.size.height,
                        background:
                          activeZone === zone.id
                            ? `linear-gradient(135deg, ${zone.bg.replace('bg-', '')} 0%, transparent 100%)`
                            : undefined,
                        backgroundColor:
                          activeZone === zone.id ? undefined : 'rgba(17, 24, 39, 0.6)',
                      }}
                    >
                      {/* Zone inner content */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        {/* Subtle gradient fill */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${zone.color} transition-opacity duration-300 ${
                            activeZone === zone.id ? 'opacity-15' : 'opacity-5 group-hover:opacity-10'
                          }`}
                        />
                        {/* Label */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2">
                          <span className="text-xl sm:text-2xl">{zone.emoji}</span>
                          <span
                            className={`text-[10px] sm:text-xs font-black uppercase tracking-wider text-center leading-tight ${zone.text}`}
                          >
                            {zone.label}
                          </span>
                        </div>
                        {/* Active indicator */}
                        {activeZone === zone.id && (
                          <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-white animate-ping" />
                        )}
                      </div>
                    </button>
                  ))}

                  {/* Landmark icons at the bottom */}
                  {landmarks.map((lm, i) => (
                    <div
                      key={i}
                      className="absolute flex flex-col items-center gap-0.5"
                      style={{ top: lm.top, left: lm.left }}
                    >
                      <span className="text-base">{lm.emoji}</span>
                      <span className="text-gray-500 text-[9px] font-bold uppercase tracking-wide whitespace-nowrap">
                        {lm.label}
                      </span>
                    </div>
                  ))}

                  {/* Park name watermark */}
                  <div className="absolute top-3 left-4 flex items-center gap-2">
                    <span className="text-base">🎡</span>
                    <span className="text-white/30 text-xs font-black uppercase tracking-widest">
                      FunWorld Park
                    </span>
                  </div>

                  {/* Compass */}
                  <div className="absolute top-3 right-4 w-8 h-8 rounded-full bg-gray-950/60 border border-white/10 flex items-center justify-center text-sm backdrop-blur-sm">
                    🧭
                  </div>
                </div>
              </div>

              {/* Click hint */}
              <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-gray-600 text-xs">
                  👆 Haz clic en una zona para ver detalles
                </span>
                {activeZone && (
                  <button
                    onClick={() => setActiveZone(null)}
                    className="text-gray-500 hover:text-white text-xs transition-colors"
                  >
                    Limpiar selección ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar: Zone legend + detail */}
          <div className="flex flex-col gap-4">
            {/* Detail panel when a zone is selected */}
            {selected ? (
              <div
                className={`bg-gray-900 rounded-3xl p-6 border-2 ${selected.border} shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {selected.emoji}
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${selected.text} mb-0.5`}>
                      Zona seleccionada
                    </div>
                    <h3 className="text-white font-black text-lg">{selected.label}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{selected.description}</p>
                <div className="space-y-2">
                  <div className={`text-xs font-bold uppercase tracking-widest ${selected.text} mb-2`}>
                    🎯 Atracciones
                  </div>
                  {selected.attractions.map((att, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${selected.dot}`} />
                      <span className="text-gray-300 text-sm font-medium">{att}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-gray-900/50 rounded-3xl p-5 border border-white/5 text-center">
                <div className="text-4xl mb-3">🗺️</div>
                <div className="text-gray-400 text-sm">
                  Selecciona una zona en el mapa para ver sus atracciones y detalles.
                </div>
              </div>
            )}

            {/* Zone legend */}
            <div className="bg-gray-900 rounded-3xl p-5 border border-white/5">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                📋 Leyenda de Zonas
              </div>
              <div className="space-y-3">
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 ${
                      activeZone === zone.id
                        ? `${zone.bg} border ${zone.border}`
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${zone.color} flex items-center justify-center text-sm shrink-0`}
                    >
                      {zone.emoji}
                    </div>
                    <span className={`text-sm font-bold ${activeZone === zone.id ? zone.text : 'text-gray-300'}`}>
                      {zone.label}
                    </span>
                    {activeZone === zone.id && (
                      <span className={`ml-auto text-xs font-bold ${zone.text}`}>●</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Download map CTA */}
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/30 text-cyan-300 font-bold text-sm py-3.5 rounded-2xl transition-all duration-200 hover:scale-[1.02]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Descargar Mapa PDF
            </a>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { emoji: '🗺️', value: '5', label: 'Zonas Temáticas' },
            { emoji: '🎢', value: '50+', label: 'Atracciones' },
            { emoji: '🍔', value: '20+', label: 'Opciones de Comida' },
            { emoji: '🎟️', value: '1', label: 'Entrada Principal' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-2xl p-4 border border-white/5 text-center hover:border-white/10 transition-colors"
            >
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-gray-500 text-xs font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
