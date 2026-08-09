import { useInView } from '../../hooks/useInView'

const VARIANT_STYLES = {
  up: { hidden: 'translateY(26px)', visible: 'translateY(0)' },
  fade: { hidden: 'translateY(0)', visible: 'translateY(0)' },
  scale: { hidden: 'translateY(18px) scale(0.985)', visible: 'translateY(0) scale(1)' },
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  staggerIndex = 0,
  staggerStep = 80,
  variant = 'up',
  duration = 700,
  once = true,
}) {
  const [ref, isInView] = useInView({ once })
  const v = VARIANT_STYLES[variant] || VARIANT_STYLES.up
  const finalDelay = delay + staggerIndex * staggerStep

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-all ease-out motion-reduce:transition-none ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? v.visible : v.hidden,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${finalDelay}ms`,
      }}
    >
      {children}
    </div>
  )
}
