'use client'

import { useState } from 'react'

interface TicketModalProps {
  onClose: () => void
}

type TicketType = 'nino' | 'general' | 'senior' | 'familia'

const ticketOptions: {
  id: TicketType
  name: string
  price: number
  emoji: string
  desc: string
}[] = [
  {
    id: 'nino',
    name: 'Niño (3–11 años)',
    price: 18,
    emoji: '👧',
    desc: 'Zona infantil + atracciones',
  },
  { id: 'general', name: 'General (12–59 años)', price: 35, emoji: '🎢', desc: 'Acceso ilimitado' },
  {
    id: 'senior',
    name: 'Senior (60+ años)',
    price: 22,
    emoji: '🧓',
    desc: 'Acceso completo + zona VIP',
  },
  { id: 'familia', name: 'Pack Familia', price: 99, emoji: '👨‍👩‍👧‍👦', desc: '2 adultos + 2 niños' },
]

export default function TicketModal({ onClose }: TicketModalProps) {
  const [step, setStep] = useState<'select' | 'details' | 'success'>('select')
  const [quantities, setQuantities] = useState<Record<TicketType, number>>({
    nino: 0,
    general: 1,
    senior: 0,
    familia: 0,
  })
  const [visitDate, setVisitDate] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const total = ticketOptions.reduce((sum, t) => sum + t.price * quantities[t.id], 0)
  const totalTickets = ticketOptions.reduce((sum, t) => sum + quantities[t.id], 0)

  const handleQty = (id: TicketType, delta: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, prev[id] + delta) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitting(false)
    setStep('success')
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-gray-900 rounded-3xl w-full max-w-lg border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎟️</span>
            <span className="text-black font-black text-lg uppercase tracking-wide">
              {step === 'success' ? '¡Ticket Confirmado!' : 'Comprar Tickets'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="bg-black/20 hover:bg-black/40 text-black rounded-full p-1.5 transition-colors"
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

        <div className="overflow-y-auto flex-1">
          {/* Step: Select */}
          {step === 'select' && (
            <div className="p-6">
              <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-widest text-gray-400">
                Selecciona tu tipo de entrada
              </h3>
              <div className="space-y-3">
                {ticketOptions.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-center justify-between bg-gray-800 rounded-2xl p-4 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{ticket.emoji}</span>
                      <div>
                        <div className="text-white font-semibold text-sm">{ticket.name}</div>
                        <div className="text-gray-400 text-xs">{ticket.desc}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right mr-2">
                        <div className="text-yellow-400 font-black">${ticket.price}</div>
                        <div className="text-gray-500 text-xs">p/ entrada</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQty(ticket.id, -1)}
                          className="w-7 h-7 rounded-full bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center font-bold transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-white font-bold text-sm">
                          {quantities[ticket.id]}
                        </span>
                        <button
                          onClick={() => handleQty(ticket.id, 1)}
                          className="w-7 h-7 rounded-full bg-orange-500 hover:bg-orange-400 text-white flex items-center justify-center font-bold transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              {total > 0 && (
                <div className="mt-6 bg-gray-800 rounded-2xl p-4 border border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">
                      {totalTickets} entrada{totalTickets !== 1 ? 's' : ''}
                    </span>
                    <span className="text-2xl font-black text-yellow-400">${total}</span>
                  </div>
                  <div className="text-green-400 text-xs mt-1">
                    ✓ Precio con descuento online aplicado
                  </div>
                </div>
              )}

              <button
                onClick={() => total > 0 && setStep('details')}
                disabled={total === 0}
                className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-4 rounded-2xl uppercase tracking-wide disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity shadow-lg"
              >
                Continuar →
              </button>
            </div>
          )}

          {/* Step: Details */}
          {step === 'details' && (
            <form onSubmit={handleSubmit} className="p-6">
              <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-widest text-gray-400">
                Tus datos y fecha de visita
              </h3>

              {/* Summary */}
              <div className="bg-gray-800 rounded-2xl p-4 mb-6 border border-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-semibold">
                      {totalTickets} entrada{totalTickets !== 1 ? 's' : ''}
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">
                      {ticketOptions
                        .filter((t) => quantities[t.id] > 0)
                        .map((t) => `${quantities[t.id]}x ${t.name.split(' ')[0]}`)
                        .join(', ')}
                    </div>
                  </div>
                  <div className="text-yellow-400 font-black text-xl">${total}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                    Fecha de visita
                  </label>
                  <input
                    type="date"
                    required
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    min={today}
                    className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 text-white rounded-xl px-4 py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep('select')}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-2xl transition-colors"
                >
                  ← Volver
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-[2] bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-3 rounded-2xl uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />{' '}
                      Procesando...
                    </>
                  ) : (
                    <>✓ Confirmar Compra (${total})</>
                  )}
                </button>
              </div>

              <p className="text-center text-gray-500 text-xs mt-4">
                🔒 Pago seguro · Ticket digital por email
              </p>
            </form>
          )}

          {/* Step: Success */}
          {step === 'success' && (
            <div className="p-8 text-center">
              <div className="text-7xl mb-4" style={{ animation: 'bounce 1s ease-in-out 3' }}>
                🎉
              </div>
              <h3 className="text-white text-2xl font-black mb-2">¡Compra Exitosa!</h3>
              <p className="text-gray-400 mb-2">
                Hola <span className="text-white font-bold">{name}</span>, tu pedido fue confirmado.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Recibirás tus tickets digitales en <span className="text-yellow-400">{email}</span>{' '}
                en los próximos minutos.
              </p>

              {/* Ticket visual */}
              <div className="bg-gray-800 rounded-2xl p-5 border border-yellow-400/20 mb-6 text-left">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎡</span>
                    <span className="text-white font-black">FunWorld Park</span>
                  </div>
                  <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                    Confirmado
                  </span>
                </div>
                <div className="border-t border-dashed border-white/10 pt-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs">Fecha</div>
                      <div className="text-white font-semibold">{visitDate || 'Por confirmar'}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Entradas</div>
                      <div className="text-white font-semibold">
                        {totalTickets} ticket{totalTickets !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-gray-500 text-xs">Total pagado</div>
                      <div className="text-yellow-400 font-black text-xl">${total}</div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-3 rounded-2xl uppercase tracking-wide hover:opacity-90 transition-opacity"
              >
                ¡Genial, hasta pronto! 🎢
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
