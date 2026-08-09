import { NAVY, ELECTRIC, CALENDLY_DEMO_URL, CALENDLY_DEMO_LABEL } from './constants.js'
import { IconCheckCircle } from './Icons.jsx'

const SPACES = [
  { name: 'Médica Sur', detail: 'Agenda y pacientes de ese hospital' },
  { name: 'Hospital Ángeles', detail: 'Otro espacio, datos separados' },
  { name: 'Tu consultorio', detail: 'Tu práctica particular' },
]

const POINTS = [
  'Un solo login para todos tus espacios',
  'Cambias de consultorio en segundos',
  'Agenda, pacientes y equipo separados por lugar',
  'Sin otra app ni otro correo por hospital',
]

export function MultiWorkspaceSection() {
  return (
    <section id="multi-workspace" className="scroll-mt-20 border-y border-slate-100 bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span
              className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ backgroundColor: `${ELECTRIC}18`, color: NAVY }}
            >
              Para médicos en varios hospitales
            </span>
            <h2
              className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Una sola app. Todos tus consultorios.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Si atiendes en Médica Sur, en el Ángeles y en tu consultorio particular,
              no necesitas tres sistemas. Entras una vez y eliges el espacio con el que
              vas a trabajar hoy.
            </p>

            <ul className="mt-8 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-slate-700">
                  <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://app.lynkamed.mx/registro?tipo=consultorio"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white transition hover:opacity-95"
                style={{ backgroundColor: NAVY }}
              >
                Probar consultorio gratis
              </a>
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                {CALENDLY_DEMO_LABEL}
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
              style={{ background: `linear-gradient(135deg, ${ELECTRIC}33, ${NAVY}22)` }}
            />
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tus espacios
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                Elige con cuál trabajas ahora
              </p>
              <div className="mt-4 space-y-3">
                {SPACES.map((space, index) => (
                  <div
                    key={space.name}
                    className={`rounded-2xl border bg-white px-4 py-3.5 transition ${
                      index === 0
                        ? 'border-transparent shadow-md ring-2 ring-[#0066ff]'
                        : 'border-slate-200'
                    }`}
                    style={index === 0 ? { borderColor: `${ELECTRIC}55` } : undefined}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">{space.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{space.detail}</p>
                      </div>
                      {index === 0 ? (
                        <span
                          className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                          style={{ backgroundColor: ELECTRIC }}
                        >
                          Activo
                        </span>
                      ) : (
                        <span className="shrink-0 text-xs font-medium text-slate-400">Cambiar</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-[11px] text-slate-400">
                Cada espacio mantiene su agenda y pacientes por separado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
