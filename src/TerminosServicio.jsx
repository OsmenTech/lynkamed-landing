import { NAVY } from './components/landing/constants.js'

export default function TerminosServicio() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header simple */}
      <header className="bg-white border-b border-slate-200 py-4">
        <div className="mx-auto max-w-4xl px-5">
          <a href="/" className="inline-flex items-center gap-2">
            <img src="/lynkamed-logo.png" alt="Lynkamed" className="h-26 w-auto -my-8" />
          </a>
        </div>
      </header>

      {/* Contenido */}
      <main className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        <h1 
          className="text-3xl font-bold mb-2 md:text-4xl"
          style={{ color: NAVY }}
        >
          Términos de Servicio
        </h1>
        <p className="text-slate-500 mb-8">
          Última actualización: Abril 2026
        </p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              1. Aceptación de los Términos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Al acceder y utilizar los servicios de Lynkamed (el "Servicio"), usted acepta 
              estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna 
              parte de estos términos, no podrá acceder al Servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              2. Descripción del Servicio
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Lynkamed es una plataforma de software como servicio (SaaS) diseñada para la 
              gestión de consultorios de profesionales de salud y clínicas. El Servicio incluye:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
              <li>Gestión de expedientes clínicos electrónicos</li>
              <li>Agenda y calendario de citas</li>
              <li>Recetas electrónicas con firma digital</li>
              <li>Portal del paciente</li>
              <li>Facturación y caja</li>
              <li>Reportes y analíticas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              3. Registro y Cuentas
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Para usar el Servicio, debe:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Ser profesional de la salud con cédula profesional válida en México</li>
              <li>Proporcionar información precisa y completa durante el registro</li>
              <li>Mantener la seguridad de su cuenta y contraseña</li>
              <li>Notificar inmediatamente cualquier uso no autorizado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              4. Suscripciones y Pagos
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>4.1 Planes:</strong> El Servicio se ofrece mediante suscripción mensual o anual. 
              Los precios están publicados en nuestra página web y pueden cambiar con previo aviso.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>4.2 Facturación:</strong> Los cargos se realizan al inicio de cada período de 
              facturación. Los pagos se procesan a través de Stripe de forma segura.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>4.3 Cancelaciones:</strong> Puede cancelar su suscripción en cualquier momento. 
              La cancelación será efectiva al final del período de facturación actual.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>4.4 Reembolsos:</strong> No se realizan reembolsos por períodos parciales. 
              En caso de fallas técnicas atribuibles a Lynkamed que impidan el uso del servicio 
              por más de 72 horas, se aplicará crédito proporcional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              5. Uso Aceptable
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Usted se compromete a:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Usar el Servicio únicamente para fines legítimos de práctica médica</li>
              <li>Cumplir con todas las leyes aplicables (NOM-024-SSA3, LFPDPPP, etc.)</li>
              <li>No compartir credenciales de acceso con terceros no autorizados</li>
              <li>No intentar acceder a datos de otros usuarios o clínicas</li>
              <li>Mantener respaldos propios de información crítica</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              6. Propiedad de los Datos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Usted conserva todos los derechos sobre los datos que ingresa al Servicio. 
              Lynkamed no reclama propiedad sobre expedientes clínicos, información de 
              pacientes o cualquier otro contenido generado por el usuario. Lynkamed actúa 
              como encargado del tratamiento de datos, siendo usted el responsable ante sus pacientes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              7. Disponibilidad y Soporte
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>7.1 Disponibilidad:</strong> Nos esforzamos por mantener el Servicio 
              disponible 24/7 con un SLA objetivo del 99.5%.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>7.2 Soporte:</strong> Ofrecemos soporte técnico por correo electrónico y 
              WhatsApp en horario de oficina (Lunes a Viernes, 9:00 - 18:00 hora de CDMX).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              8. Limitación de Responsabilidad
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Lynkamed proporciona el Servicio "tal cual" y no garantiza que esté libre de 
              errores o interrupciones. En ningún caso seremos responsables por daños 
              indirectos, incidentales, especiales o consecuentes. Nuestra responsabilidad 
              máxima se limita al monto pagado por el Servicio en los últimos 12 meses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              9. Modificaciones
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Le notificaremos cambios significativos por correo electrónico con al menos 
              30 días de anticipación. El uso continuado del Servicio después de los cambios 
              constituye aceptación de los nuevos términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              10. Ley Aplicable
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Estos términos se rigen por las leyes de México. Cualquier disputa se resolverá 
              en los tribunales competentes de la Ciudad de México.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              11. App y portal del paciente
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              La aplicación móvil <strong>LynkaMed Paciente</strong> y el portal del paciente
              permiten a personas físicas gestionar su pasaporte de salud, citas, documentos
              compartidos, mensajes con clínicas, plan de bienestar y tickets de soporte.
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Debe proporcionar información veraz y mantener segura su contraseña.</li>
              <li>
                La app no sustituye la atención médica. Ante una emergencia, contacte servicios
                de urgencias.
              </li>
              <li>
                Puede eliminar su cuenta desde Perfil en la app o en{' '}
                <a href="/eliminar-cuenta" className="text-blue-600 hover:underline">
                  lynkamed.mx/eliminar-cuenta
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              12. Contacto
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Para preguntas sobre estos términos:
            </p>
            <ul className="list-none pl-0 text-slate-600 space-y-2 mt-4">
              <li>📧 Email: <a href="mailto:contacto@lynkamed.mx" className="text-blue-600 hover:underline">contacto@lynkamed.mx</a></li>
            </ul>
          </section>
        </div>

        {/* Botón volver */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </a>
        </div>
      </main>
    </div>
  )
}
