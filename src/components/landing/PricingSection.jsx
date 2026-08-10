import { ELECTRIC, NAVY } from './constants.js'

const PLANS = [
  {
    id: 'consultorio',
    name: 'Consultorio',
    tag: 'Médico independiente',
    price: '$999',
    priceNormal: '$1,299',
    priceAnual: '$9,990',
    features: [
      'Hasta 5 usuarios',
      'Varios consultorios en una cuenta',
      '1 sede por consultorio',
      'Expediente clínico electrónico',
      'Agenda y citas online',
      'Portal del paciente',
    ],
    cta: 'Empezar gratis',
    href: 'https://app.lynkamed.mx/registro?tipo=consultorio',
  },
  {
    id: 'dental',
    name: 'Clínica Dental',
    tag: 'El más elegido',
    price: '$1,699',
    priceNormal: '$1,999',
    priceAnual: '$16,990',
    features: [
      'Hasta 15 usuarios',
      'Sucursales adicionales',
      'Odontograma interactivo',
      'Planes de tratamiento',
      'Agenda multi-doctor',
      'Portal del paciente',
    ],
    cta: 'Empezar gratis',
    href: 'https://app.lynkamed.mx/registro?tipo=clinica&especialidad=dental',
    featured: true,
  },
  {
    id: 'rehabilitacion',
    name: 'Rehabilitación',
    tag: 'Cardíaca · Pulmonar · Fisio',
    price: '$3,000',
    priceNormal: '$3,000',
    priceAnual: '$30,000',
    features: [
      'Hasta 15 usuarios',
      'Sucursales adicionales',
      'Módulos cardíaco, pulmonar y fisio',
      'ECG, ecocardiograma',
      'Agenda multi-especialidad',
      'Portal del paciente',
    ],
    cta: 'Empezar gratis',
    href: 'https://app.lynkamed.mx/registro?tipo=clinica&especialidad=rehabilitacion_cardiopulmonar',
  },
]

const CFDI_TIERS = [
  { range: '1 – 100 facturas', price: '$499/mes' },
  { range: '101 – 300 facturas', price: '$799/mes' },
  { range: 'Más de 300', price: 'Cotización' },
]

export function PricingSection() {
  return (
    <section id="precios" className="scroll-mt-20 bg-[#f8fafc] px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="mx-auto max-w-2xl">
          <span className="chip chip-blue">Precios</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Planes y precios
          </h2>
          <p className="mt-3 text-slate-500">
            Transparente, sin letra chica. 30 días gratis. Sin tarjeta de crédito. Sin contrato mínimo.
          </p>
        </div>

        {/* Plans — featured in center, bigger */}
        <div className="mt-12 grid items-end gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl transition-all ${
                plan.featured
                  ? 'order-first row-span-1 p-8 shadow-[0_32px_80px_-20px_rgba(0,33,71,0.45)] lg:order-none lg:-my-4 lg:py-10'
                  : 'border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md'
              }`}
              style={plan.featured ? { backgroundColor: NAVY } : {}}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    Más popular
                  </span>
                </div>
              )}

              {/* Tag + Name */}
              <p className={`text-xs font-bold uppercase tracking-widest ${ plan.featured ? 'text-blue-300' : 'text-blue-600' }`}>
                {plan.tag}
              </p>
              <h3 className={`mt-1.5 text-xl font-extrabold ${ plan.featured ? 'text-white' : 'text-slate-900' }`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-5">
                <div className="flex items-end gap-1.5">
                  <span className={`text-5xl font-extrabold leading-none ${ plan.featured ? 'text-white' : 'text-slate-900' }`}>
                    {plan.price}
                  </span>
                  <span className={`mb-1 text-sm ${ plan.featured ? 'text-blue-300' : 'text-slate-400' }`}>/mes</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className={`text-sm line-through ${ plan.featured ? 'text-blue-400/70' : 'text-slate-400' }`}>{plan.priceNormal}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${ plan.featured ? 'bg-blue-500/30 text-blue-200' : 'bg-blue-50 text-blue-600' }`}>Lanzamiento</span>
                </div>
                <p className={`mt-1.5 text-xs ${ plan.featured ? 'text-blue-300/80' : 'text-slate-400' }`}>
                  Anual: {plan.priceAnual} · 2 meses gratis
                </p>
              </div>

              {/* Divider */}
              <div className={`my-5 h-px ${ plan.featured ? 'bg-white/10' : 'bg-slate-100' }`} />

              {/* Features */}
              <ul className="flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg className={`mt-0.5 h-4 w-4 shrink-0 ${ plan.featured ? 'text-blue-400' : 'text-blue-600' }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.featured ? 'text-blue-100' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`btn-glow button-press mt-7 inline-flex w-full items-center justify-center rounded-xl py-3.5 text-sm font-bold transition-all ${
                  plan.featured
                    ? 'bg-white text-[#002147] hover:bg-blue-50'
                    : 'text-white'
                }`}
                style={!plan.featured ? { backgroundColor: ELECTRIC } : undefined}
              >
                {plan.cta} →
              </a>
              <p className={`mt-2.5 text-center text-[11px] ${ plan.featured ? 'text-blue-300/70' : 'text-slate-400' }`}>
                Sin tarjeta · Cancela cuando quieras
              </p>
            </article>
          ))}
        </div>

        {/* CFDI Add-on strip */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white">
          <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-7">
            <div>
              <div className="flex items-center gap-2">
                <span className="chip chip-blue">Add-on opcional</span>
              </div>
              <h3 className="mt-2 text-base font-bold text-slate-900">Facturación CFDI 4.0</h3>
              <p className="mt-1 text-sm text-slate-500">Se activa sobre cualquier plan según tu volumen mensual de facturas.</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {CFDI_TIERS.map((t) => (
                  <div key={t.range} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                    <p className="text-[11px] text-slate-400">{t.range}</p>
                    <p className="text-sm font-bold text-slate-800">{t.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/contacto"
              className="button-press shrink-0 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Cotizar CFDI
            </a>
          </div>
        </div>

        {/* Pie */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Precios en pesos mexicanos. Pago anual = 10 meses · 2 meses sin costo.
        </p>
      </div>
    </section>
  )
}
