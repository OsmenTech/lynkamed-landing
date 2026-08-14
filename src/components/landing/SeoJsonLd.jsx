import { useEffect } from 'react'
import { CURRENT_CAPABILITIES, FAQ_ITEMS, PRODUCT_VISION } from './constants.js'

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

/** JSON-LD para rich results (Organization, SoftwareApplication, WebSite, FAQ, ItemList). */
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
      description: PRODUCT_VISION.body,
      email: 'ventas@lynkamed.mx',
      areaServed: {
        '@type': 'Country',
        name: 'México',
      },
      knowsAbout: [
        'Expediente clínico electrónico NOM-024',
        'Software para consultorios médicos',
        'Software para clínicas',
        'Agenda médica',
        'Portal del paciente',
        'Facturación CFDI',
        'Pasaporte de salud',
        'Directorio médico',
      ],
      sameAs: [
        'https://www.facebook.com/lynkamed',
        'https://www.instagram.com/lynkamed',
        APP_URL,
      ],
    }

    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Lynkamed',
      description: PRODUCT_VISION.headline,
      inLanguage: 'es-MX',
      publisher: { '@id': `${SITE_URL}/#organization` },
    }

    const featureList = CURRENT_CAPABILITIES.filter((c) => c.status === 'live').map((c) => c.title)

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
      image: LOGO_URL,
      description:
        'Software médico en la nube para México: expediente por especialidad (NOM-024), agenda, caja y CFDI, portal y apps, pasaporte QR, directorio con reseñas, chat y firma remota.',
      inLanguage: 'es-MX',
      offers: [
        {
          '@type': 'Offer',
          name: 'Consultorio privado',
          price: '1299',
          priceCurrency: 'MXN',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          url: `${APP_URL}/registro?tipo=consultorio`,
          description: 'Desde $1,299 MXN/mes según especialidad. 30 días de prueba gratis sin tarjeta.',
        },
        {
          '@type': 'Offer',
          name: 'Prueba gratuita 30 días',
          price: '0',
          priceCurrency: 'MXN',
          availability: 'https://schema.org/InStock',
          url: `${APP_URL}/registro`,
        },
      ],
      featureList,
      provider: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
    }

    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${SITE_URL}/funcionalidades#capacidades`,
      name: 'Capacidades Lynkamed en producción',
      description: 'Funcionalidades del software médico Lynkamed disponibles hoy para clínicas y consultorios en México.',
      numberOfItems: featureList.length,
      itemListElement: CURRENT_CAPABILITIES.filter((c) => c.status === 'live').map((cap, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: cap.title,
        description: cap.description,
        url: `${SITE_URL}/funcionalidades`,
      })),
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
      { id: 'lynkamed-ld-website', data: website },
      { id: 'lynkamed-ld-software', data: software },
      { id: 'lynkamed-ld-features', data: itemList },
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
