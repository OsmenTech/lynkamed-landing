import { useState } from 'react'
import { CONSULTORIO_TYPES, NAVY, ELECTRIC } from './constants.js'
import { IconCheckCircle } from './Icons.jsx'

export function ConsultorioTypesSection() {
  const [expandedId, setExpandedId] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const displayedTypes = showAll ? CONSULTORIO_TYPES : CONSULTORIO_TYPES.slice(0, 6)

  return (
    <section id="consultorios" className="scroll-mt-20 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span 
            className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold"
            style={{ backgroundColor: '#232b5f15', color: NAVY }}
          >
            Para Consultorios Privados
          </span>
          <h2 
            className="mt-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl" 
            style={{ color: NAVY }}
          >
            Tu consultorio, totalmente equipado
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Atiende en un hospital, en otro y en tu consultorio particular:{' '}
            <strong className="text-slate-800">una sola app, varios espacios.</strong>
          </p>
        </div>

        {/* All inclusive features - SOLO lo que realmente está incluido */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-wider text-emerald-700">
            Todos los planes incluyen
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agenda en línea',
              'Varios consultorios en una app',
              'Portal del paciente',
              'Recetas con e.firma',
              'Caja y finanzas',
              'PDF exportables',
              'Soporte incluido',
            ].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-emerald-800 shadow-sm"
              >
                <IconCheckCircle className="h-4 w-4 text-emerald-500" />
                {feature}
              </span>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            * Facturación CFDI 4.0 disponible con costo adicional según volumen
          </p>
        </div>

        {/* Consultorio grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedTypes.map((consultorio) => {
            const isExpanded = expandedId === consultorio.id

            return (
              <article
                key={consultorio.id}
                className={`group relative overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                  isExpanded ? 'ring-2 ring-offset-2 shadow-lg' : 'hover:shadow-md hover:border-slate-300'
                }`}
                style={{ 
                  borderColor: isExpanded ? consultorio.color : '#e2e8f0',
                  ringColor: consultorio.color 
                }}
              >
                {/* Header */}
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div 
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: consultorio.color }}
                    />
                    <h3 className="font-bold text-slate-900">{consultorio.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{consultorio.description}</p>
                </div>

                {/* Expand button - Icono + */}
                <button
                  type="button"
                  onClick={() => toggleExpand(consultorio.id)}
                  className="flex w-full items-center justify-center gap-2 border-t border-slate-100 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
                >
                  <span 
                    className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-400 transition-all duration-300"
                    style={{ 
                      borderColor: isExpanded ? consultorio.color : undefined,
                      color: isExpanded ? consultorio.color : undefined,
                      transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                  {isExpanded ? 'Ocultar' : 'Ver expedientes'}
                </button>

                {/* Expandable content */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 bg-slate-50 p-4">
                      <ul className="space-y-1.5">
                        {consultorio.expedientes.map((exp) => (
                          <li key={exp} className="flex items-center gap-2 text-sm text-slate-700">
                            <span 
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: consultorio.color }}
                            />
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Show more button */}
        {!showAll && CONSULTORIO_TYPES.length > 6 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              Ver todas las especialidades ({CONSULTORIO_TYPES.length - 6} más)
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* CTA */}
        <div 
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ backgroundColor: `${NAVY}08` }}
        >
          <h3 className="text-xl font-bold text-slate-900">
            ¿No encuentras tu especialidad?
          </h3>
          <p className="mt-2 text-slate-600">
            Contáctanos y configuramos el sistema para tu área. Trabajamos con todas las especialidades.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: ELECTRIC }}
            >
              Hablar con un asesor
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
