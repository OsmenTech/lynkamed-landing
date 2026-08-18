import { ELECTRIC, NAVY, registroUrl } from './constants.js'

const fmt = (n) => n.toLocaleString('es-MX')

/** Tarjetas destacadas en home / precios */
const PLANS = [
  {
    id: 'consultorio',
    name: 'Consultorio',
    tag: 'Médico independiente · 3 usuarios',
    price: '$899',
    priceNote: 'Terapias desde $699 · Dental $999',
    priceNormal: '$1,299',
    priceAnual: '$8,990',
    features: [
      'Hasta 3 usuarios por consultorio',
      'Varios consultorios en una cuenta',
      '1 sede por consultorio',
      'Expediente clínico NOM-024',
      'Agenda y portal del paciente',
      'Otro consultorio ~50% del base',
    ],
    cta: 'Empezar gratis',
    href: 'https://app.lynkamed.mx/registro?tipo=consultorio',
  },
  {
    id: 'dental',
    name: 'Clínica Dental',
    tag: 'El más elegido · 15 usuarios',
    price: '$1,699',
    priceNormal: '$2,299',
    priceAnual: '$16,990',
    features: [
      'Hasta 15 usuarios',
      'Sucursales adicionales (~50% del base)',
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
    tag: 'Clínica Pro · 15 usuarios',
    price: '$2,999',
    priceNormal: '$2,999',
    priceAnual: '$29,990',
    features: [
      'Hasta 15 usuarios',
      'Cardíaca, pulmonar y fisio',
      'Sucursales adicionales',
      'ECG y ecocardiograma',
      'Agenda multi-especialidad',
      'Portal del paciente',
    ],
    cta: 'Empezar gratis',
    href: 'https://app.lynkamed.mx/registro?tipo=clinica&especialidad=rehabilitacion_cardiopulmonar',
  },
]

const CONSULTORIO_ROWS = [
  { label: 'Nutrición / Psicología', promo: 699, lista: 999 },
  { label: 'Médico / especialidad', promo: 899, lista: 1299 },
  { label: 'Dental', promo: 999, lista: 1499 },
]

const CLINICA_ROWS = [
  { label: 'Nutrición / Psicología', promo: 999, lista: 999 },
  { label: 'Especialidad general', promo: 1399, lista: 1499 },
  { label: 'Dental', promo: 1699, lista: 2299 },
  { label: 'Rehabilitación', promo: 2999, lista: 2999 },
]

const CFDI_TIERS = [
  { range: '1 – 100 facturas', price: '$499/mes' },
  { range: '101 – 300 facturas', price: '$799/mes' },
  { range: 'Más de 300', price: 'Cotización' },
]

function PriceMatrix({ title, subtitle, rows, usersLabel }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs text-slate-500">{subtitle} · {usersLabel}</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[280px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              <th className="pb-2 pr-3">Especialidad base</th>
              <th className="pb-2 pr-3 text-right">Lanzamiento</th>
              <th className="pb-2 text-right">Lista</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-slate-50 last:border-0">
                <td className="py-2.5 pr-3 font-medium text-slate-700">{row.label}</td>
                <td className="py-2.5 pr-3 text-right font-bold text-slate-900">${fmt(row.promo)}</td>
                <td className="py-2.5 text-right text-slate-400 line-through">${fmt(row.lista)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function PricingSection() {
  return (
    <section id="precios" className="scroll-mt-20 bg-[#f8fafc] px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">

        <div className="mx-auto max-w-2xl">
          <span className="chip chip-blue">Precios</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Planes y precios
          </h2>
          <p className="mt-3 text-slate-500">
            Transparente, sin letra chica. 30 días gratis. Sin tarjeta. El precio base incluye una especialidad; add-ons opcionales desde $299/mes.
          </p>
        </div>

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

              <p className={`text-xs font-bold uppercase tracking-widest ${plan.featured ? 'text-blue-300' : 'text-blue-600'}`}>
                {plan.tag}
              </p>
              <h3 className={`mt-1.5 text-xl font-extrabold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>

              <div className="mt-5">
                <div className="flex items-end gap-1.5">
                  <span className={`text-5xl font-extrabold leading-none ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`mb-1 text-sm ${plan.featured ? 'text-blue-300' : 'text-slate-400'}`}>/mes</span>
                </div>
                {plan.priceNote && (
                  <p className={`mt-1.5 text-xs ${plan.featured ? 'text-blue-200/90' : 'text-slate-500'}`}>
                    {plan.priceNote}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {plan.priceNormal !== plan.price && (
                    <span className={`text-sm line-through ${plan.featured ? 'text-blue-400/70' : 'text-slate-400'}`}>
                      {plan.priceNormal}
                    </span>
                  )}
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${plan.featured ? 'bg-blue-500/30 text-blue-200' : 'bg-blue-50 text-blue-600'}`}>
                    Lanzamiento
                  </span>
                </div>
                <p className={`mt-1.5 text-xs ${plan.featured ? 'text-blue-300/80' : 'text-slate-400'}`}>
                  Anual: {plan.priceAnual} · 2 meses gratis
                </p>
              </div>

              <div className={`my-5 h-px ${plan.featured ? 'bg-white/10' : 'bg-slate-100'}`} />

              <ul className="flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-blue-400' : 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.featured ? 'text-blue-100' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={registroUrl(plan.href)}
                className={`btn-glow button-press mt-7 inline-flex w-full items-center justify-center rounded-xl py-3.5 text-sm font-bold transition-all ${
                  plan.featured ? 'bg-white text-[#002147] hover:bg-blue-50' : 'text-white'
                }`}
                style={!plan.featured ? { backgroundColor: ELECTRIC } : undefined}
              >
                {plan.cta} →
              </a>
              <p className={`mt-2.5 text-center text-[11px] ${plan.featured ? 'text-blue-300/70' : 'text-slate-400'}`}>
                Sin tarjeta · Cancela cuando quieras
              </p>
            </article>
          ))}
        </div>

        {/* Matriz completa */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <PriceMatrix
            title="Consultorio privado"
            subtitle="Precio base mensual (IVA incluido)"
            usersLabel="3 usuarios incluidos"
            rows={CONSULTORIO_ROWS}
          />
          <PriceMatrix
            title="Clínica"
            subtitle="Precio base mensual (IVA incluido)"
            usersLabel="15 usuarios incluidos"
            rows={CLINICA_ROWS}
          />
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm md:p-6">
          <p className="font-semibold text-slate-900">Espacios y add-ons</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span><strong>Otro consultorio</strong> en la misma cuenta: ~50% del plan base de la especialidad que elijas.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span><strong>Sucursal adicional</strong> (clínica): ~50% del plan base de tu clínica.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span><strong>Especialidades secundarias</strong> (add-on): desde $299/mes según módulo.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span><strong>Pago anual</strong>: pagas 10 meses y obtienes 2 meses sin costo.</span>
            </li>
          </ul>
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

        <p className="mt-6 text-center text-xs text-slate-400">
          Precios en pesos mexicanos · IVA incluido · Pago anual = 10 meses · 2 meses sin costo
        </p>
      </div>
    </section>
  )
}
