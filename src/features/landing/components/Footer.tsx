export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    parque: [
      { label: 'Atracciones', href: '#atracciones' },
      { label: 'Precios', href: '#precios' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Horarios', href: '#horarios' },
    ],
    info: [
      { label: 'Preguntas frecuentes', href: '#' },
      { label: 'Normas del parque', href: '#' },
      { label: 'Accesibilidad', href: '#' },
      { label: 'Grupos y escuelas', href: '#' },
    ],
    contacto: [
      { label: 'Contáctanos', href: '#' },
      { label: 'Prensa', href: '#' },
      { label: 'Trabaja con nosotros', href: '#' },
      { label: 'Patrocinios', href: '#' },
    ],
  }

  const socials = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📸', label: 'Instagram', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '▶️', label: 'YouTube', href: '#' },
    { icon: '🎵', label: 'TikTok', href: '#' },
  ]

  return (
    <footer className="bg-gray-950 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                🎡
              </div>
              <span className="text-2xl font-black">
                <span className="text-yellow-400">Gelt</span>
                <span className="text-orange-500">Landia</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              El parque de diversiones más emocionante de Latinoamérica. 25 años creando momentos
              mágicos para toda la familia.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-base transition-colors border border-white/5 hover:border-white/20"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">
              El Parque
            </h4>
            <ul className="space-y-3">
              {links.parque.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">
              Información
            </h4>
            <ul className="space-y-3">
              {links.info.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              {links.contacto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © {currentYear} GeltLandia. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
              Términos
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
