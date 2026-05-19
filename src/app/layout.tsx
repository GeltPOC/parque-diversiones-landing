import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GeltLandia — El Parque de Tus Sueños',
  description:
    'El parque de diversiones más emocionante. Atracciones extremas, shows en vivo y diversión para toda la familia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-950 text-white overflow-x-hidden">{children}</body>
    </html>
  )
}
