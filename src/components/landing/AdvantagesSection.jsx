import { useState } from 'react'
import { ADVANTAGES, NAVY, ELECTRIC } from './constants.js'
import { AdvantageCard } from './AdvantageCard.jsx'
import { AnimatedSection } from './AnimatedSection.jsx'

export function AdvantagesSection() {
  const [openAdvantage, setOpenAdvantage] = useState(() => ({}))

  function toggleAdvantage(id) {
    setOpenAdvantage((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="beneficios" className="scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 
            className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl" 
            style={{ color: NAVY }}
          >
            Todo lo que necesitas{' '}
            <span style={{ color: ELECTRIC }}>en un solo lugar</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
            Olvídate de múltiples herramientas. Gestiona tu práctica completa desde una sola plataforma.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
          {ADVANTAGES.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 120}>
              <AdvantageCard item={item} isOpen={!!openAdvantage[item.id]} onToggle={toggleAdvantage} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
