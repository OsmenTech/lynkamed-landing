import { useMemo, useState } from 'react'
import { FAQ_ITEMS } from './constants.js'
import { ELECTRIC, CALENDLY_DEMO_URL, CALENDLY_DEMO_LABEL } from './constants.js'

const FAQ_BY_ID = Object.fromEntries(FAQ_ITEMS.map((item) => [item.id, item]))

const FAQ_SECTIONS = [
  {
    id: 'planes',
    title: 'Planes y contratación',
    subtitle: 'Qué incluye cada plan y cómo se adapta a tu operación.',
    icon: 'card',
    items: ['nom-024', 'prueba-gratis', 'que-incluye', 'cancelar', 'sucursales'],
    featureCards: [
      {
        title: 'Operación escalable',
        body: 'Comienza con lo esencial y activa módulos o sucursales conforme crece tu operación.',
        icon: 'speed',
      },
      {
        title: 'Configuración personalizada',
        body: 'No configuramos igual un consultorio individual que una clínica multiespecialidad.',
        icon: 'database',
      },
    ],
  },
  {
    id: 'implementacion',
    title: 'Implementación y migración',
    subtitle: 'Cómo te acompañamos desde la migración hasta el arranque.',
    icon: 'refresh',
    items: ['migracion', 'implementacion-tiempo', 'capacitacion'],
    featureCards: [
      {
        title: 'Migración acompañada',
        body: 'Revisamos estructura, calidad y volumen de datos antes de proponer una estrategia.',
        icon: 'database',
      },
      {
        title: 'Arranque por fases',
        body: 'Activamos una base operativa rápida y priorizamos módulos por fases para evitar fricción.',
        icon: 'speed',
      },
    ],
  },
  {
    id: 'seguridad',
    title: 'Seguridad y cumplimiento',
    subtitle: 'Protección de información clínica, accesos y normativa.',
    icon: 'shield',
    items: ['seguridad', 'portal-paciente', 'qr-paciente'],
  },
  {
    id: 'operacion',
    title: 'Operación y especialidades',
    subtitle: 'Cómo se adaptan los flujos y expedientes a tu práctica.',
    icon: 'support',
    items: ['especialidades-modulos', 'diferencia-mercado', 'soporte-incluye'],
  },
  {
    id: 'producto',
    title: 'Producto y roadmap',
    subtitle: 'Lo que ya existe, lo que viene y cómo priorizamos.',
    icon: 'lock',
    items: ['futuro-producto'],
    featureCards: [
      {
        title: 'Roadmap alineado a clientes',
        body: 'Las funcionalidades se priorizan por impacto clínico detectado en campo.',
        icon: 'speed',
      },
      {
        title: 'Expansión modular',
        body: 'El producto crece por módulos: expediente, IA, app móvil y telemedicina.',
        icon: 'database',
      },
    ],
  },
]

function Icon({ name, className = 'h-5 w-5' }) {
  if (name === 'shield') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
      </svg>
    )
  }
  if (name === 'lock') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10V7a4 4 0 118 0v3" />
      </svg>
    )
  }
  if (name === 'refresh') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 6v5h-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18v-5h5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 9.5A7 7 0 0118 7m-12 10a7 7 0 0011.5 2.5" />
      </svg>
    )
  }
  if (name === 'database') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    )
  }
  if (name === 'speed') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 16a8 8 0 1114 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l4-3" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (name === 'support') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 10a6 6 0 1112 0v5a2 2 0 01-2 2h-2" />
        <rect x="3" y="11" width="4" height="7" rx="2" />
        <rect x="17" y="11" width="4" height="7" rx="2" />
      </svg>
    )
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  )
}

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('planes')
  const [openId, setOpenId] = useState('nom-024')

  const activeSection = useMemo(
    () => FAQ_SECTIONS.find((section) => section.id === activeCategory) ?? FAQ_SECTIONS[0],
    [activeCategory],
  )

  const toggle = (id) => setOpenId(openId === id ? null : id)

  const handleCategoryChange = (categoryId) => {
    const section = FAQ_SECTIONS.find((item) => item.id === categoryId)
    setActiveCategory(categoryId)
    setOpenId(section?.items?.[0] ?? null)
  }

  const renderAnswer = (answer) => {
    const blocks = answer.split('\n\n').filter(Boolean)
    const content = []
    let keyIndex = 0

    blocks.forEach((block) => {
      const lines = block.split('\n').filter(Boolean)
      let currentBullets = []

      const flushBullets = () => {
        if (!currentBullets.length) return
        content.push(
          <ul key={`list-${keyIndex++}`} className="space-y-2.5 pl-1">
            {currentBullets.map((line, bulletIndex) => (
              <li key={`bullet-${keyIndex}-${bulletIndex}`} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span className="text-slate-600">{line.replace(/^-\s/, '')}</span>
              </li>
            ))}
          </ul>,
        )
        currentBullets = []
      }

      lines.forEach((line) => {
        const trimmed = line.trim()
        if (trimmed.startsWith('- ')) {
          currentBullets.push(trimmed)
          return
        }
        flushBullets()
        content.push(
          <p key={`p-${keyIndex++}`} className="leading-7 text-slate-600">
            {trimmed}
          </p>,
        )
      })

      flushBullets()
    })

    return content
  }

  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-slate-500">
            Respuestas claras sobre NOM-024, prueba gratuita, precios, seguridad e implementación.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <p className="mb-3 px-1 text-xs font-bold uppercase tracking-widest text-slate-400">Categorías</p>
            <div className="space-y-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              {FAQ_SECTIONS.map((section) => {
                const isActive = section.id === activeCategory
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => handleCategoryChange(section.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon name={section.icon} className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span className="leading-snug">{section.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Contact card */}
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-bold text-slate-900">¿Tienes una pregunta específica?</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">Si tu operación tiene requisitos especiales, te ayudamos a definir módulos y configuración ideal.</p>
              <a
                href="/contacto"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Contactar →
              </a>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-8 lg:col-span-9">
            {/* Section header */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Icon name={activeSection.icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{activeSection.title}</h3>
                <p className="text-sm text-slate-500">{activeSection.subtitle}</p>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              {activeSection.items.map((itemId) => {
                const item = FAQ_BY_ID[itemId]
                if (!item) return null
                const isOpen = openId === item.id

                return (
                  <div
                    key={item.id}
                    className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                      isOpen
                        ? 'border-blue-200 bg-white shadow-md shadow-blue-100/60'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className={`text-[15px] font-semibold leading-snug ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
                        {item.question}
                      </span>
                      <span className={`shrink-0 flex h-6 w-6 items-center justify-center rounded-full transition-all ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <svg
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 border-t border-slate-100 px-6 pb-6 pt-5 text-[15px]">
                          {renderAnswer(item.answer)}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Feature cards */}
            {activeSection.featureCards ? (
              <div className="grid gap-4 md:grid-cols-2">
                {activeSection.featureCards.map((card) => (
                  <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Icon name={card.icon} className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{card.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{card.body}</p>
                  </article>
                ))}
              </div>
            ) : null}

            {/* Bottom CTA */}
            <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white px-8 py-7 shadow-sm md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">¿Tu clínica tiene necesidades específicas?</h4>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                    Te apoyamos en implementación, activación de módulos y resolución de incidencias para que el sistema acompañe tu crecimiento.
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                  <a
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    style={{ backgroundColor: ELECTRIC }}
                  >
                    Hablar con un especialista
                  </a>
                  <a
                    href={CALENDLY_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    {CALENDLY_DEMO_LABEL}
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

