const schedule = [
  { day: 'Lunes', hours: '10:00 – 20:00', status: 'normal' },
  { day: 'Martes', hours: '10:00 – 20:00', status: 'normal' },
  { day: 'Miércoles', hours: '10:00 – 21:00', status: 'normal' },
  { day: 'Jueves', hours: '10:00 – 21:00', status: 'normal' },
  { day: 'Viernes', hours: '10:00 – 23:00', status: 'extended' },
  { day: 'Sábado', hours: '09:00 – 23:00', status: 'extended' },
  { day: 'Domingo', hours: '09:00 – 22:00', status: 'extended' },
]

const shows = [
  { time: '11:00', name: 'Show de Magia Infantil', location: 'Escenario Central', icon: '🎩' },
  { time: '13:00', name: 'Acrobacias Aéreas', location: 'Plaza Principal', icon: '🎪' },
  { time: '16:00', name: 'Concierto en Vivo', location: 'Anfiteatro', icon: '🎸' },
  { time: '19:00', name: 'Espectáculo de Fuego', location: 'Plaza Principal', icon: '🔥' },
  { time: '21:30', name: 'Show Nocturno con Fuegos', location: 'Todo el Parque', icon: '🎆' },
]

export default function ScheduleSection() {
  const today = new Date().getDay() // 0 = Sun, 6 = Sat
  const dayMap: Record<string, number> = {
    Domingo: 0,
    Lunes: 1,
    Martes: 2,
    Miércoles: 3,
    Jueves: 4,
    Viernes: 5,
    Sábado: 6,
  }

  return (
    <section id="horarios" className="bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 text-teal-400 text-sm font-bold uppercase tracking-widest mb-4">
            🕐 Horarios
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Planifica tu{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2dd4bf, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              visita
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos abiertos todos los días del año. ¡Los fines de semana hasta más tarde!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Schedule table */}
          <div className="bg-gray-950 rounded-3xl p-6 border border-white/5">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              📅 <span>Horario Semanal</span>
            </h3>
            <div className="space-y-2">
              {schedule.map((item) => {
                const isToday = dayMap[item.day] === today
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-colors ${
                      isToday
                        ? 'bg-yellow-400/10 border border-yellow-400/30'
                        : 'bg-white/3 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                      )}
                      <span
                        className={`font-semibold ${isToday ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        {item.day}
                        {isToday && (
                          <span className="ml-2 text-xs bg-yellow-400/20 text-yellow-400 px-2 py-0.5 rounded-full">
                            Hoy
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-bold ${isToday ? 'text-white' : 'text-gray-400'}`}>
                        {item.hours}
                      </span>
                      {item.status === 'extended' && (
                        <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full font-bold">
                          Extendido
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Special dates note */}
            <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">ℹ️</span>
                <div>
                  <div className="text-blue-400 font-bold text-sm mb-1">Días Festivos</div>
                  <div className="text-gray-400 text-sm">
                    En feriados el parque opera de 09:00 a 23:00 con programación especial.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shows schedule */}
          <div className="bg-gray-950 rounded-3xl p-6 border border-white/5">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              🎪 <span>Shows del Día</span>
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/40 via-orange-400/40 to-purple-400/40" />

              <div className="space-y-4">
                {shows.map((show, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    {/* Dot */}
                    <div className="w-16 shrink-0 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-gray-950 z-10 mt-1" />
                    </div>

                    <div className="flex-1 bg-white/3 hover:bg-white/5 rounded-2xl p-4 transition-colors border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{show.icon}</span>
                          <span className="font-bold text-white text-sm">{show.name}</span>
                        </div>
                        <span className="text-yellow-400 font-black text-sm shrink-0 ml-2">
                          {show.time}
                        </span>
                      </div>
                      <div className="text-gray-500 text-xs flex items-center gap-1">
                        <span>📍</span> {show.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special note */}
            <div className="mt-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">🎆</span>
                <div>
                  <div className="text-purple-400 font-bold text-sm mb-1">
                    Show Nocturno Especial
                  </div>
                  <div className="text-gray-400 text-sm">
                    ¡Los viernes y sábados el espectáculo de fuegos dura 30 minutos adicionales!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
