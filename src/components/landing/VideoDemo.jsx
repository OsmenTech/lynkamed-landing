export function VideoDemo() {
  return (
    <div id="producto" className="scroll-mt-24">
      <div>
        <div className="overflow-hidden rounded-t-2xl bg-[#060d1f]">
          <div className="flex items-center gap-2 border-b border-white/8 bg-white/5 px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </span>
            <span className="ml-2 flex-1 truncate rounded-md border border-white/10 bg-white/5 px-3 py-1 text-center text-xs text-slate-400">
              app.lynkamed.mx · vista previa
            </span>
          </div>
          <div className="aspect-video bg-slate-900">
            <video
              className="h-full w-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="/lynkamed-logo.png"
            >
              <source src="/lynkamed.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500 md:text-sm">
          Expedientes, agenda multi-sucursal, portal del paciente y facturación en un solo flujo.
        </p>
      </div>
    </div>
  )
}
