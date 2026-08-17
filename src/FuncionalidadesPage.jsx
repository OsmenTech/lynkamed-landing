import { useState } from 'react'
import { AnimatedSection } from './components/landing/AnimatedSection.jsx'
import { IconCalendar, IconCash, IconDental, IconHeartPulse, IconLayers, IconLungs, IconShare, IconSignature, IconSparkles, IconUsers } from './components/landing/Icons.jsx'
import { CURRENT_CAPABILITIES, ROADMAP_FEATURES, CLINIC_TYPES, CONSULTORIO_TYPES, registroUrl } from './components/landing/constants.js'
import { AppLaunchSection } from './components/landing/AppLaunchSection.jsx'
import { MarketingPageLayout } from './components/landing/MarketingPageLayout.jsx'

const LIVE_CAPABILITIES = CURRENT_CAPABILITIES.filter((item) => item.status === 'live')

const CAPABILITY_META = {
  portal: { Icon: IconUsers, highlights: ['Acceso con OTP', 'Documentos y mensajes'] },
  pasaporte: { Icon: IconShare, highlights: ['QR en recepción', 'Datos ICE'] },
  directorio: { Icon: IconLayers, highlights: ['Mapa de sedes', 'Ubicación y agenda'] },
  'chat-paciente': { Icon: IconUsers, highlights: ['Inbox clínica', 'Portal y app'] },
  caja: { Icon: IconCash, highlights: ['Pagos y egresos', 'Recibos digitales'] },
  analiticas: { Icon: IconLayers, highlights: ['Ingresos del periodo', 'Comparativa'] },
  presupuestos: { Icon: IconCash, highlights: ['Generación de cotizaciones', 'Visualización en portal del paciente'] },
  calendario: { Icon: IconCalendar, highlights: ['Vista calendario', 'Gestión por sucursal'] },
  recetas: { Icon: IconSignature, highlights: ['Firma electrónica', 'Verificación por QR'] },
  'firma-remota': { Icon: IconSignature, highlights: ['Enlace seguro', 'Firma desde el móvil'] },
  especialidades: { Icon: IconHeartPulse, highlights: ['Pediatría y dermatología', 'Módulos activables'] },
  pdf: { Icon: IconLayers, highlights: ['Expedientes y recetas', 'Exportación a PDF'] },
  sucursales: { Icon: IconLayers, highlights: ['Multi-sede', 'Permisos por sucursal'] },
  laboratorios: { Icon: IconLungs, highlights: ['Órdenes con estatus', 'Portal seguro'] },
  inventario: { Icon: IconLayers, highlights: ['Control de stock', 'Alertas por mínimo'] },
  'facturacion-cfdi': { Icon: IconCash, highlights: ['Timbrado CFDI 4.0', 'Descarga XML/PDF'] },
  'dental-avanzado': { Icon: IconDental, highlights: ['Odontograma', 'Radiografías'] },
  workspace: { Icon: IconShare, highlights: ['Médica Sur + Ángeles + particular', 'Un login, varios espacios'] },
  bienestar: { Icon: IconSparkles, highlights: ['Pasos e hidratación', 'Tips de bienestar'] },
  vademecum: { Icon: IconSignature, highlights: ['Búsqueda en recetas', 'Ficha del medicamento'] },
}

const CLINIC_SHOWCASE = [
  { label: 'Cardiología', Icon: IconHeartPulse },
  { label: 'Pediatría', Icon: IconUsers },
  { label: 'Dermatología', Icon: IconSparkles },
  { label: 'Dental', Icon: IconDental },
  { label: 'Ginecología', Icon: IconUsers },
  { label: 'Fisioterapia', Icon: IconLungs },
]

function RoadmapStatus({ status }) {
  if (status === 'launch') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Lanzamiento pronto
      </span>
    )
  }
  if (status === 'development') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> En desarrollo
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Próximamente
    </span>
  )
}

