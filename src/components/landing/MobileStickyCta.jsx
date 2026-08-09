import { useEffect, useRef, useState } from 'react'
import { ELECTRIC, ELECTRIC_HOVER } from './constants.js'

export function MobileStickyCta() {
  const [show, setShow] = useState(false)
  const isNearBottomRef = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')

    function update() {
      const scrolled = window.scrollY > 220
      const distanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight)
      isNearBottomRef.current = distanceToBottom < 120
      setShow(mq.matches && scrolled && !isNearBottomRef.current)
    }

    function onScroll() {
      update()
    }

    const onMq = () => update()
    mq.addEventListener('change', onMq)
    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      mq.removeEventListener('change', onMq)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/90 bg-white/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,33,71,0.08)] backdrop-blur-md md:hidden">
      <a
        href="/contacto"
        className="flex w-full items-center justify-center rounded-xl py-3.5 text-[15px] font-semibold text-white"
        style={{ backgroundColor: ELECTRIC }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = ELECTRIC_HOVER
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = ELECTRIC
        }}
      >
        Contactar
      </a>
    </div>
  )
}
