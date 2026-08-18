import { useRef, useState } from 'react'
import {
  CALENDLY_DEMO_LABEL,
  calendlyDemoUrl,
  ELECTRIC,
  ESPECIALIDADES_CONSULTORIO,
  MODULOS_CLINICA,
} from './constants.js'
import { IconCalendar, IconCash, IconCheckCircle, IconSparkles } from './Icons.jsx'

const SOLICITUD_CARDS = [
  {
    id: 'demo',
    title: CALENDLY_DEMO_LABEL,
    description: 'Elige fecha y hora en Calendly. Demo en línea de 15 minutos, sin compromiso.',
    Icon: IconCalendar,
    hrefKey: 'calendly',
    external: true,
  },
  {
    id: 'cotizacion',
    title: 'Quiero cotizar',
    description: 'Compártenos tu tipo de operación y te enviamos una propuesta comercial alineada a tu alcance.',
    Icon: IconCash,
  },
  {
    id: 'prueba',
    title: 'Comenzar mi prueba gratuita',
    description: 'Enfocada en profesionales de salud independientes con alcance controlado para arranque rápido.',
    Icon: IconSparkles,
    hideable: true,
  },
]

const initialForm = {
  tipoSolicitud: '',
  nombre: '',
  tipoPractica: '',
  // Para consultorio privado
  especialidad: '',
  // Para clínica
  modulosInteres: [],
  numSucursales: '',
  // Para prueba
  aceptaCondicionesPrueba: false,
  // Contacto
  whatsapp: '',
  email: '',
  comentarios: '',
}
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzvwyeq'
const CONTACT_EMAIL = 'ventas@lynkamed.mx'
const CONTACT_WHATSAPP_DISPLAY = '+52 55 6229 7133'
const CONTACT_TEMPLATE_MESSAGE =
  'Hola, me interesa LynkaMed. Quiero información para: (1) agendar demo, (2) cotizar, o (3) comenzar prueba gratuita. Mi tipo de práctica es: ____.'
const CONTACT_WHATSAPP_LINK = `https://wa.me/525562297133?text=${encodeURIComponent(CONTACT_TEMPLATE_MESSAGE)}`

