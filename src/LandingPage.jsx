import { AnimatedSection } from './components/landing/AnimatedSection.jsx'
import { AppLaunchSection } from './components/landing/AppLaunchSection.jsx'
import { CapabilitiesSection } from './components/landing/CapabilitiesSection.jsx'
import { LandingFooter } from './components/landing/LandingFooter.jsx'
import { LandingHeader } from './components/landing/LandingHeader.jsx'
import { LandingHero } from './components/landing/LandingHero.jsx'
import { MultiWorkspaceSection } from './components/landing/MultiWorkspaceSection.jsx'
import { MobileStickyCta } from './components/landing/MobileStickyCta.jsx'
import { IconCalendar, IconQrCode, IconUsers } from './components/landing/Icons.jsx'
import { ELECTRIC, CALENDLY_DEMO_LABEL, calendlyDemoUrl, registroUrl } from './components/landing/constants.js'
import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineChartBar } from 'react-icons/hi'

const FEATURE_CARDS = [
  {
    title: 'Varios consultorios, una app',
    description: 'Atiende en Médica Sur, el Ángeles o tu consultorio particular: un login y cambias de espacio en segundos.',
    Icon: IconUsers,
  },
  {
    title: 'Pasaporte de salud QR',
    description: 'Vincula pacientes en recepción y muestra datos críticos en emergencia. Continuidad clínica sin duplicados.',
    Icon: IconQrCode,
  },
  {
    title: 'Agenda, caja y directorio',
    description: 'Citas multi-sucursal, finanzas del periodo y mapa de tu espacio.',
    Icon: IconCalendar,
  },
]

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col text-slate-800 antialiased">
      <LandingHeader />
      <main className="flex-1 pb-20 md:pb-0">
        <LandingHero />

        <section className="relative overflow-hidden bg-[#060d1f] px-5 py-20 md:px-8 md:py-28">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/5 to-transparent" />

          <div className="relative z-10 mx-auto max-w-[1280px]">
            <AnimatedSection className="mx-auto max-w-3xl">
              <span className="chip chip-navy mb-5 inline-flex">Plataforma clínica</span>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Capacidades pensadas para operar, no solo agendar
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Expediente por especialidad, portal del paciente, pasaporte QR, directorio y finanzas en una sola nube.
              </p>
            </AnimatedSection>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {FEATURE_CARDS.map((item, index) => {
                const FeatureIcon = item.Icon
                return (
                  <AnimatedSection key={item.title} delay={index * 80} className="h-full">
                    <article className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/5 p-7 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:bg-white/8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/30">
                        <FeatureIcon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{item.description}</p>
                      <a
                        href="/funcionalidades"
                        className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 opacity-80 transition-opacity group-hover:opacity-100"
                      >
                        Ver funcionalidades <span>→</span>
                      </a>
                    </article>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        <MultiWorkspaceSection />

        <AppLaunchSection />

        <CapabilitiesSection />

        <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1280px]">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <span className="chip chip-blue mb-5 inline-flex">¿Por qué LynkaMed?</span>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
                Todo lo que necesitas para crecer,{' '}
                <span style={{ color: ELECTRIC }}>desde el día uno.</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-500">
                Sin integraciones complicadas. Sin curvas de aprendizaje largas. Tu clínica, lista en horas.
              </p>
            </AnimatedSection>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                {
                  Icon: HiOutlineLightningBolt,
                  color: 'blue',
                  title: 'Listo en menos de un día',
                  desc: 'Configura tu clínica, importa pacientes y empieza a operar. Sin consultores, sin instalaciones, sin esperas.',
                },
                {
                  Icon: HiOutlineShieldCheck,
                  color: 'emerald',
                  title: 'Cumplimiento NOM-024',
                  desc: 'Expediente clínico electrónico con los estándares de la norma oficial mexicana para clínicas y consultorios.',
                },
                {
                  Icon: HiOutlineChartBar,
                  color: 'violet',
                  title: 'Visibilidad total de tu negocio',
                  desc: 'Reportes de ingresos, citas, expedientes y desempeño por sucursal. Toma decisiones con datos reales.',
                },
              ].map(({ Icon: StepIcon, color, title, desc }, i) => (
                <AnimatedSection key={title} delay={i * 80}>
                  <article className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      color === 'blue' ? 'bg-blue-50 text-blue-600 ring-1 ring-blue-100'
                      : color === 'emerald' ? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100'
                      : 'bg-violet-50 text-violet-600 ring-1 ring-violet-100'
                    }`}>
                      <StepIcon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">{title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{desc}</p>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={240} className="mt-10">
              <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-100 bg-slate-50 px-8 py-7 md:flex-row">
                <div>
                  <p className="text-lg font-bold text-slate-900">¿Listo para ver LynkaMed en acción?</p>
                  <p className="mt-1 text-sm text-slate-500">Prueba 30 días gratis. Sin tarjeta. Sin compromiso.</p>
                </div>
                <div className="flex shrink-0 gap-3">
                  <a
                    href={registroUrl()}
                    className="btn-glow button-press inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white"
                    style={{ backgroundColor: ELECTRIC }}
                  >
                    Empezar gratis →
                  </a>
                  <a
                    href={calendlyDemoUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-press inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {CALENDLY_DEMO_LABEL}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#002147] px-5 py-24 md:px-8">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-blue-500/20 blur-[90px]" />
          <div className="absolute -bottom-20 left-1/4 h-[20rem] w-[40rem] rounded-full bg-blue-800/30 blur-[80px]" />

          <AnimatedSection className="relative z-10 mx-auto max-w-3xl" variant="slide-up">
            <span className="chip chip-navy mb-6 inline-flex">30 días gratis · Sin tarjeta</span>
            <h2 className="text-4xl font-extrabold leading-[1.06] tracking-tight text-white md:text-5xl">
              Empieza hoy.<br />
              <span className="text-gradient-blue">Resultados desde el día 1.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Únete a los profesionales de salud que ya gestionan su clínica con menos esfuerzo y más orden.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={registroUrl()}
                className="btn-glow button-press inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white"
                style={{ backgroundColor: ELECTRIC }}
              >
                Crear cuenta gratis
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={calendlyDemoUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="button-press inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-8 py-4 text-base font-semibold text-white backdrop-blur hover:bg-white/14"
              >
                {CALENDLY_DEMO_LABEL}
              </a>
            </div>
            <div className="divider-x mt-12 opacity-20" />
            <div className="mt-8 flex flex-wrap gap-6">
              {['Sin contrato mínimo', 'Cancela cuando quieras', 'Soporte incluido', 'NOM-024', 'App paciente pronto'].map(t => (
                <span key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </section>
      </main>
      <LandingFooter />
      <MobileStickyCta />
    </div>
  )
}
