import { NAVY } from './constants.js'
import { IconCash, IconShieldCheck, IconSparkles } from './Icons.jsx'

const BENEFITS = [
  {
    title: 'Portal del paciente con OTP',
    body: 'Acceso seguro con verificación en dos pasos. Sus pacientes consultan citas y documentos compartidos con estándar de seguridad claro.',
    Icon: IconShieldCheck,
  },
  {
    title: 'Caja y finanzas por sucursal',
    body: 'Pagos, recibos y cortes alineados a cada sede. Visibilidad financiera para dirección y operación diaria.',
    Icon: IconCash,
  },
  {
    title: 'Vademécum e IA proactiva',
    body: 'Catálogo terapéutico integrado y asistencia para resúmenes y flujos clínicos — sin sustituir el criterio profesional.',
    Icon: IconSparkles,
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="scroll-mt-20 border-y border-slate-100 bg-slate-50/70 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl" style={{ color: NAVY }}>
          Beneficios que su equipo notará desde el día uno
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Portal, caja por sede y herramientas clínicas pensadas para el ritmo real del consultorio.
        </p>
        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-12">
          {BENEFITS.map(({ title, body, Icon: BenefitIcon }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80">
                <BenefitIcon className="h-7 w-7" style={{ color: NAVY }} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
