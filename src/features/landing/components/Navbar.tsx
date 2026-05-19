'use client'

import { useState, useEffect } from 'react'

interface NavbarProps {
  onBuyTicket: () => void
}

export default function Navbar({ onBuyTicket }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Atracciones', href: '#atracciones' },
    { label: 'Mapa del Parque', href: '#mapa-parque' },
    { label: 'Restaurantes', href: '#restaurantes' },
    { label: 'Precios', href: '#precios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Ubicación', href: '#ubicacion' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
              🎡
            </div>
            <span className="text-xl font-black tracking-tight">
              <span className="text-yellow-400">Gelt</span>
              <span className="text-orange-500">Landia</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={onBuyTicket}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-black px-6 py-2.5 rounded-full text-sm uppercase tracking-wide shadow-lg hover:shadow-orange-500/40 transition-all duration-200 hover:scale-105"
            >
              ¡Comprar Tickets!
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-gray-900/98 backdrop-blur-md rounded-2xl mb-4 p-4 border border-white/10 shadow-2xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 text-gray-300 hover:text-yellow-400 hover:bg-white/5 rounded-xl font-medium transition-all"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false)
                onBuyTicket()
              }}
              className="mt-2 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-3 rounded-xl uppercase tracking-wide"
            >
              ¡Comprar Tickets!
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