export default function FuncionalidadesPage() {
  const [tipoOperacion, setTipoOperacion] = useState('clinicas')

  return (
    <MarketingPageLayout
      eyebrow="Funcionalidades"
      title="Capacidades clínicas listas para operar hoy"
      description="Expediente por especialidad, pasaporte QR, directorio con mapa, mensajería paciente-clínica, caja, inventario y CFDI. LynkaMed conecta la operación real en una sola plataforma."
    >
      <section className="bg-[#f8fafc] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <AnimatedSection className="mb-10 flex flex-wrap items-end justify-between gap-4" variant="fade" once={false}>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Lo que ya puedes usar hoy</h2>
              <p className="mt-2 text-slate-600">Funcionalidades core disponibles para implementación inmediata.</p>
            </div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">⚡ Actualizado · Ago 2026</p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {LIVE_CAPABILITIES.map((capability, index) => {
              const meta = CAPABILITY_META[capability.id]
              const Icon = meta?.Icon ?? IconLayers
              const highlights = meta?.highlights ?? ['Disponible en producción']

              return (
                <AnimatedSection key={capability.id} variant="up" staggerIndex={index} once={false} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-900">{capability.title}</h3>
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                        Disponible
                      </span>
                    </div>
                    <p className="flex-1 text-sm leading-7 text-slate-600">{capability.description}</p>
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-500">
                      {highlights.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="text-emerald-500">✓</span>{bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <AnimatedSection className="mx-auto max-w-3xl text-center" variant="fade" once={false}>
            <h2 className="text-4xl font-extrabold tracking-tight">Clínicas y consultorios por especialidad</h2>
            <p className="mt-4 text-slate-300">
              Construimos expedientes por especialidad y los operamos como módulos activables en clínicas multiespecialidad.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-8 flex justify-center" variant="scale" once={false}>
            <div className="inline-flex rounded-full border border-slate-700 bg-slate-900 p-1">
              <button
                type="button"
                onClick={() => setTipoOperacion('clinicas')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  tipoOperacion === 'clinicas' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Clínicas
              </button>
              <button
                type="button"
                onClick={() => setTipoOperacion('consultorios')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  tipoOperacion === 'consultorios' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Consultorios
              </button>
            </div>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {CLINIC_SHOWCASE.map((item, index) => {
              const Icon = item.Icon
              return (
                <AnimatedSection key={item.label} variant="up" staggerIndex={index} className="text-center" once={false}>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-300">{item.label}</p>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="mt-8 rounded-2xl border border-blue-900/60 bg-blue-950/50 p-5 text-center" variant="fade" once={false}>
            <p className="text-sm font-semibold text-blue-200">
              {tipoOperacion === 'clinicas'
                ? 'En clínicas multiespecialidad puedes activar módulos por especialidad según tu operación actual y escalar sin migraciones.'
                : 'En consultorios activamos un flujo más directo por especialidad, con implementación rápida y expedientes ya listos.'}
            </p>
          </AnimatedSection>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tipoOperacion === 'clinicas'
              ? CLINIC_TYPES.map((clinic, index) => (
                  <AnimatedSection key={clinic.id} variant="up" staggerIndex={index} className="h-full" once={false}>
                  <article className="flex h-full flex-col rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700">
                    <h3 className="text-2xl font-bold text-white">{clinic.name}</h3>
                    <p className="mt-2 text-slate-300">{clinic.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {clinic.features.map((feature) => (
                        <span key={feature} className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-200">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                        Expedientes disponibles ({clinic.expedientes.length})
                      </p>
                      <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                        {clinic.expedientes.map((expediente) => (
                          <li key={expediente} className="flex items-center gap-2 text-sm text-slate-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            {expediente}
                          </li>
                        ))}
                      </ul>

                      {clinic.calculos?.length ? (
                        <p className="mt-4 text-xs text-slate-400">
                          Incluye {clinic.calculos.length} cálculos automáticos para apoyo clínico.
                        </p>
                      ) : null}
                    </div>

                    <a href={registroUrl()} className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300">
                      Empezar gratis →
                    </a>
                  </article>
                  </AnimatedSection>
                ))
              : CONSULTORIO_TYPES.map((consultorio, index) => (
                  <AnimatedSection key={consultorio.id} variant="up" staggerIndex={index} className="h-full" once={false}>
                  <article className="flex h-full flex-col rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: consultorio.color }} />
                      <h3 className="text-2xl font-bold text-white">{consultorio.name}</h3>
                    </div>
                    <p className="mt-2 text-slate-300">{consultorio.description}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider" style={{ color: consultorio.color }}>{consultorio.price}</p>

                    <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                        Expedientes por especialidad ({consultorio.expedientes.length})
                      </p>
                      <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                        {consultorio.expedientes.map((exp) => (
                          <li key={exp} className="flex items-center gap-2 text-sm text-slate-300">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: consultorio.color }} />
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a href={registroUrl()} className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300">
                      Empezar gratis →
                    </a>
                  </article>
                  </AnimatedSection>
                ))}
          </div>
        </div>
      </section>

      <AppLaunchSection />

      <section className="bg-[#f8fafc] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <AnimatedSection className="mb-14 flex flex-wrap items-center justify-between gap-4" variant="fade" once={false}>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">Hacia dónde vamos</span>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">Roadmap actualizado</h2>
              <p className="mt-2 max-w-xl text-slate-600">
                Chat paciente, directorio, pediatría, dermatología y vademécum ya están disponibles. Esto es lo siguiente.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative space-y-10 md:space-y-14">
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-slate-200 md:block" />

            {ROADMAP_FEATURES.map((item, index) => (
              <AnimatedSection key={item.id} variant="up" staggerIndex={index} className="grid items-center gap-8 md:grid-cols-2 md:gap-12" once={false}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <span className="inline-block rounded-full bg-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {item.date}
                  </span>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.description}</p>
                  <div className="mt-5">
                    <RoadmapStatus status={item.status} />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <img
                      src={item.image || '/lynkamed-logo.png'}
                      alt={item.title}
                      className={`h-52 w-full rounded-xl ${item.id === 'app-paciente' ? 'object-contain bg-slate-950 object-top' : 'object-cover'}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </MarketingPageLayout>
  )
}
