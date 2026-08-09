import { useState } from 'react'
import { CLINIC_TYPES, NAVY, ELECTRIC } from './constants.js'
import { IconHeartPulse, IconDental, IconFisio, IconLungs, IconBuildingSwap, IconCheckCircle } from './Icons.jsx'
import { AnimatedSection } from './AnimatedSection.jsx'

const ICONS = {
  heart: IconHeartPulse,
  tooth: IconDental,
  dumbbell: IconFisio,
  lungs: IconLungs,
  building: IconBuildingSwap,
}

export function ClinicTypesSection() {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="clinicas" className="scroll-mt-20 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span 
            className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold"
            style={{ backgroundColor: `${ELECTRIC}15`, color: ELECTRIC }}
          >
            Para Clínicas y Hospitales
          </span>
          <h2 
            className="mt-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl" 
            style={{ color: NAVY }}
          >
            Tipos de clínicas que transformamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Expedientes especializados para cada tipo de clínica. 
            <strong className="text-slate-800"> Implementación personalizada</strong> y soporte dedicado.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CLINIC_TYPES.map((clinic, index) => {
            const Icon = ICONS[clinic.icon] || IconBuildingSwap
            const isExpanded = expandedId === clinic.id

            return (
              <AnimatedSection key={clinic.id} delay={index * 120}>
                <article
                  className={`group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                    isExpanded ? 'ring-2 ring-offset-2' : 'hover:shadow-lg'
                  }`}
                  style={{ 
                    borderColor: isExpanded ? clinic.color : '#e2e8f0',
                    ringColor: clinic.color 
                  }}
                >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${clinic.color}15` }}
                    >
                      <Icon className="h-7 w-7" style={{ color: clinic.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">{clinic.name}</h3>
                      <p className="mt-1 text-sm text-slate-600">{clinic.description}</p>
                    </div>
                  </div>

                  {/* Features chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {clinic.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        <IconCheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expand button */}
                <button
                  type="button"
                  onClick={() => toggleExpand(clinic.id)}
                  className="flex w-full items-center justify-center gap-2 border-t border-slate-100 bg-slate-50/50 px-6 py-3 text-sm font-semibold transition-colors hover:bg-slate-100"
                  style={{ color: clinic.color }}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 transition-transform duration-300"
                    style={{ 
                      borderColor: clinic.color,
                      transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                  {isExpanded ? 'Ver menos' : 'Ver detalles y cálculos'}
                </button>

                {/* Expandable content */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 bg-slate-50 p-6">
                      {/* Cálculos automáticos - si existen */}
                      {clinic.calculos && clinic.calculos.length > 0 && (
                        <div className="mb-6">
                          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                            <svg className="h-4 w-4" style={{ color: clinic.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            Cálculos automáticos ({clinic.calculos.length})
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {clinic.calculos.map((calc) => (
                              <span 
                                key={calc.nombre} 
                                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white"
                                style={{ backgroundColor: clinic.color }}
                              >
                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                {calc.nombre}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Expedientes */}
                      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Expedientes disponibles ({clinic.expedientes.length})
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {clinic.expedientes.map((exp) => (
                          <li key={exp} className="flex items-center gap-2 text-sm text-slate-700">
                            <span 
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: clinic.color }}
                            />
                            {exp}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/contacto"
                        className="mt-5 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
                        style={{ backgroundColor: clinic.color }}
                      >
                        Solicitar información
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              </AnimatedSection>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            ¿Tu tipo de clínica no está listada?{' '}
            <a href="/contacto" className="font-semibold underline decoration-2 underline-offset-2" style={{ color: ELECTRIC }}>
              Contáctanos para una solución personalizada
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
