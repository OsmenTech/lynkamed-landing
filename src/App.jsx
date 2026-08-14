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
    title: 'Lynkamed — Software médico NOM-024 para clínicas y consultorios en México',
    description:
      'Expediente clínico por especialidad, agenda, caja CFDI, portal y apps, pasaporte QR, directorio con reseñas y chat. Software médico en la nube para México. Prueba 30 días gratis.',
  },
  '/beneficios': {
    title: 'Beneficios | Lynkamed — Operación clínica y paciente conectados',
    description:
      'Cómo Lynkamed mejora la atención: NOM-024, multi-workspace, pasaporte QR, directorio, apps y menos fricción operativa en clínicas y consultorios.',
  },
  '/funcionalidades': {
    title: 'Funcionalidades | Expediente, directorio, apps y caja — Lynkamed',
    description:
      'Capacidades en producción: expedientes (pediatría, dermatología, cardio, dental…), agenda, portal, apps, pasaporte QR, reseñas, chat, firma remota, CFDI e inventario.',
  },
  '/precios': {
    title: 'Planes y precios | Lynkamed — Desde $999 MXN/mes',
    description:
      'Planes Lynkamed para consultorio y clínica según especialidad. 30 días de prueba gratis sin tarjeta.',
  },
  '/faq': {
    title: 'Preguntas frecuentes | Lynkamed software médico',
    description:
      'FAQ: NOM-024, pasaporte QR, directorio y reseñas, portal, migración, multi-sucursal, seguridad y hacia dónde va el producto.',
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
