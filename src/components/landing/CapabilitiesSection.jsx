import { useMemo, useState } from 'react'
import { NAVY, ELECTRIC, CURRENT_CAPABILITIES, ROADMAP_FEATURES } from './constants.js'
import { IconCheckCircle } from './Icons.jsx'

function StatusBadge({ status }) {
  if (status === 'live') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Disponible
      </span>
    )
  }
  if (status === 'launch') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
        Lanzamiento pronto
      </span>
    )
  }
  if (status === 'development') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        En desarrollo
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      Próximamente
    </span>
  )
}

export function CapabilitiesSection() {
  const [showAllCapabilities, setShowAllCapabilities] = useState(false)
  const [showRoadmap, setShowRoadmap] = useState(false)

  const visibleCapabilities = useMemo(() => {
    if (showAllCapabilities) return CURRENT_CAPABILITIES
    return CURRENT_CAPABILITIES.slice(0, 6)
  }, [showAllCapabilities])

  return (
    <section id="capacidades" className="scroll-mt-20 bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <h2 
            className="mt-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl" 
            style={{ color: NAVY }}
          >
            Lo que ya puedes usar hoy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Funcionalidades en producción, probadas y listas para tu práctica médica.
          </p>
        </div>

        {/* Capacidades actuales */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCapabilities.map((cap) => (
            <div
              key={cap.id}
              className="surface-panel hover-lift rounded-xl p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{cap.title}</h3>
                <StatusBadge status={cap.status} />
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{cap.description}</p>
            </div>
          ))}
        </div>

        {CURRENT_CAPABILITIES.length > 6 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllCapabilities((v) => !v)}
              className="button-press rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              {showAllCapabilities ? 'Ver menos funcionalidades' : 'Ver todas las funcionalidades'}
            </button>
          </div>
        )}

        {/* Roadmap */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
              Roadmap — lo que viene
            </h3>
            <p className="mt-2 text-slate-600">
              Mensajería, directorio, pediatría y dermatología ya están en producción. Esto es lo siguiente.
            </p>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setShowRoadmap((v) => !v)}
                className="button-press rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                {showRoadmap ? 'Ocultar roadmap' : 'Ver roadmap'}
              </button>
            </div>
          </div>

          {showRoadmap && (
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {ROADMAP_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="surface-panel rounded-xl border border-dashed border-slate-300 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                        <StatusBadge status={feature.status} />
                      </div>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                      {feature.date ? (
                        <p className="mt-1 text-xs font-medium text-slate-500">{feature.date}</p>
                      ) : null}
                      {feature.note && (
                        <p className="mt-1 text-xs italic text-slate-500">{feature.note}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}
