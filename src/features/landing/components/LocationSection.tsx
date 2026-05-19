export default function LocationSection() {
  return (
    <section id="ubicacion" className="bg-gray-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 text-green-400 text-sm font-bold uppercase tracking-widest mb-4">
            📍 Ubicación
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Cómo{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4ade80, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              llegarnos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nos ubicamos en el corazón de la ciudad, fácil acceso en transporte público y privado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map placeholder */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-white/10 aspect-[16/9]">
              {/* Decorative map-like background */}
              <div className="absolute inset-0">
                {/* Grid lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`h${i}`}
                    className="absolute left-0 right-0 border-t border-white/5"
                    style={{ top: `${(i + 1) * 12.5}%` }}
                  />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={`v${i}`}
                    className="absolute top-0 bottom-0 border-l border-white/5"
                    style={{ left: `${(i + 1) * 10}%` }}
                  />
                ))}

                {/* Roads */}
                <div
                  className="absolute bg-gray-600/40 rounded-full"
                  style={{ top: '45%', left: 0, right: 0, height: '6px' }}
                />
                <div
                  className="absolute bg-gray-600/40 rounded-full"
                  style={{ left: '55%', top: 0, bottom: 0, width: '6px' }}
                />
                <div
                  className="absolute bg-gray-600/30"
                  style={{
                    top: '65%',
                    left: '10%',
                    right: '40%',
                    height: '4px',
                    transform: 'rotate(-5deg)',
                  }}
                />

                {/* Blocks */}
                {[
                  { top: '15%', left: '8%', w: '18%', h: '20%', color: 'bg-gray-700/30' },
                  { top: '15%', left: '30%', w: '20%', h: '15%', color: 'bg-gray-700/30' },
                  { top: '15%', left: '60%', w: '30%', h: '25%', color: 'bg-blue-900/20' },
                  { top: '55%', left: '8%', w: '40%', h: '25%', color: 'bg-gray-700/20' },
                  { top: '55%', left: '62%', w: '28%', h: '20%', color: 'bg-gray-700/30' },
                ].map((block, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-lg ${block.color}`}
                    style={{ top: block.top, left: block.left, width: block.w, height: block.h }}
                  />
                ))}

                {/* Park marker */}
                <div
                  className="absolute"
                  style={{ top: '28%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/20 border-2 border-yellow-400/60 flex items-center justify-center animate-pulse">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/50 to-orange-500/30 flex items-center justify-center">
                        <span className="text-2xl">🎡</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-950 border border-yellow-400/40 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                      FunWorld Park
                    </div>
                  </div>
                </div>

                {/* Compass */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-950/70 border border-white/20 flex items-center justify-center text-sm backdrop-blur-sm">
                  🧭
                </div>
              </div>

              {/* Address overlay */}
              <div className="absolute bottom-4 left-4 bg-gray-950/80 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                <div className="text-white font-bold text-sm">📍 Av. de la Diversión 1234</div>
                <div className="text-gray-400 text-xs">Ciudad del Sol, CP 10001</div>
              </div>

              {/* Open in maps button */}
              <a
                href="#"
                className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Abrir en Maps
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="bg-gray-900 rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-white font-bold mb-1">Dirección</div>
                  <div className="text-gray-400 text-sm">Av. de la Diversión 1234</div>
                  <div className="text-gray-400 text-sm">Ciudad del Sol, CP 10001</div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-900 rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-lg shrink-0">
                  📞
                </div>
                <div>
                  <div className="text-white font-bold mb-1">Teléfono</div>
                  <div className="text-gray-400 text-sm">+1 (555) 123-4567</div>
                  <div className="text-gray-400 text-sm">Lun–Dom 9:00–21:00</div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-900 rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <div className="text-white font-bold mb-1">Email</div>
                  <div className="text-gray-400 text-sm">info@funworldpark.com</div>
                  <div className="text-gray-400 text-sm">Respondemos en 24h</div>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="bg-gray-900 rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-lg shrink-0">
                  🚌
                </div>
                <div>
                  <div className="text-white font-bold mb-1">Cómo llegar</div>
                  <div className="text-gray-400 text-sm mb-1">🚇 Metro: Línea 3 – Est. Parque</div>
                  <div className="text-gray-400 text-sm mb-1">🚌 Bus: Líneas 15, 22, 48</div>
                  <div className="text-gray-400 text-sm">🚗 Estacionamiento gratuito</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
