import { useState } from 'react'
import { AnimatedSection } from './components/landing/AnimatedSection.jsx'
import { IconCash, IconLayers, IconLungs, IconShare, IconShieldCheck, IconSparkles, IconUsers } from './components/landing/Icons.jsx'
import { MarketingPageLayout } from './components/landing/MarketingPageLayout.jsx'

const LAB_FUNCTIONALITIES = [
  {
    title: 'Recepción de órdenes desde la red',
    text: 'Médicos, médicas y clínicas pueden seleccionar tu laboratorio y enviarte órdenes directamente dentro de LynkaMed.',
    Icon: IconLungs,
  },
  {
    title: 'Dashboard operativo para laboratorios',
    text: 'Controla solicitudes, estatus, tiempos de atención y carga diaria desde un tablero único.',
    Icon: IconLayers,
  },
  {
    title: 'Reputación y visibilidad comercial',
    text: 'Muestra desempeño y reputación dentro de la red para generar más confianza y referencias.',
    Icon: IconUsers,
  },
  {
    title: 'Gestión multi-sucursal',
    text: 'Opera múltiples sedes con permisos por rol y trazabilidad centralizada en un solo entorno.',
    Icon: IconShare,
  },
  {
    title: 'Control administrativo',
    text: 'Apoya tu operación con flujos administrativos, reportes y documentación digital para seguimiento interno.',
    Icon: IconCash,
  },
  {
    title: 'Seguridad y trazabilidad',
    text: 'Accesos por perfil, historial de seguimiento y control de información para operación confiable.',
    Icon: IconShieldCheck,
  },
]

const LAB_BENEFITS = [
  'Más órdenes recurrentes al formar parte de una red activa de profesionales de salud y clínicas.',
  'Menos fricción operativa en la coordinación de solicitudes y seguimiento diario.',
  'Mayor diferenciación comercial frente a laboratorios fuera de la red.',
  'Mejor capacidad de crecimiento con visibilidad por sede y desempeño.',
]

const CONTACT_EMAIL = 'ventas@lynkamed.mx'
const CONTACT_WHATSAPP = '+5255 6229 7133'
const CONTACT_TEMPLATE =
  'Hola, quiero integrar mi laboratorio a la red LynkaMed. Me interesa recibir órdenes de clínicas y profesionales de salud, conocer el dashboard y proceso de activación.'
const CONTACT_WHATSAPP_URL = `https://wa.me/525562297133?text=${encodeURIComponent(CONTACT_TEMPLATE)}`
const CONTACT_EMAIL_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Alta de laboratorio en red LynkaMed')}&body=${encodeURIComponent(CONTACT_TEMPLATE)}`
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzvwyeq'

const DIFFERENTIATORS = [
  {
    title: 'Red activa con demanda real',
    text: 'No solo digitalizas: entras a un ecosistema donde profesionales de salud y clínicas ya buscan laboratorios para canalizar trabajo.',
  },
  {
    title: 'Implementación acompañada',
    text: 'Te ayudamos a activar flujos operativos y comerciales para que el equipo adopte rápido la plataforma.',
  },
  {
    title: 'Modelo adaptable a tu operación',
    text: 'A diferencia de suites rígidas, ajustamos el enfoque al tamaño y dinámica de tu laboratorio.',
  },
]

const INITIAL_FORM = {
  laboratorio: '',
  responsable: '',
  ciudad: '',
  sucursales: '',
  estudios: '',
  whatsapp: '',
  email: '',
  comentarios: '',
}

