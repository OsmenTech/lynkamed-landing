import { useEffect } from 'react'
import { FAQ_ITEMS } from './constants.js'

const SITE_URL = 'https://lynkamed.mx'
const APP_URL = 'https://app.lynkamed.mx'
const LOGO_URL = `${SITE_URL}/lynkamed-logo.png`

function plainAnswer(answer) {
  return String(answer || '')
    .replace(/\n+/g, ' ')
    .replace(/-\s/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** JSON-LD para GEO / rich results (Organization, SoftwareApplication, FAQPage). */
export function SeoJsonLd() {
  useEffect(() => {
    const organization = {
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Lynkamed',
      legalName: 'Osmen Tech Enterprise S.A.S',
      url: SITE_URL,
      logo: LOGO_URL,
      description:
        'Software médico en la nube para médicos y clínicas en México. Expedientes clínicos por especialidad (NOM-024), agenda, caja, pasaporte de salud QR, directorio y portal del paciente. App móvil próximamente.',
      email: 'ventas@lynkamed.mx',
      areaServed: {
        '@type': 'Country',
        name: 'México',
      },
      sameAs: [
        'https://www.facebook.com/lynkamed',
        'https://www.instagram.com/lynkamed',
        APP_URL,
        // Agregar LinkedIn company cuando exista:
        // 'https://www.linkedin.com/company/lynkamed',
      ],
    }

    const software = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: 'Lynkamed',
      applicationCategory: 'HealthApplication',
      applicationSubCategory: 'Electronic Health Record',
      operatingSystem: 'Web, iOS, Android',
      url: SITE_URL,
      downloadUrl: APP_URL,
      image: `${SITE_URL}/app-paciente-home.jpg`,
      description:
        'Lynkamed es el software médico en la nube para médicos y clínicas en México. Expedientes clínicos por especialidad (NOM-024), agenda, caja, pasaporte de salud QR, directorio con mapa y portal del paciente. App iOS y Android próximamente.',
      inLanguage: 'es-MX',
      offers: [
        {
          '@type': 'Offer',
          name: 'Consultorio',
          price: '699',
          priceCurrency: 'MXN',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          url: `${APP_URL}/registro?tipo=consultorio`,
          description: 'Plan consultorio desde $699 MXN/mes (terapias). Médico/especialidad $899. 3 usuarios. 30 días gratis sin tarjeta.',
        },
        {
          '@type': 'Offer',
          name: 'Clínica Dental',
          price: '1699',
          priceCurrency: 'MXN',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          url: `${APP_URL}/registro?tipo=clinica&especialidad=dental`,
          description: 'Clínica dental $1,699/mes en lanzamiento (lista $2,299). 15 usuarios.',
        },
        {
          '@type': 'Offer',
          name: 'Prueba gratuita 30 días',
          price: '0',
          priceCurrency: 'MXN',
          availability: 'https://schema.org/InStock',
          url: `${APP_URL}/registro`,
          description: 'Registro en menos de 2 minutos. Sin tarjeta de crédito.',
        },
      ],
      featureList: [
        'Expediente clínico electrónico NOM-024',
        'Agenda médica multi-sucursal',
        'Portal del paciente',
        'Pasaporte de salud con QR',
        'Directorio de clínicas y mapa',
        'Mensajería clínica ↔ paciente',
        'Recetas con firma electrónica y verificación QR',
        'Pediatría y dermatología',
        'Control de caja y finanzas',
        'Facturación CFDI 4.0',
        'Multi-workspace (varios consultorios / hospitales)',
        'Vademécum integrado en recetas',
        'App paciente iOS y Android (lanzamiento pronto)',
      ],
      provider: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
    }

    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/faq#faqpage`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: plainAnswer(item.answer),
        },
      })),
    }

    const nodes = [
      { id: 'lynkamed-ld-organization', data: organization },
      { id: 'lynkamed-ld-software', data: software },
      { id: 'lynkamed-ld-faq', data: faq },
    ]

    const created = nodes.map(({ id, data }) => {
      let el = document.getElementById(id)
      if (!el) {
        el = document.createElement('script')
        el.type = 'application/ld+json'
        el.id = id
        document.head.appendChild(el)
      }
      el.textContent = JSON.stringify(data)
      return el
    })

    return () => {
      created.forEach((el) => el.remove())
    }
  }, [])

  return null
}
