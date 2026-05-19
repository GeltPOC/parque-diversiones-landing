interface HeroProps {
  onBuyTicket: () => void
}

export default function HeroSection({ onBuyTicket }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />

      {/* Floating emojis */}
      <div
        className="absolute top-32 left-[8%] text-4xl opacity-60"
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        🎢
      </div>
      <div
        className="absolute top-48 right-[8%] text-4xl opacity-60"
        style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.5s' }}
      >
        🎠
      </div>
      <div
        className="absolute bottom-40 left-[12%] text-3xl opacity-50"
        style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}
      >
        🎡
      </div>
      <div
        className="absolute bottom-32 right-[12%] text-3xl opacity-50"
        style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1.5s' }}
      >
        🎪
      </div>
      <div
        className="absolute top-[60%] left-[5%] text-2xl opacity-40"
        style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '2s' }}
      >
        🎯
      </div>
      <div
        className="absolute top-[30%] right-[5%] text-2xl opacity-40"
        style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.8s' }}
      >
        🎆
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-5 py-2 mb-6 text-yellow-400 text-sm font-bold uppercase tracking-widest">
          <span className="animate-pulse">●</span> Abierto Todos los Días
        </div>

        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black leading-none mb-4 tracking-tight">
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #facc15 0%, #f97316 40%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(249,115,22,0.5))',
            }}
          >
            GeltLandia
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium mb-4 max-w-3xl mx-auto">
          El lugar donde los sueños cobran vida
        </p>
        <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          Más de <span className="text-yellow-400 font-bold">50 atracciones</span>, shows en vivo,
          gastronomía y experiencias únicas para toda la familia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBuyTicket}
            className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-black font-black text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-orange-500/60 transition-all duration-300 hover:scale-105 uppercase tracking-wide overflow-hidden"
          >
            <span className="relative z-10">🎟️ ¡Comprar Tickets Ahora!</span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
          <a
            href="#atracciones"
            className="flex items-center gap-2 text-white border-2 border-white/30 hover:border-white/70 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            Ver Atracciones
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {[
            { number: '50+', label: 'Atracciones' },
            { number: '2M+', label: 'Visitantes' },
            { number: '25', label: 'Años de Magia' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-yellow-400">{stat.number}</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#030712" />
        </svg>
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
