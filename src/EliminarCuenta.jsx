import { NAVY } from './components/landing/constants.js'

export default function EliminarCuenta() {
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
          Eliminar cuenta — LynkaMed Paciente
        </h1>
        <p className="text-slate-500 mb-8">Instrucciones para App Store / Google Play</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p>
            Puede eliminar su cuenta del portal y de la app <strong>LynkaMed Paciente</strong> en
            cualquier momento.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: NAVY }}>
            Desde la aplicación
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Abra LynkaMed Paciente e inicie sesión.</li>
            <li>Vaya a <strong>Perfil</strong>.</li>
            <li>Seleccione <strong>Eliminar mi cuenta</strong>.</li>
            <li>Confirme la acción. El acceso se cerrará de inmediato.</li>
          </ol>

          <h2 className="text-xl font-semibold" style={{ color: NAVY }}>
            Por correo
          </h2>
          <p>
            Escriba a{' '}
            <a href="mailto:contacto@lynkamed.mx" className="text-blue-600 hover:underline">
              contacto@lynkamed.mx
            </a>{' '}
            con el asunto &quot;Eliminar cuenta LynkaMed Paciente&quot; e indique el correo registrado.
            Atenderemos la solicitud en un plazo máximo de 15 días hábiles.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: NAVY }}>
            Qué se elimina
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acceso al portal y a la app (inicio de sesión)</li>
            <li>Tokens de notificaciones push</li>
            <li>Preferencias y datos de sesión del paciente en la app</li>
          </ul>
          <p>
            Los expedientes clínicos, citas y documentos mantenidos por su clínica pueden
            conservarse bajo responsabilidad de esa clínica, conforme a la normativa sanitaria.
          </p>

          <p>
            Más detalles en el{' '}
            <a href="/aviso-privacidad" className="text-blue-600 hover:underline">
              Aviso de Privacidad
            </a>
            .
          </p>
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
