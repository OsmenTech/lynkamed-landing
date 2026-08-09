import { FAQSection } from './components/landing/FAQSection.jsx'
import { AnimatedSection } from './components/landing/AnimatedSection.jsx'
import { MarketingPageLayout } from './components/landing/MarketingPageLayout.jsx'

export default function FaqPage() {
  return (
    <MarketingPageLayout
    eyebrow="Faq"
      title="Respuestas claras antes de tomar una decisión"
      description="Aquí resolvemos las dudas más comunes sobre implementación, operación, escalabilidad y compatibilidad de LynkaMed."
    >
      <FAQSection />

    </MarketingPageLayout>
  )
}
