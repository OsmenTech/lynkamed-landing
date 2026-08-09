import { NAVY } from './components/landing/constants.js'

export default function AvisoPrivacidad() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 py-4">
        <div className="mx-auto max-w-4xl px-5">
          <a href="/" className="inline-flex items-center gap-2">
            <img src="/lynkamed-logo.png" alt="Lynkamed" className="h-26 w-auto -my-8" />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-2 md:text-4xl" style={{ color: NAVY }}>
          Aviso de Privacidad
        </h1>
        <p className="text-slate-500 mb-8">Última actualización: Agosto 2026</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              1. Identidad del Responsable
            </h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>Osmen Tech Enterprise S.A.S.</strong> (&quot;LynkaMed&quot;), con domicilio en Ciudad de
              México, México, es responsable del tratamiento de los datos personales recabados a través
              de la plataforma web LynkaMed y de la aplicación móvil <strong>LynkaMed Paciente</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              2. Ámbitos de este aviso
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Este aviso aplica a:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>
                <strong>Profesionales y clínicas:</strong> uso del software LynkaMed para agenda,
                expedientes, facturación y operación clínica.
              </li>
              <li>
                <strong>Pacientes:</strong> uso del portal web y de la app móvil LynkaMed Paciente
                (pasaporte de salud, citas, documentos, mensajes, plan de bienestar y soporte).
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              3. Datos que recabamos
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Según el tipo de usuario, podemos tratar:
            </p>
            <p className="text-slate-600 font-semibold mb-2">3.1 Profesionales / clínicas</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Identificación y contacto: nombre, correo, teléfono</li>
              <li>Datos profesionales: cédula, especialidad</li>
              <li>Facturación: RFC, domicilio fiscal</li>
              <li>Datos de uso del servicio y soporte</li>
            </ul>
            <p className="text-slate-600 font-semibold mb-2">3.2 Pacientes (portal y app)</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Identificación y contacto: nombre, correo, teléfono, fecha de nacimiento, género</li>
              <li>
                Datos de salud y pasaporte: alergias, grupo sanguíneo, contacto de emergencia, foto de
                perfil y otros datos que usted o su clínica registren
              </li>
              <li>Citas, documentos compartidos, presupuestos y mensajes con su clínica</li>
              <li>
                Seguimiento de bienestar (si aplica): agua, comidas, ejercicio, estado de ánimo, fotos
                de comida, pasos y ritmo cardiaco que usted registre
              </li>
              <li>
                Datos técnicos del dispositivo: tokens de notificación push, sistema operativo y
                registros de acceso necesarios para seguridad y operación
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              4. Finalidades
            </h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Crear y administrar su cuenta</li>
              <li>Prestar los servicios de agenda, comunicación clínica y portal del paciente</li>
              <li>Enviar notificaciones de citas, mensajes, documentos y recordatorios del plan</li>
              <li>Soporte técnico y atención a tickets de ayuda</li>
              <li>Facturación de suscripciones de clínicas (cuando aplique)</li>
              <li>Cumplir obligaciones legales aplicables (incluida la LFPDPPP)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              5. Datos sensibles y responsabilidad clínica
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              La app y el portal del paciente pueden almacenar datos de salud que usted proporciona o
              que su clínica comparte con usted. LynkaMed actúa como encargado/facilitador tecnológico.
              El tratamiento clínico de expedientes y la relación médico-paciente corresponden a cada
              clínica o profesional, quienes son responsables frente a usted por la atención médica
              prestada.
            </p>
            <p className="text-slate-600 leading-relaxed">
              LynkaMed no sustituye la consulta médica ni emite diagnósticos a través de la app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              6. Transferencias y encargados
            </h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Proveedores de infraestructura (hosting, almacenamiento, bases de datos)</li>
              <li>Servicios de notificaciones push (p. ej. Expo / Apple / Google)</li>
              <li>Procesadores de pago (Stripe) para suscripciones de clínicas</li>
              <li>Proveedores de mapas (Google Maps) cuando usa el directorio en la app</li>
              <li>Autoridades competentes cuando la ley lo requiera</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              7. Conservación
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Conservamos los datos mientras su cuenta esté activa y el tiempo adicional necesario para
              obligaciones legales, seguridad o resolución de disputas. Los registros clínicos
              mantenidos por una clínica pueden conservarse conforme a la normativa sanitaria aplicable,
              aunque usted elimine su acceso al portal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              8. Derechos ARCO y eliminación de cuenta
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Usted puede ejercer derechos de Acceso, Rectificación, Cancelación y Oposición, así como
              limitar el uso o divulgación de sus datos, escribiendo a{' '}
              <strong>contacto@lynkamed.mx</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              En la app LynkaMed Paciente puede solicitar la <strong>eliminación de su cuenta</strong>{' '}
              desde Perfil. También puede iniciar el proceso en:{' '}
              <a href="/eliminar-cuenta" className="text-blue-600 hover:underline">
                lynkamed.mx/eliminar-cuenta
              </a>
              .
            </p>
            <p className="text-slate-600 leading-relaxed">
              Al eliminar la cuenta de portal/app se revoca su acceso, se eliminan tokens de
              notificación y se anonimiza la credencial de inicio de sesión. Los expedientes y citas
              que su clínica conserve para atención clínica pueden permanecer bajo responsabilidad de
              dicha clínica.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
              9. Contacto
            </h2>
            <ul className="list-none pl-0 text-slate-600 space-y-2">
              <li>
                Email:{' '}
                <a href="mailto:contacto@lynkamed.mx" className="text-blue-600 hover:underline">
                  contacto@lynkamed.mx
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <a href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
            Volver al inicio
          </a>
        </div>
      </main>
    </div>
  )
}