export default function LaboratoriosPage() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setErrorMessage('')

    if (!form.laboratorio || !form.responsable || !form.whatsapp || !form.email) {
      setStatus('error')
      setErrorMessage('Completa laboratorio, responsable, WhatsApp y correo para continuar.')
      return
    }

    setStatus('submitting')

    try {
      const payload = {
        tipoSolicitud: 'Alta de laboratorio en red LynkaMed',
        laboratorio: form.laboratorio,
        responsable: form.responsable,
        ciudad: form.ciudad,
        sucursales: form.sucursales,
        estudios: form.estudios,
        whatsapp: form.whatsapp,
        email: form.email,
        comentarios: form.comentarios,
        _subject: '🧪 Nueva solicitud - Red de Laboratorios LynkaMed',
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario')
      }

      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
      setErrorMessage('No se pudo enviar. Intenta nuevamente en unos minutos.')
    }
  }

  return (
    <MarketingPageLayout
      eyebrow="Red de Laboratorios"
      title="Haz crecer tu laboratorio dentro de la red LynkaMed"
      description="Recibe órdenes de profesionales de salud y clínicas, muestra tu reputación, opera con dashboard propio y escala tu laboratorio con una red activa de referencia clínica."
    >
      <section className="bg-white px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Funcionalidades clave para laboratorios
              </h2>
              <p className="mt-2 max-w-3xl text-slate-600">
                Todo lo necesario para captar más trabajo, organizar tu operación y dar visibilidad a tu laboratorio dentro del ecosistema.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {LAB_FUNCTIONALITIES.map(({ title, text, Icon: LabIcon }) => (
                  <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <LabIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              Beneficios directos al integrarte
            </h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {LAB_BENEFITS.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection className="mt-8 rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">¿Por qué LynkaMed y no una solución genérica?</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {DIFFERENTIATORS.map((item) => (
                <article key={item.title} className="rounded-xl border border-indigo-100 bg-white p-4">
                  <h4 className="text-sm font-bold text-slate-900 md:text-base">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-8 md:pb-16 md:pt-8">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 md:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              Solicita la activación de tu laboratorio
            </h2>
            <p className="mt-2 max-w-3xl text-slate-600">
              Completa el formulario y te contactamos para mostrarte el flujo de órdenes, dashboard y proceso de incorporación.
            </p>

            {status === 'success' ? (
              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                Gracias. Recibimos tu solicitud y te contactaremos por WhatsApp o correo.
              </div>
            ) : (
              <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
                {status === 'error' && errorMessage ? (
                  <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                    {errorMessage}
                  </div>
                ) : null}

                <label className="space-y-1">
                  <span className="text-sm font-semibold text-slate-700">Nombre del laboratorio *</span>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                    value={form.laboratorio}
                    onChange={(e) => setForm((prev) => ({ ...prev, laboratorio: e.target.value }))}
                  />
                </label>

                <label className="space-y-1">
                  <span className="text-sm font-semibold text-slate-700">Nombre del responsable *</span>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                    value={form.responsable}
                    onChange={(e) => setForm((prev) => ({ ...prev, responsable: e.target.value }))}
                  />
                </label>

                <label className="space-y-1">
                  <span className="text-sm font-semibold text-slate-700">Ciudad</span>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                    value={form.ciudad}
                    onChange={(e) => setForm((prev) => ({ ...prev, ciudad: e.target.value }))}
                  />
                </label>

                <label className="space-y-1">
                  <span className="text-sm font-semibold text-slate-700">Número de sucursales</span>
                  <input
                    type="number"
                    min="1"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                    value={form.sucursales}
                    onChange={(e) => setForm((prev) => ({ ...prev, sucursales: e.target.value }))}
                  />
                </label>

                <label className="space-y-1 md:col-span-2">
                  <span className="text-sm font-semibold text-slate-700">Tipo de estudios que realizan</span>
                  <input
                    type="text"
                    placeholder="Ej. laboratorio clínico, imagenología, pruebas especiales"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                    value={form.estudios}
                    onChange={(e) => setForm((prev) => ({ ...prev, estudios: e.target.value }))}
                  />
                </label>

                <label className="space-y-1">
                  <span className="text-sm font-semibold text-slate-700">WhatsApp *</span>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                    value={form.whatsapp}
                    onChange={(e) => setForm((prev) => ({ ...prev, whatsapp: e.target.value }))}
                  />
                </label>

                <label className="space-y-1">
                  <span className="text-sm font-semibold text-slate-700">Correo electrónico *</span>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </label>

                <label className="space-y-1 md:col-span-2">
                  <span className="text-sm font-semibold text-slate-700">Comentarios adicionales</span>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                    value={form.comentarios}
                    onChange={(e) => setForm((prev) => ({ ...prev, comentarios: e.target.value }))}
                  />
                </label>

                <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Enviando...' : 'Enviar solicitud'}
                  </button>
                  <a
                    href={CONTACT_WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                  >
                    WhatsApp: {CONTACT_WHATSAPP}
                  </a>
                  <a
                    href={CONTACT_EMAIL_URL}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </MarketingPageLayout>
  )
}
