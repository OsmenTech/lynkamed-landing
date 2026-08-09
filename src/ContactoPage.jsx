import { AnimatedSection } from './components/landing/AnimatedSection.jsx'
import { DemoFormSection } from './components/landing/DemoFormSection.jsx'
import { MarketingPageLayout } from './components/landing/MarketingPageLayout.jsx'
import { CALENDLY_DEMO_LABEL, CALENDLY_DEMO_URL, NAVY } from './components/landing/constants.js'
import { FiZap } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineCalendar } from 'react-icons/hi'

const WHATSAPP_MSG = encodeURIComponent('Hola, me interesa LynkaMed. Quiero información para: (1) agendar demo, (2) cotizar, o (3) comenzar prueba gratuita.')
const WHATSAPP_LINK = `https://wa.me/525562297133?text=${WHATSAPP_MSG}`

const QUICK_ACTIONS = [
  {
    id: 'calendly',
    Icon: HiOutlineCalendar,
    title: CALENDLY_DEMO_LABEL,
    desc: 'Elige fecha y hora en Calendly. Demo en línea, sin compromiso.',
    cta: 'Abrir calendario →',
    href: CALENDLY_DEMO_URL,
    external: true,
    primary: true,
  },
  {
    id: 'registro',
    Icon: FiZap,
    title: 'Prueba gratuita',
    desc: '30 días gratis, sin tarjeta. Acceso completo al instante.',
    cta: 'Crear cuenta →',
    href: 'https://app.lynkamed.mx/registro',
  },
  {
    id: 'whatsapp',
    Icon: FaWhatsapp,
    title: 'WhatsApp directo',
    desc: '+52 55 6229 7133 · Respondemos en menos de 2 horas hábiles.',
    cta: 'Abrir WhatsApp →',
    href: WHATSAPP_LINK,
    external: true,
  },
  {
    id: 'email',
    Icon: HiOutlineMail,
    title: 'Correo electrónico',
    desc: 'ventas@lynkamed.mx',
    cta: 'Enviar correo →',
    href: 'mailto:ventas@lynkamed.mx?subject=Información LynkaMed',
  },
]

export default function ContactoPage() {
  return (
    <MarketingPageLayout
      eyebrow="Contacto"
      title="Hablemos."
      description="Agenda una demo en Calendly, prueba gratis, o déjanos tus datos para cotizar."
    >
      <section className="px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">

          {/* LEFT — info + acciones rápidas */}
          <div className="space-y-4">
            <AnimatedSection>
              <h2 className="text-xl font-bold text-slate-900">Acciones rápidas</h2>
              <p className="mt-1 text-sm text-slate-500">Sin formulario. Directo.</p>
            </AnimatedSection>

            {QUICK_ACTIONS.map((action, i) => (
              <AnimatedSection key={action.id} delay={i * 60}>
                <a
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noreferrer' : undefined}
                  className={`group flex items-start gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 ${
                    action.primary
                      ? 'shadow-xl shadow-blue-900/20'
                      : 'border border-slate-200 bg-white shadow-sm hover:shadow-md'
                  }`}
                  style={action.primary ? { backgroundColor: NAVY } : {}}
                >
                  <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${action.primary ? 'bg-white/10' : 'bg-blue-50'}`}>
                    <action.Icon className={`h-5 w-5 ${action.primary ? 'text-blue-200' : 'text-blue-600'}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${ action.primary ? 'text-white' : 'text-slate-900' }`}>
                      {action.title}
                    </p>
                    <p className={`mt-0.5 text-xs leading-5 ${ action.primary ? 'text-blue-300' : 'text-slate-500' }`}>
                      {action.desc}
                    </p>
                    <span className={`mt-2 inline-flex text-xs font-semibold transition-all group-hover:gap-2 ${ action.primary ? 'text-blue-200' : 'text-blue-600' }`}>
                      {action.cta}
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            ))}

            {/* Horario */}
            <AnimatedSection delay={200}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Horario de atención</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">Lunes – Viernes: 9:00 – 19:00</p>
                <p className="text-sm text-slate-600">Sábado: 10:00 – 14:00</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <p className="text-xs text-emerald-700 font-semibold">Respondemos en menos de 2 horas hábiles</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT — formulario */}
          <AnimatedSection id="formulario" delay={80}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="mb-6 text-sm font-semibold text-slate-700">¿Prefieres que te contactemos nosotros? Déjanos tus datos:</p>
              <DemoFormSection hidePrueba />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </MarketingPageLayout>
  )
}
