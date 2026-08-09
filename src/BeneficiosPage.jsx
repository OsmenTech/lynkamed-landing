import { AnimatedSection } from './components/landing/AnimatedSection.jsx'
import { IconBuildingSwap, IconCash, IconLayers, IconShieldCheck, IconShare, IconSparkles } from './components/landing/Icons.jsx'
import { MarketingPageLayout } from './components/landing/MarketingPageLayout.jsx'
import { ELECTRIC, NAVY } from './components/landing/constants.js'

const BENEFITS = [
  {
    title: 'Menos tiempo en papeleo',
    text: 'Agenda, expedientes y recetas en un solo flujo. Lo que antes tomaba 10 minutos, ahora toma 2.',
    Icon: IconLayers,
  },
  {
    title: 'Todo el historial en un clic',
    text: 'Cada consulta, nota y resultado queda guardado y ordenado. Sin buscar en carpetas ni preguntarle al paciente qué le recetaron.',
    Icon: IconShare,
  },
  {
    title: 'Pacientes más satisfechos',
    text: 'Portal privado donde el paciente ve sus citas, documentos y resultados. Profesional, seguro y sin WhatsApp.',
    Icon: IconShieldCheck,
  },
  {
    title: 'Control financiero real',
    text: 'Caja por sucursal, cobros y facturación CFDI. Sabes exactamente cuánto entra y de dónde.',
    Icon: IconCash,
  },
  {
    title: 'Crece sin perder el control',
    text: 'Abre sucursales, suma doctores, cambia de sede en un clic. Tu operación escala con estructura, no con caos.',
    Icon: IconBuildingSwap,
  },
  {
    title: 'IA que ahorra tiempo real',
    text: 'Dicta tus notas clínicas y el sistema las transcribe al expediente. Menos escritura, más consulta.',
    Icon: IconSparkles,
  },
]

const TESTIMONIALS = [
  {
    quote: 'Antes usaba Excel y WhatsApp para todo. Ahora mis pacientes reciben su resumen por el portal y yo tengo todo el historial listo para la próxima consulta.',
    name: 'Dr. Medina',
    role: 'Cardiólogo, CDMX',
  },
  {
    quote: 'Tenemos 3 sucursales y por fin puedo ver todo desde un solo lugar. El cambio de sede es instantáneo.',
    name: 'Dra. Torres',
    role: 'Directora, Clínica de Rehabilitación',
  },
]

export default function BeneficiosPage() {
  return (
    <MarketingPageLayout
      eyebrow="Beneficios"
      title="Tu clínica, más ordenada y profesional desde el primer día."
      description="LynkaMed elimina el desorden operativo para que tú te enfoques en lo que importa: tus pacientes."
    >
      {/* Beneficios */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => {
              const Icon = b.Icon
              return (
                <AnimatedSection key={b.title} delay={i * 60}>
                  <article className="flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-[15px] font-bold text-slate-900">{b.title}</h3>
                    <p className="text-sm leading-7 text-slate-500">{b.text}</p>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparativa rápida */}
      <section className="relative overflow-hidden px-5 py-20 md:px-8" style={{ backgroundColor: '#060d1f' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <AnimatedSection className="mb-12 text-center">
            <span className="chip chip-navy mb-4 inline-flex">Comparativa</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Antes vs. con LynkaMed</h2>
            <p className="mt-3 text-slate-400">El mismo trabajo, con una fracción del esfuerzo.</p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {/* SIN */}
            <AnimatedSection delay={60}>
              <div className="h-full rounded-2xl border border-red-500/20 bg-red-950/30 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/20">
                    <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-red-400">Sin LynkaMed</p>
                </div>
                <ul className="space-y-4">
                  {['Expedientes en papel o Excel','Agenda en libreta o WhatsApp','Pacientes preguntando por sus resultados','Sin visibilidad financiera por sede','Múltiples apps que no se conectan'].map(t => (
                    <li key={t} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15">
                        <svg className="h-3.5 w-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      </div>
                      <span className="text-sm text-red-200/80">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* CON */}
            <AnimatedSection delay={120}>
              <div className="h-full rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20">
                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">Con LynkaMed</p>
                </div>
                <ul className="space-y-4">
                  {['Expediente electrónico por especialidad','Agenda online con recordatorios automáticos','Portal del paciente con acceso seguro','Caja y reportes por sucursal en tiempo real','Todo conectado en una sola plataforma'].map(t => (
                    <li key={t} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                        <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm font-semibold text-emerald-100/90">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </MarketingPageLayout>
  )
}