export function DemoFormSection({ hidePrueba = false }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const liveRef = useRef(null)

  const isCotizacion = form.tipoSolicitud === 'cotizacion'
  const isPrueba = form.tipoSolicitud === 'prueba'
  const isConsultorio = form.tipoPractica === 'consultorio'
  const isClinica = form.tipoPractica === 'clinica' || form.tipoPractica === 'polivalente'

  function handleModuloChange(moduloId) {
    setForm((f) => ({
      ...f,
      modulosInteres: f.modulosInteres.includes(moduloId)
        ? f.modulosInteres.filter((id) => id !== moduloId)
        : [...f.modulosInteres, moduloId],
    }))
  }

  function handleTipoSolicitudChange(tipoSolicitud) {
    setForm((f) => ({
      ...f,
      tipoSolicitud,
      tipoPractica: '',
      especialidad: '',
      modulosInteres: [],
      numSucursales: '',
      aceptaCondicionesPrueba: false,
    }))
    setErrorMessage('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMessage('')

    if (!form.tipoSolicitud || form.tipoSolicitud === 'demo') {
      setStatus('error')
      setErrorMessage('Selecciona cotización o prueba gratuita. La demo se agenda en Calendly.')
      return
    }

    if (isPrueba && !form.aceptaCondicionesPrueba) {
      setStatus('error')
      setErrorMessage('Para solicitar la prueba gratuita, confirma que cumples con las condiciones de uso.')
      return
    }

    setStatus('submitting')

    try {
      const tipoSolicitudLabel =
        form.tipoSolicitud === 'cotizacion'
          ? 'Quiero cotizar'
          : 'Comenzar prueba gratuita'

      // Preparar datos para enviar
      const formData = {
        tipoSolicitud: tipoSolicitudLabel,
        nombre: form.nombre,
        tipoPractica: form.tipoPractica,
        whatsapp: form.whatsapp,
        email: form.email,
        comentarios: form.comentarios,
        ...(isPrueba && { condicionesPrueba: 'Aceptadas' }),
        // Campos condicionales
        ...(form.especialidad && { especialidad: form.especialidad }),
        ...(form.modulosInteres.length > 0 && { 
          modulosInteres: form.modulosInteres.join(', ') 
        }),
        ...(form.numSucursales && { numSucursales: form.numSucursales }),
        // Metadata
        _subject: `🏥 Nueva solicitud - ${tipoSolicitudLabel}`,
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Error al enviar')
      }

      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setErrorMessage('No se pudo enviar. Revise su conexión e intente de nuevo.')
    }
  }

  return (
    <section id="demo" className="scroll-mt-20 px-5 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1280px]">
        <div ref={liveRef} className="sr-only" aria-live="polite" aria-atomic="true">
          {status === 'success' && 'Solicitud enviada correctamente.'}
          {status === 'error' && errorMessage}
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold text-slate-800">Elige una opción para continuar</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {SOLICITUD_CARDS.filter(card => !(hidePrueba && card.hideable)).map((card) => {
              const isActive = form.tipoSolicitud === card.id
              const Icon = card.Icon
              const cardBody = (
                <>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${isActive || card.external ? 'bg-blue-600 text-white ring-blue-500' : 'bg-blue-50 text-blue-600 ring-blue-100'}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h4 className="mt-5 text-[1.15rem] font-bold leading-snug text-slate-900">{card.title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{card.description}</p>
                </>
              )

              if (card.external && card.hrefKey === 'calendly') {
                return (
                  <a
                    key={card.id}
                    href={calendlyDemoUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col rounded-2xl border border-[#0066ff] bg-white p-8 shadow-sm ring-2 ring-[#0066ff]/15 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {cardBody}
                    <span
                      className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#0066ff] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25"
                    >
                      {CALENDLY_DEMO_LABEL} →
                    </span>
                  </a>
                )
              }

              return (
                <article
                  key={card.id}
                  className={`flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all ${
                    isActive
                      ? 'border-[#0066ff] ring-2 ring-[#0066ff]/15'
                      : 'border-slate-200 hover:-translate-y-0.5 hover:shadow-md'
                  }`}
                >
                  {cardBody}

                  <button
                    type="button"
                    onClick={() => handleTipoSolicitudChange(card.id)}
                    disabled={status === 'submitting'}
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all disabled:opacity-60 ${
                      isActive
                        ? 'bg-[#0066ff] text-white shadow-lg shadow-blue-600/25'
                        : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    {isActive ? '✓ Seleccionado' : card.title}
                  </button>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">¿Prefieres contacto directo?</p>
          <p className="mt-1 text-sm text-slate-600">También puedes escribirnos por correo o WhatsApp, o agendar demo en Calendly.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={calendlyDemoUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#0066ff] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110"
            >
              {CALENDLY_DEMO_LABEL}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Correo: {CONTACT_EMAIL}
            </a>
            <a
              href={CONTACT_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              WhatsApp: {CONTACT_WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>

        {(form.tipoSolicitud || status === 'success') && (
          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-20px_rgba(0,33,71,0.15)] md:p-10">
          {status === 'success' ? (
            <div
              className="flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-emerald-950"
              role="status"
            >
              <IconCheckCircle className="h-6 w-6 shrink-0 text-emerald-600" aria-hidden />
              <div>
                <p className="font-medium">¡Gracias! Hemos recibido tu solicitud.</p>
                <p className="mt-1 text-sm text-emerald-900/85">
                  Te contactaremos por WhatsApp o correo en las próximas 24 horas.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {status === 'error' && errorMessage ? (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
                  {errorMessage}
                </div>
              ) : null}

              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  required
                  type="text"
                  autoComplete="name"
                  disabled={status === 'submitting'}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-[#0066ff]/20 transition-shadow focus:border-[#0066ff] focus:ring-4 disabled:opacity-60"
                  value={form.nombre}
                  onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                />
              </div>

              {form.tipoSolicitud ? (
                <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                  {isCotizacion && 'Formulario de cotización activa. Comparte datos de operación para recibir propuesta.'}
                  {isPrueba && 'Formulario de prueba gratuita activa. Validaremos alcance para profesionales de salud independientes.'}
                </p>
              ) : null}

              {/* CONDICIONAL: Cotizar o Prueba */}
              {(isCotizacion || isPrueba) && (
                <>
                  {/* Tipo de práctica */}
                  <div>
                    <label htmlFor="tipo" className="mb-1.5 block text-sm font-medium text-slate-700">
                      ¿Qué tipo de práctica tienes?
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      required
                      disabled={status === 'submitting'}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-[#0066ff]/20 transition-shadow focus:border-[#0066ff] focus:ring-4 disabled:opacity-60"
                      value={form.tipoPractica}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          tipoPractica: e.target.value,
                          especialidad: '',
                          modulosInteres: [],
                          numSucursales: '',
                        }))
                      }
                    >
                      <option value="">Selecciona una opción...</option>
                      <option value="consultorio">🩺 Consultorio Privado (soy profesional de salud independiente)</option>
                      <option value="clinica">🏥 Clínica (tengo una o más sucursales)</option>
                    </select>
                  </div>

                  {isPrueba ? (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                      La prueba gratuita aplica solo para <strong>profesionales de salud independientes</strong>, con un máximo sugerido de <strong>15 pacientes</strong> y <strong>3 usuarios</strong>.
                    </div>
                  ) : null}
                </>
              )}

              {/* CONDICIONAL: Si es consultorio privado -> mostrar especialidad */}
              {(isCotizacion || isPrueba) && isConsultorio && (
                <div className="animate-fadeIn">
                  <label htmlFor="especialidad" className="mb-1.5 block text-sm font-medium text-slate-700">
                    ¿Cuál es tu especialidad?
                  </label>
                  <select
                    id="especialidad"
                    name="especialidad"
                    required
                    disabled={status === 'submitting'}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-[#0066ff]/20 transition-shadow focus:border-[#0066ff] focus:ring-4 disabled:opacity-60"
                    value={form.especialidad}
                    onChange={(e) => setForm((f) => ({ ...f, especialidad: e.target.value }))}
                  >
                    <option value="">Selecciona tu especialidad...</option>
                    {ESPECIALIDADES_CONSULTORIO.map((esp) => (
                      <option key={esp.id} value={esp.id}>{esp.label}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* CONDICIONAL: Si es clínica -> mostrar módulos y sucursales */}
              {(isCotizacion || isPrueba) && isClinica && (
                <>
                  <fieldset className="animate-fadeIn">
                    <legend className="mb-2 block text-sm font-medium text-slate-700">
                      ¿Qué módulos te interesan?
                    </legend>
                    <div className="grid grid-cols-2 gap-2">
                      {MODULOS_CLINICA.map((modulo) => (
                        <label
                          key={modulo.id}
                          className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-all ${
                            form.modulosInteres.includes(modulo.id)
                              ? 'border-[#0066ff] bg-[#0066ff]/5 text-[#0066ff] shadow-sm'
                              : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={form.modulosInteres.includes(modulo.id)}
                            onChange={() => handleModuloChange(modulo.id)}
                            disabled={status === 'submitting'}
                            className="sr-only"
                          />
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all ${
                              form.modulosInteres.includes(modulo.id)
                                ? 'border-[#0066ff] bg-[#0066ff]'
                                : 'border-slate-300'
                            }`}
                          >
                            {form.modulosInteres.includes(modulo.id) && (
                              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          <span className="font-medium">{modulo.label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="animate-fadeIn">
                    <label htmlFor="sucursales" className="mb-1.5 block text-sm font-medium text-slate-700">
                      ¿Cuántas sucursales tienes o planeas tener?
                    </label>
                    <select
                      id="sucursales"
                      name="sucursales"
                      required
                      disabled={status === 'submitting'}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-[#0066ff]/20 transition-shadow focus:border-[#0066ff] focus:ring-4 disabled:opacity-60"
                      value={form.numSucursales}
                      onChange={(e) => setForm((f) => ({ ...f, numSucursales: e.target.value }))}
                    >
                      <option value="">Selecciona...</option>
                      <option value="1">1 sucursal</option>
                      <option value="2-3">2 a 3 sucursales</option>
                      <option value="4-10">4 a 10 sucursales</option>
                      <option value="10+">Más de 10 sucursales</option>
                    </select>
                  </div>
                </>
              )}

              {isPrueba && (
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={form.aceptaCondicionesPrueba}
                    onChange={(e) => setForm((f) => ({ ...f, aceptaCondicionesPrueba: e.target.checked }))}
                    disabled={status === 'submitting'}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0066ff] focus:ring-[#0066ff]/30"
                  />
                  <span>
                    Confirmo que solicito la prueba gratuita como profesional de salud independiente y que mi operación está dentro del alcance sugerido.
                  </span>
                </label>
              )}

              {/* WhatsApp */}
              <div>
                <label htmlFor="wa" className="mb-1.5 block text-sm font-medium text-slate-700">
                  WhatsApp (para contactarte rápido)
                </label>
                <input
                  id="wa"
                  name="whatsapp"
                  required
                  type="tel"
                  autoComplete="tel"
                  placeholder="+52 ..."
                  disabled={status === 'submitting'}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-[#0066ff]/20 transition-shadow focus:border-[#0066ff] focus:ring-4 disabled:opacity-60"
                  value={form.whatsapp}
                  onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  disabled={status === 'submitting'}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-[#0066ff]/20 transition-shadow focus:border-[#0066ff] focus:ring-4 disabled:opacity-60"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>

              {/* Comentarios opcionales */}
              <div>
                <label htmlFor="comentarios" className="mb-1.5 block text-sm font-medium text-slate-700">
                  ¿Algo más que debamos saber? <span className="text-slate-400">(opcional)</span>
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={3}
                  disabled={status === 'submitting'}
                  placeholder="Cuéntanos sobre tu práctica, qué problemas quieres resolver, etc."
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-[#0066ff]/20 transition-shadow focus:border-[#0066ff] focus:ring-4 disabled:opacity-60"
                  value={form.comentarios}
                  onChange={(e) => setForm((f) => ({ ...f, comentarios: e.target.value }))}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.01] hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                style={{ backgroundColor: ELECTRIC }}
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    {isPrueba ? 'Solicitar prueba gratuita' : 'Enviar solicitud de cotización'}
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                Sin compromiso • Respuesta en 24 hrs
              </p>
            </form>
          )}
          </div>
        )}
      </div>
    </section>
  )
}
