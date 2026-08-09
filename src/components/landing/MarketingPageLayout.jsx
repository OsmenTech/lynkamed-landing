import { AnimatedSection } from './AnimatedSection.jsx'
import { LandingFooter } from './LandingFooter.jsx'
import { LandingHeader } from './LandingHeader.jsx'
import { MobileStickyCta } from './MobileStickyCta.jsx'

export function MarketingPageLayout({ eyebrow, title, description, children }) {
  return (
    <div className="flex min-h-screen flex-col text-slate-800 antialiased">
      <LandingHeader />
      <main className="flex-1 pb-20 md:pb-0">
        {/* Page hero — clean, bold, institutional */}
        <section className="relative overflow-hidden bg-[#060d1f] px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20">
          {/* Subtle grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          {/* Blue glow */}
          <div className="absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

          <AnimatedSection className="relative z-10 mx-auto max-w-4xl" variant="slide-up">
            {eyebrow ? (
              <span className="chip chip-navy mb-5 inline-flex">{eyebrow}</span>
            ) : null}
            <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight text-white md:text-[3.2rem]">{title}</h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">{description}</p>
            ) : null}
            <div className="divider-x mt-10 opacity-30" />
          </AnimatedSection>
        </section>
        {children}
      </main>
      <LandingFooter />
      <MobileStickyCta />
    </div>
  )
}
