import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const { once = true, ...observerOptions } = options

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px', ...observerOptions }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return [ref, isInView]
}
