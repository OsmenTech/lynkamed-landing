import { NAVY, SPECIALTIES } from './constants.js'

export function SpecialtiesSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl" style={{ color: NAVY }}>
          Especialidades con flujos dedicados
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Áreas donde Lynkamed ya piensa como usted atiende, con formatos clínicos específicos.
        </p>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {SPECIALTIES.map((spec) => {
            const SpecialtyIcon = spec.Icon
            return (
              <li
                key={spec.label}
                className="flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white px-3 py-5 text-center shadow-sm transition-[box-shadow,transform] hover:shadow-md motion-reduce:transition-none md:px-4 md:py-6"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#002147]/10"
                  style={{ color: NAVY }}
                >
                  <SpecialtyIcon className="h-7 w-7" />
                </span>
                <span className="mt-3 text-sm font-semibold text-slate-800">{spec.label}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
