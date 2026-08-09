import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './LandingPage'
import AvisoPrivacidad from './AvisoPrivacidad'
import BeneficiosPage from './BeneficiosPage'
import FaqPage from './FaqPage'
import FuncionalidadesPage from './FuncionalidadesPage'
import ContactoPage from './ContactoPage'
import PreciosPage from './PreciosPage'
import TerminosServicio from './TerminosServicio'
import LaboratoriosPage from './LaboratoriosPage'
import EliminarCuenta from './EliminarCuenta'
import { SeoJsonLd } from './components/landing/SeoJsonLd.jsx'

const SITE = 'https://lynkamed.mx'

const PAGE_META = {
  '/': {
    title: 'Lynkamed — Software médico para clínicas y consultorios en México',
    description:
      'Lynkamed es el software médico en la nube para médicos y clínicas en México. Gestiona expedientes clínicos adaptados por especialidad (NOM-024), agenda médica, control de caja y portal del paciente. Prueba gratis hoy.',
  },
  '/beneficios': {
    title: 'Beneficios | Lynkamed — Software médico México',
    description:
      'Beneficios de Lynkamed para médicos y clínicas: expediente NOM-024, agenda, portal del paciente y operación multi-workspace.',
  },
  '/funcionalidades': {
    title: 'Funcionalidades | Lynkamed — Expediente, agenda y caja',
    description:
      'Funciones principales de Lynkamed: expediente clínico por especialidad, agenda multi-sucursal, facturación CFDI y portal del paciente.',
  },
  '/precios': {
    title: 'Planes y precios | Lynkamed — Consultorio y clínica',
    description:
      'Planes y precios de Lynkamed para consultorio y clínica. 30 días de prueba gratis sin tarjeta de crédito.',
  },
  '/faq': {
    title: 'Preguntas frecuentes | Lynkamed',
    description:
      'FAQ de Lynkamed: NOM-024, prueba gratuita, migración, multi-sucursal, seguridad y soporte.',
  },
  '/contacto': {
    title: 'Contacto | Lynkamed',
    description: 'Contacta a Lynkamed para demo, cotización o soporte. Software médico para clínicas en México.',
  },
  '/laboratorios': {
    title: 'Red de laboratorios | Lynkamed',
    description: 'Conecta tu clínica Lynkamed con laboratorios y flujos de órdenes clínicas.',
  },
  '/aviso-privacidad': {
    title: 'Aviso de privacidad | Lynkamed',
    description: 'Aviso de privacidad de Lynkamed y tratamiento de datos personales.',
  },
  '/terminos': {
    title: 'Términos del servicio | Lynkamed',
    description: 'Términos y condiciones de uso de la plataforma Lynkamed.',
  },
  '/eliminar-cuenta': {
    title: 'Eliminar cuenta | Lynkamed',
    description: 'Cómo solicitar la eliminación de tu cuenta Lynkamed.',
  },
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = PAGE_META[pathname] ?? {
      title: 'Lynkamed',
      description: PAGE_META['/'].description,
    }
    document.title = meta.title

    const desc = document.head.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', meta.description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE}${pathname === '/' ? '/' : pathname}`)

    const ogTitle = document.head.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    const ogDesc = document.head.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)
    const ogUrl = document.head.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', `${SITE}${pathname === '/' ? '/' : pathname}`)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageMeta />
      <SeoJsonLd />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beneficios" element={<BeneficiosPage />} />
        <Route path="/funcionalidades" element={<FuncionalidadesPage />} />
        <Route path="/precios" element={<PreciosPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/laboratorios" element={<LaboratoriosPage />} />
        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
        <Route path="/terminos" element={<TerminosServicio />} />
        <Route path="/eliminar-cuenta" element={<EliminarCuenta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
