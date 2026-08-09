import { Link } from 'react-router-dom'
import { NAVY, CALENDLY_DEMO_URL, CALENDLY_DEMO_LABEL } from './constants.js'

const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/lynkamed', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'Instagram', href: 'https://www.instagram.com/lynkamed', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  // LinkedIn de empresa: activar cuando exista la página oficial
  // { name: 'LinkedIn', href: 'https://www.linkedin.com/company/lynkamed', icon: '...' },
]

const SALES_EMAIL = 'ventas@lynkamed.mx'
const SALES_WHATSAPP = '+5255 6229 7133'
const SALES_TEMPLATE_MESSAGE =
  'Hola, me interesa LynkaMed. Quiero información para: (1) agendar demo, (2) cotizar, o (3) comenzar prueba gratuita. Mi tipo de práctica es: ____.'
const SALES_WHATSAPP_URL = `https://wa.me/525562297133?text=${encodeURIComponent(SALES_TEMPLATE_MESSAGE)}`
const SALES_EMAIL_URL = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent('Solicitud comercial LynkaMed')}&body=${encodeURIComponent(SALES_TEMPLATE_MESSAGE)}`

export function LandingFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400" style={{ backgroundColor: NAVY }}>

      <div className="mx-auto grid max-w-[1280px] gap-14 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_2fr]">
        <div className="max-w-sm">
          <img
            src="/lynkamed-logo.png"
            alt="Lynkamed"
            className="h-24 w-auto brightness-0 invert -my-8"
          />
          <p className="mt-5 text-sm leading-relaxed text-slate-300/80">
            Empoderando al sector salud con tecnología de grado institucional para una mejor atención al paciente.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-blue-500 hover:bg-blue-600"
                aria-label={`${social.name} de Lynkamed`}
                title={social.name}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">Plataforma</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/funcionalidades" className="transition-colors hover:text-blue-300">Funcionalidades</Link></li>
              <li><Link to="/precios" className="transition-colors hover:text-blue-300">Precios</Link></li>
              <li><Link to="/beneficios" className="transition-colors hover:text-blue-300">Beneficios</Link></li>
              <li><Link to="/faq" className="transition-colors hover:text-blue-300">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">Compañía</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contacto" className="transition-colors hover:text-blue-300">Contacto</Link></li>
              <li><a href="mailto:soporte@lynkamed.mx" className="transition-colors hover:text-blue-300">Soporte</a></li>
              <li><a href="https://app.lynkamed.mx/login" className="transition-colors hover:text-blue-300">Iniciar sesión</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">Ventas</h4>
            <ul className="space-y-3 text-sm">
              <li><a href={SALES_EMAIL_URL} className="transition-colors hover:text-blue-300">{SALES_EMAIL}</a></li>
              <li><a href={SALES_WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-blue-300">WhatsApp: {SALES_WHATSAPP}</a></li>
              <li><a href={CALENDLY_DEMO_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-300">{CALENDLY_DEMO_LABEL}</a></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="mb-5 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/aviso-privacidad" className="transition-colors hover:text-blue-300">Privacidad</Link></li>
              <li><Link to="/terminos" className="transition-colors hover:text-blue-300">Términos</Link></li>
              <li><Link to="/eliminar-cuenta" className="transition-colors hover:text-blue-300">Eliminar cuenta</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-6 text-center text-xs uppercase tracking-[0.18em] text-slate-500 md:flex-row md:items-center md:justify-between md:px-8 md:text-left">
          <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-3">
            <span>© {new Date().getFullYear()} Lynkamed. Todos los derechos reservados.</span>
            <span className="hidden text-slate-700 md:inline">•</span>
            <span>
              Un producto de{' '}
              <strong className="font-bold text-slate-300">Osmen Tech Enterprise S.A.S</strong>
              {' · '}
              <a
                href="https://www.linkedin.com/in/osnaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-blue-300"
              >
                Perfil del fundador
              </a>
            </span>
          </div>

          <div className="self-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-[11px] font-semibold text-slate-300">
            Cumplimiento NOM-024-SSA3-2012
          </div>
        </div>
      </div>
    </footer>
  )
}
