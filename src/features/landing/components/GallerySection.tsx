'use client'

import { useState } from 'react'

const galleryItems = [
  { id: 1, emoji: '🎢', label: 'Thunder Dragon', bg: 'from-red-800 to-orange-900', size: 'large' },
  { id: 2, emoji: '🌊', label: 'Río Loco', bg: 'from-blue-800 to-cyan-900', size: 'small' },
  { id: 3, emoji: '🎡', label: 'Noria Estelar', bg: 'from-yellow-700 to-amber-900', size: 'small' },
  { id: 4, emoji: '🎠', label: 'Carrusel Mágico', bg: 'from-pink-800 to-rose-900', size: 'medium' },
  { id: 5, emoji: '🚀', label: 'G-Force', bg: 'from-purple-800 to-indigo-900', size: 'medium' },
  { id: 6, emoji: '🌀', label: 'Vórtice 360', bg: 'from-indigo-800 to-blue-900', size: 'small' },
  { id: 7, emoji: '🎪', label: 'Gran Show', bg: 'from-teal-800 to-green-900', size: 'small' },
  { id: 8, emoji: '🍔', label: 'FoodCourt', bg: 'from-orange-800 to-red-900', size: 'large' },
  {
    id: 9,
    emoji: '🎆',
    label: 'Show Nocturno',
    bg: 'from-violet-800 to-purple-900',
    size: 'medium',
  },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null)

  return (
    <section id="galeria" className="bg-gray-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1.5 text-pink-400 text-sm font-bold uppercase tracking-widest mb-4">
            📸 Galería
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Momentos{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              mágicos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada visita es una nueva aventura. ¡Mira lo que te espera!
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {galleryItems.map((item, i) => {
            const rowSpan =
              item.size === 'large'
                ? 'row-span-2'
                : item.size === 'medium'
                  ? 'row-span-2'
                  : 'row-span-1'
            const colSpan = item.size === 'large' ? 'col-span-2' : 'col-span-1'
            return (
              <div
                key={item.id}
                className={`${rowSpan} ${colSpan} bg-gradient-to-br ${item.bg} rounded-2xl overflow-hidden relative group cursor-pointer hover:scale-[1.02] transition-transform duration-300`}
                onClick={() => setLightbox(item)}
              >
                {/* Texture overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at ${(i * 37 + 20) % 80}% ${(i * 53 + 10) % 70}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className={`${item.size === 'large' ? 'text-7xl' : item.size === 'medium' ? 'text-6xl' : 'text-5xl'} drop-shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.emoji}
                  </span>
                  <span className="mt-2 text-white/0 group-hover:text-white/90 text-sm font-bold transition-all duration-300 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.label}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl" />

                {/* Expand icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-1.5 backdrop-blur-sm">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className={`relative bg-gradient-to-br ${lightbox.bg} rounded-3xl w-full max-w-lg aspect-square flex flex-col items-center justify-center shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-9xl mb-4">{lightbox.emoji}</div>
            <div className="text-white text-2xl font-black">{lightbox.label}</div>
            <div className="text-white/60 text-sm mt-2">FunWorld Park</div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
