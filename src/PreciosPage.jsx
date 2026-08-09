import { AnimatedSection } from './components/landing/AnimatedSection.jsx'
import { IconCash, IconLayers, IconShieldCheck, IconUsers } from './components/landing/Icons.jsx'
import { MarketingPageLayout } from './components/landing/MarketingPageLayout.jsx'
import { PricingSection } from './components/landing/PricingSection.jsx'

const HIGHLIGHTS = [
  {
    Icon: IconLayers,
    title: '30 días gratis en todos los planes',
    text: 'Acceso completo al sistema desde el día 1. Sin tarjeta de crédito, sin compromiso.',
  },
  {
    Icon: IconShieldCheck,
    title: 'Soporte y actualizaciones incluidas',
    text: 'Todos los planes incluyen soporte operativo y acceso a nuevas funcionalidades sin costo adicional.',
  },
  {
    Icon: IconUsers,
    title: 'Portal del paciente incluido',
    text: 'Cada plan incluye el portal donde tus pacientes ven citas, documentos y resultados desde su dispositivo.',
  },
  {
    Icon: IconCash,
    title: 'CFDI como add-on opcional',
    text: 'La facturación electrónica se activa solo si la necesitas, a un costo escalonado según tu volumen mensual.',
  },
]

const COTIZACION_ITEMS = [
  { text: 'Cotizamos según **usuarios activos**, no por una estructura fija desde el inicio.' },
  { text: 'El precio varía según **especialidades habilitadas** y número de sedes.' },
  { text: 'Durante lanzamiento, la **migración de datos se incluye sin costo**.' },
  { text: 'CFDI es un add-on: el costo depende de tu **volumen mensual de facturas**.' },
]

function BoldText({ text }) {
  const parts = text.split(/\*\*(.+?)\*\*/)
  return (
    <span>
      {parts.map((p, i) =>
        i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-900">{p}</strong> : p
      )}
    </span>
  )
}

export default function PreciosPage() {
  return (
    <MarketingPageLayout
      eyebrow="Precios"
      title="Transparente desde el primer día."
      description="Sin letra chica. Sin cargos sorpresa. El precio que ves es el precio que pagas."
    >
      <PricingSection />

      {/* Highlights strip */}
      <section className="bg-white px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">¿Qué incluye cada plan?</h2>
            <p className="mt-1 text-sm text-slate-500">Todo lo que necesitas, nada que no.</p>
          </AnimatedSection>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h, i) => {
              const HIcon = h.Icon
              return (
              <AnimatedSection key={h.title} delay={i * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <HIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">{h.title}</h3>
                  <p className="mt-1.5 flex-1 text-xs leading-6 text-slate-500">{h.text}</p>
                </article>
              </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cotización clínicas */}
    </MarketingPageLayout>
  )
}
