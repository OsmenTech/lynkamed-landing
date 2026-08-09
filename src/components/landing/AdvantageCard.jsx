import { ELECTRIC, NAVY } from './constants.js'

export function AdvantageCard({ item, isOpen, onToggle }) {
  const { Icon } = item
  return (
    <article className="surface-panel hover-lift rounded-2xl p-6 md:p-7">
      <div className="flex items-start gap-4">
        <div 
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-blue-100"
          style={{ backgroundColor: `${ELECTRIC}10` }}
        >
          <Icon className="h-6 w-6" style={{ color: ELECTRIC }} />
        </div>
        <div className="flex-1">
          <span 
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: ELECTRIC }}
          >
            {item.promise}
          </span>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
        </div>
      </div>
      
      <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{item.summary}</p>

      {/* Botón +/- */}
      <button
        type="button"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        className="button-press mt-4 flex items-center gap-2 text-sm font-semibold transition-colors"
        style={{ color: NAVY }}
      >
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-200 ${
            isOpen 
              ? 'rotate-45 border-[#0066ff] bg-[#0066ff] text-white' 
              : 'border-slate-300 text-slate-500 hover:border-[#0066ff] hover:text-[#0066ff]'
          }`}
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
        <span>{isOpen ? 'Ver menos' : 'Ver más'}</span>
      </button>

      {/* Contenido expandible */}
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="mt-4 rounded-lg bg-slate-50 p-4 text-[15px] leading-relaxed text-slate-600">
            {item.more}
          </p>
        </div>
      </div>
    </article>
  )
}
