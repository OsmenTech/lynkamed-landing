import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ELECTRIC, ELECTRIC_HOVER, NAV_LINKS, NAVY } from './constants.js'
import { IconClose, IconMenu } from './Icons.jsx'

export function LandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const NAVY_LOGO_FILTER = 'brightness(0) saturate(100%) invert(11%) sepia(39%) saturate(1606%) hue-rotate(187deg) brightness(94%) contrast(97%)'

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 md:px-6 md:pt-3">
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 transition-all duration-300 sm:px-5 md:px-8 ${
          isScrolled
            ? 'border-b border-white/60 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/68 md:rounded-2xl md:border md:shadow-[0_10px_40px_rgba(15,23,42,0.12)] md:supports-[backdrop-filter]:bg-white/55'
            : 'border-b border-slate-200/70 bg-white/90 backdrop-blur-xl md:rounded-2xl md:border md:border-transparent'
        }`}
        style={
          isScrolled
            ? {
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.10), inset 0 1px 0 rgba(255,255,255,0.65)',
              }
            : undefined
        }
      >
        <Link to="/" className="shrink-0" aria-label="Lynkamed - Inicio">
          <img
            src="/lynkamed-logo.png"
            alt="Lynkamed"
            className="h-26 w-auto -my-8"
            style={{ filter: NAVY_LOGO_FILTER }}
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://app.lynkamed.mx/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-100 sm:inline-flex"
          >
            Iniciar sesión
          </a>
          <a
            href="https://app.lynkamed.mx/registro"
            className="btn-glow button-press hidden rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-colors sm:inline-flex"
            style={{ backgroundColor: ELECTRIC }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ELECTRIC_HOVER
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ELECTRIC
            }}
          >
            Empezar gratis
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-800 backdrop-blur-sm md:hidden"
            aria-expanded={menuOpen}
            aria-controls="landing-mobile-nav"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="landing-mobile-nav"
        className={`fixed inset-x-4 top-[72px] z-[60] max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-[1.4rem] border border-white/70 bg-white/92 shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition-[opacity,visibility,transform] duration-200 md:hidden ${
          menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible pointer-events-none -translate-y-2 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-0 px-5 py-4" aria-label="Móvil">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="rounded-lg px-4 py-3.5 text-base font-medium text-slate-800 hover:bg-slate-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://app.lynkamed.mx/login"
            className="mt-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-center text-[15px] font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            onClick={() => setMenuOpen(false)}
          >
            Iniciar sesión
          </a>
          <a
            href="/contacto"
            className="button-press mt-2 rounded-xl py-3.5 text-center text-[15px] font-semibold text-white"
            style={{ backgroundColor: ELECTRIC }}
            onClick={() => setMenuOpen(false)}
          >
            Contactar
          </a>
        </nav>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 top-[64px] z-[55] bg-slate-900/45 backdrop-blur-[2px] md:hidden"
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  )
}
