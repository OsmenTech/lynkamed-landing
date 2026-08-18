import { AnimatedSection } from './AnimatedSection.jsx'
import { ELECTRIC, CALENDLY_DEMO_LABEL, calendlyDemoUrl, registroUrl } from './constants.js'

const APP_HIGHLIGHTS = [
  'Pasaporte de salud con QR',
  'Citas y confirmación de asistencia',
  'Documentos y pagos',
  'Bienestar (pasos, agua, tips)',
  'Directorio de clínicas',
  'Mensajes con tu clínica',
]

/**
 * Anuncio de lanzamiento de la app paciente (captura real).
 * Una sección = un mensaje: la app llega pronto.
 */
export function AppLaunchSection() {
  return (
    <section
      id="app-paciente"
      className="relative scroll-mt-20 overflow-hidden px-5 py-20 md:px-8 md:py-28"
      style={{ backgroundColor: '#060d1f' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-[22rem] w-[22rem] rounded-full bg-indigo-500/10 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <AnimatedSection className="lg:col-span-6" variant="slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Lanzamiento pronto · iOS y Android
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            La app del paciente{' '}
            <span style={{ color: ELECTRIC }}>llega pronto</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
            Pasaporte de salud, citas, documentos y bienestar en el bolsillo.
            Misma experiencia que el portal, pensada para el día a día del paciente.
          </p>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {APP_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <svg className="h-4 w-4 shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={calendlyDemoUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow button-press inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white"
              style={{ backgroundColor: ELECTRIC }}
            >
              {CALENDLY_DEMO_LABEL}
            </a>
            <a
              href={registroUrl()}
              className="button-press inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              Preparar mi clínica
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Avísanos en la demo si quieres acceso anticipado para tus pacientes.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center lg:col-span-6 lg:justify-end" delay={120} variant="scale">
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-[3rem] opacity-60 blur-2xl"
              style={{ background: `radial-gradient(circle, ${ELECTRIC}33 0%, transparent 70%)` }}
            />
            <figure className="relative mx-auto w-[min(100%,280px)] sm:w-[300px]">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-[0_40px_80px_-20px_rgba(0,102,255,0.45)] ring-1 ring-white/10">
                <img
                  src="/app-paciente-home.jpg"
                  alt="Vista previa de la app LynkaMed para pacientes: pasaporte de salud, citas, bienestar y accesos rápidos"
                  width={471}
                  height={1024}
                  className="block h-auto w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="sr-only">
                Captura de la aplicación móvil LynkaMed para pacientes, próxima a lanzarse en iOS y Android.
              </figcaption>
            </figure>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
