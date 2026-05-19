interface CtaProps {
  onBuyTicket: () => void
}

export default function CtaSection({ onBuyTicket }: CtaProps) {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-purple-900" />
      <div className="absolute inset-0 bg-gray-950/60" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />

      {/* Floating emojis */}
      <div
        className="absolute top-8 left-[10%] text-5xl opacity-40"
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        🎟️
      </div>
      <div
        className="absolute top-16 right-[10%] text-4xl opacity-40"
        style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}
      >
        🎢
      </div>
      <div
        className="absolute bottom-8 left-[15%] text-4xl opacity-30"
        style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.5s' }}
      >
        🎡
      </div>
      <div
        className="absolute bottom-16 right-[15%] text-3xl opacity-30"
        style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1.5s' }}
      >
        ⭐
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-5 py-2 mb-8 text-yellow-400 text-sm font-bold uppercase tracking-widest">
          🔥 Oferta Limitada — 30% OFF Online
        </div>

        {/* Title */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          ¿Listo para la{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #facc15 0%, #f97316 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            aventura?
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          No esperes más. Compra tus tickets online y ahorra hasta un{' '}
          <span className="text-yellow-400 font-bold">30%</span> en relación al precio en taquilla.
        </p>
        <p className="text-gray-400 mb-10">
          Más de <span className="text-white font-bold">2 millones de personas</span> ya vivieron la
          magia de FunWorld Park.
        </p>

        {/* Main CTA */}
        <button
          onClick={onBuyTicket}
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-black font-black text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-orange-500/60 transition-all duration-300 hover:scale-105 uppercase tracking-wide overflow-hidden"
        >
          <span className="relative z-10 text-2xl">🎟️</span>
          <span className="relative z-10">¡Comprar Tickets Ahora!</span>
          <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        </button>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Pago 100% seguro
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Cancelación gratuita 48h antes
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Ticket digital instantáneo
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Validez 12 meses
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  )
}
