import { useEffect, useState } from 'react'
import { ELECTRIC, ELECTRIC_HOVER, CALENDLY_DEMO_URL, CALENDLY_DEMO_LABEL } from './constants.js'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { BsCalendar3 } from 'react-icons/bs'
import { VideoDemo } from './VideoDemo.jsx'

const TRUST_ITEMS = [
  'Sin tarjeta de crédito',
  'Cancela cuando quieras',
  'NOM-024',
  '100% en la nube',
]

const STATS = [
  { value: '+30', label: 'Tipos de expediente', sub: 'Por especialidad médica' },
  { value: '100%', label: 'En la nube', sub: 'Sin instalar nada' },
  { value: '30 días', label: 'Prueba gratuita', sub: 'Sin tarjeta de crédito' },
]

export function LandingHero() {
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        setParallaxY(Math.min(window.scrollY * 0.07, 20))
        raf = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])

  return (
    <section className="relative overflow-hidden px-5 pb-0 pt-16 md:px-8 md:pt-20" style={{ backgroundColor: '#060d1f' }}>
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      {/* Glow orbs */}
      <div className="absolute left-1/4 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] translate-x-1/3 rounded-full bg-indigo-600/10 blur-[100px]" />
      {/* Accent line top */}
      <div className="absolute left-0 right-0 top-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent 0%, ${ELECTRIC} 40%, #818cf8 80%, transparent 100%)` }} />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT */}
          <div className="max-w-xl py-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">LynkaMed • Una solución de OSMEN TECH ENTERPRISE</span>
            </div>

            <h1 className="mt-6 text-[2.8rem] font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              Lynkamed: software médico que se adapta a{' '}
              <span className="relative">
                <span style={{ color: ELECTRIC }}>tu especialidad</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full opacity-60"
                  style={{ background: `linear-gradient(90deg, ${ELECTRIC}, transparent)` }}
                />
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-slate-400">
              Módulos por especialidad, NOM de expediente electrónico y una sola app si atiendes
              en varios hospitales o en tu consultorio particular.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow button-press group inline-flex items-center gap-2.5 rounded-xl px-7 py-4 text-[15px] font-bold text-white shadow-xl shadow-blue-600/30"
                style={{ backgroundColor: ELECTRIC }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ELECTRIC_HOVER }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ELECTRIC }}
              >
                {CALENDLY_DEMO_LABEL}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://app.lynkamed.mx/registro"
                className="button-press inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-[15px] font-semibold text-slate-200 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
              >
                Empezar gratis — 30 días
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {TRUST_ITEMS.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <svg className="h-3.5 w-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — screenshot */}
          <div className="relative flex items-end justify-center lg:justify-end">
            <div
              className="parallax-soft relative w-full max-w-[600px] overflow-hidden rounded-t-2xl border border-white/10 shadow-[0_30px_90px_-20px_rgba(0,102,255,0.30)]"
              style={{ transform: `translateY(${parallaxY}px)` }}
            >
              <VideoDemo />
            </div>

            {/* Floating chip 1 — Expediente guardado */}
            <div
              className="parallax-soft absolute left-0 top-8 hidden rounded-xl border border-white/10 bg-slate-900/90 py-3 pl-3 pr-4 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5"
              style={{ transform: `translateY(${-parallaxY * 0.5}px)` }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <HiOutlineDocumentText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Expediente guardado</p>
                <p className="text-[11px] text-slate-400">Dr. García · 2 min</p>
              </div>
            </div>

            {/* Floating chip 2 — 3 citas */}
            <div
              className="parallax-soft absolute right-2 top-[38%] hidden rounded-xl border border-white/10 bg-slate-900/90 py-3 pl-3 pr-4 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5"
              style={{ transform: `translateY(${parallaxY * 0.35}px)` }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                <BsCalendar3 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">3 citas mañana</p>
                <p className="text-[11px] font-semibold text-blue-400">Ver agenda →</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14">
          <div className="grid grid-cols-3 divide-x divide-white/8 rounded-t-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-5 md:px-8">
                <div className="text-2xl font-extrabold md:text-3xl" style={{ color: ELECTRIC }}>{s.value}</div>
                <div className="mt-0.5 text-sm font-bold text-white">{s.label}</div>
                <div className="mt-0.5 hidden text-xs text-slate-500 sm:block">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
