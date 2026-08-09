import { IconMigration } from './Icons.jsx'

export function MigrationSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#002147] via-[#001a38] to-[#0066ff]/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#0066ff]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 inline-flex rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-sm">
          <IconMigration className="h-10 w-10" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-[2rem] lg:leading-snug">
          ¿Tiene sus datos en Excel o en otro sistema? Nosotros hacemos el trabajo pesado.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          Nuestro equipo técnico realiza la migración masiva de su base de datos actual a Lynkamed sin costo adicional. Usted
          solo se preocupa por atender; nosotros nos encargamos del pasado.
        </p>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-[#7eb3ff]">Migración garantizada</p>
      </div>
    </section>
  )
}
