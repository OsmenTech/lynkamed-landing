// ============================================================
// CONSTANTS - Landing Page Lynkamed
// Basado en documento técnico DISENO_APLICACION_Y_PLANES.md
// REGLA: No inventar funcionalidades
// ============================================================

import { IconCalendar, IconUsers, IconShare, IconQrCode, IconBuildingSwap, IconLayers, IconSignature, IconShieldCheck, IconSparkles } from './Icons.jsx'

// Paleta de colores - Navy profesional y Electric azul
export const NAVY = '#002147'
export const ELECTRIC = '#0066ff'
export const ELECTRIC_HOVER = '#0052cc'

/** Demo comercial — Calendly (15 min) */
export const CALENDLY_DEMO_URL = 'https://calendly.com/osnayama8/30min'
export const CALENDLY_DEMO_LABEL = 'Agendar Demo (15 min)'

// Navegación
export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/beneficios', label: 'Beneficios' },
  { href: '/funcionalidades', label: 'Funcionalidades' },
  { href: '/precios', label: 'Precios' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contacto', label: 'Contacto' },
]

// Stats del Hero - datos reales del sistema
export const HERO_STATS = [
  { value: '20+', label: 'Tipos de expediente' },
  { value: 'NOM-024', label: 'Cumplimiento' },
  { value: '100%', label: 'En la nube' },
]

// Plataformas que se reemplazan (simplificado)
export const PLATFORMS_REPLACED = [
  { name: 'Excel', examples: 'Hojas de cálculo' },
  { name: 'Agenda física', examples: 'Cuadernos, libretas' },
  { name: 'WhatsApp negocios', examples: 'Confirmaciones' },
  { name: 'Varias apps', examples: 'Herramientas dispersas' },
]

// ============================================================
// VENTAJAS PRINCIPALES - Ya implementadas
// Textos simplificados para profesionales de salud, no técnicos
// ============================================================
export const ADVANTAGES = [
  {
    id: 'ecosistema',
    promise: 'Una sola app',
    title: 'Médica Sur, Ángeles y tu consultorio',
    summary: 'Atiendes en varios hospitales o consultorios. Entras una vez y cambias de espacio en segundos.',
    more: 'Cada lugar es un espacio aparte: su agenda, sus pacientes y su equipo. Ideal si das consulta en hospitales distintos y también en tu práctica particular. Sin otra app ni otro correo por sede.',
    Icon: IconBuildingSwap,
  },
  {
    id: 'ia',
    promise: 'Inteligencia Artificial',
    title: 'Dicta y nosotros escribimos',
    summary: 'Usa tu voz para llenar expedientes. La IA transcribe y organiza la información automáticamente.',
    more: 'Mientras consultas, dicta tus notas y el sistema las transcribe directamente al expediente. Ahorra tiempo en documentación y enfócate en tu paciente. Disponible en notas clínicas y evolución.',
    Icon: IconSparkles,
  },
  {
    id: 'vinculacion',
    promise: 'Automático',
    title: 'Vincula pacientes con código QR',
    summary: 'Cada paciente tiene un QR único. Escanealo y se vincula automáticamente a tu consultorio.',
    more: 'Cuando un paciente llega a cualquiera de tus sedes, solo escanea su QR. Su historial se comparte automáticamente (con su autorización). Cero duplicados, cero errores de captura.',
    Icon: IconQrCode,
  },
  {
    id: 'compartir',
    promise: 'En un clic',
    title: 'Comparte expedientes con tus pacientes',
    summary: 'Envía resultados, notas y recetas al portal del paciente con un solo clic.',
    more: 'Tu paciente recibe una notificación y accede a sus documentos desde el portal con contraseña o código OTP. Seguro, rápido y sin WhatsApp de por medio.',
    Icon: IconShare,
  },
  {
    id: 'agenda',
    promise: 'Organizado',
    title: 'Agenda y expedientes conectados',
    summary: 'Cuando agendas una cita, el expediente del paciente está listo para cuando llegue.',
    more: 'Vista de calendario por día, semana o mes. Alertas de citas, recordatorios automáticos. Desde la cita accedes directo al expediente del paciente.',
    Icon: IconCalendar,
  },
]

// ============================================================
// TIPOS DE CLÍNICAS - Precios anuales (B2B)
// Basado en expedientes REALES del código
// ============================================================
export const CLINIC_TYPES = [
  {
    id: 'rehab-cardio',
    name: 'Rehabilitación Cardíaca',
    description: 'El sistema calcula automáticamente scores pronósticos, FC diana y parámetros de entrenamiento.',
    icon: 'heart',
    color: '#dc2626',
    features: ['Cálculos automáticos', 'Scores pronósticos', 'FC Diana', 'Comparativa pre/post'],
    expedientes: [
      'Prueba de Esfuerzo',
      'Estratificación INCH',
      'Estratificación AACVPR',
      'Expediente Clínico',
      'Cualidades Físicas',
      'Reporte Final Cardiovascular',
    ],
    // Cálculos automáticos que realiza el sistema
    calculos: [
      { nombre: 'Score Duke', formula: 'METs + 1.69 - (5×infraST) - (4×angina)', descripcion: 'Pronóstico a 5 años' },
      { nombre: 'Score Veteranos', formula: '5×ICC + infraST + ΔTA - METs', descripcion: 'Riesgo cardiovascular' },
      { nombre: 'FC Diana Karvonen', formula: '((FCmax-FCbasal)×0.7) + FCbasal', descripcion: 'Intensidad de entrenamiento' },
      { nombre: 'FC Diana Blackburn', formula: 'FCmax × 0.8', descripcion: 'Alternativa para FC diana' },
      { nombre: 'FC Diana Narita', formula: '78.4 + (0.76×FCbasal) - (0.27×edad)', descripcion: 'Para pacientes con ICC' },
      { nombre: 'METs alcanzados', formula: 'VO2/3.5 (banda, ciclo o gases)', descripcion: 'Capacidad funcional' },
      { nombre: 'Doble Producto', formula: 'FC × TAS', descripcion: 'Consumo miocárdico de O2' },
      { nombre: '% FC máxima', formula: '(FCpico × 100) / (220-edad)', descripcion: 'Esfuerzo alcanzado' },
      { nombre: 'Respuesta presora', formula: '(TASmax - TASbasal) / METs', descripcion: 'Comportamiento TA' },
      { nombre: 'Respuesta cronotrópica', formula: '(FCmax - FCbasal) / METs', descripcion: 'Competencia cronot.' },
      { nombre: 'Recuperación FC', formula: 'FCmax - FC1min', descripcion: 'Función autonómica' },
      { nombre: 'VPP / VPN', formula: 'Bayes con prevalencia y especificidad', descripcion: 'Valor predictivo' },
    ],
  },
  {
    id: 'rehab-pulmonar',
    name: 'Rehabilitación Pulmonar',
    description: 'Cálculos automáticos de capacidad funcional pulmonar y parámetros de entrenamiento.',
    icon: 'lungs',
    color: '#0891b2',
    features: ['Cálculos automáticos', 'VO2 predicho', 'METs pulmonar', 'Zonas de entrenamiento'],
    expedientes: [
      'Expediente Pulmonar',
      'Nota de Seguimiento Pulmonar',
      'Prueba de Esfuerzo Pulmonar',
      'Reporte Final Pulmonar',
    ],
    calculos: [
      { nombre: 'VO2 predicho', formula: 'Según edad, peso y género', descripcion: 'Valor teórico esperado' },
      { nombre: 'METs predichos', formula: 'VO2 predicho / 3.5', descripcion: 'Capacidad teórica' },
      { nombre: '% FC máxima', formula: '(FCpico × 100) / FCmax100%', descripcion: 'Esfuerzo alcanzado' },
      { nombre: '% METs alcanzados', formula: '(METs prueba × 100) / METs predichos', descripcion: 'Capacidad funcional' },
      { nombre: '% VO2 alcanzado', formula: '(VO2 prueba × 100) / VO2 predicho', descripcion: 'Consumo de oxígeno' },
      { nombre: 'Zonas FC', formula: '65%, 75%, 85% de FCmax', descripcion: 'Intensidades entrenamiento' },
    ],
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia / Rehabilitación Física',
    description: 'Historia clínica, notas de evolución y alta para rehabilitación física.',
    icon: 'dumbbell',
    color: '#059669',
    features: ['Historia clínica fisio', 'Notas de evolución', 'Nota de alta', 'Reportes'],
    expedientes: [
      'Historia Clínica Fisioterapia',
      'Nota de Evolución Fisioterapia',
      'Nota de Alta Fisioterapia',
      'Reporte Fisioterapia',
    ],
  },
  {
    id: 'dental',
    name: 'Clínica Dental',
    description: 'Historia dental completa con odontograma interactivo y radiografías.',
    icon: 'tooth',
    color: '#7c3aed',
    features: ['Odontograma interactivo', 'Historia clínica dental', 'Radiografías', 'Multi-sucursal'],
    expedientes: [
      'Historia Clínica Dental',
      'Odontograma',
      'Radiografías Dentales',
    ],
  },
]

// ============================================================
// TIPOS DE CONSULTORIO PRIVADO - Suscripción mensual (B2C)
// Solo especialidades que REALMENTE tenemos expedientes
// ============================================================
export const CONSULTORIO_TYPES = [
  {
    id: 'general',
    name: 'Medicina General',
    description: 'Consulta general con expediente clínico completo NOM-024.',
    color: ELECTRIC,
    price: '$1,800/mes',
    expedientes: ['Expediente Clínico', 'Recetas', 'Notas de Evolución'],
  },
  {
    id: 'cardiologia',
    name: 'Cardiología',
    description: 'Expedientes cardiovasculares con historia cardiológica, ecocardiograma y electrocardiograma.',
    color: '#dc2626',
    price: '$1,800/mes',
    expedientes: ['Historia Cardiológica', 'Ecocardiograma', 'Electrocardiograma', 'Expediente Clínico'],
  },
  {
    id: 'ginecologia',
    name: 'Ginecología y Obstetricia',
    description: 'Historia ginecológica y obstétrica completa para seguimiento de pacientes.',
    color: '#EC4899',
    price: '$1,800/mes',
    expedientes: ['Historia Ginecológica', 'Historia Obstétrica', 'Expediente Clínico', 'Notas de Evolución'],
  },
  {
    id: 'pediatria',
    name: 'Pediatría',
    description: 'Historia pediátrica y notas de seguimiento para consulta infantil.',
    color: '#F97316',
    price: '$1,800/mes',
    expedientes: ['Historia Clínica Pediatría', 'Nota de Seguimiento Pediatría', 'Recetas', 'Órdenes de laboratorio'],
  },
  {
    id: 'dermatologia',
    name: 'Dermatología',
    description: 'Historia dermatológica con seguimiento y apoyo fotográfico clínico.',
    color: '#F59E0B',
    price: '$1,800/mes',
    expedientes: ['Historia Clínica Dermatología', 'Nota de Seguimiento Dermatología', 'Recetas'],
  },
  {
    id: 'nutricion',
    name: 'Nutrición',
    description: 'Seguimiento nutricional con historial y evaluaciones.',
    color: '#f59e0b',
    price: '$1,800/mes',
    expedientes: ['Reporte Nutricional', 'Notas de Seguimiento'],
  },
  {
    id: 'psicologia',
    name: 'Psicología',
    description: 'Historia psicológica y seguimiento de sesiones.',
    color: '#8b5cf6',
    price: '$1,800/mes',
    expedientes: ['Reporte Psicológico', 'Notas de Sesión'],
  },
  {
    id: 'dental-ind',
    name: 'Dental Individual',
    description: 'Consultorio dental con odontograma y radiografías.',
    color: '#7c3aed',
    price: '$1,800/mes',
    expedientes: ['Historia Dental', 'Odontograma', 'Radiografías'],
  },
  {
    id: 'fisio-ind',
    name: 'Fisioterapia',
    description: 'Consultorio de rehabilitación física.',
    color: '#059669',
    price: '$1,800/mes',
    expedientes: ['Historia Fisioterapia', 'Notas de Evolución', 'Nota de Alta'],
  },
]

// ============================================================
// CAPACIDADES ACTUALES - Ya implementadas en producción
// ============================================================
export const CURRENT_CAPABILITIES = [
  {
    id: 'portal',
    title: 'Portal del Paciente',
    description: 'Acceso con OTP y contraseña. Citas, documentos compartidos, directorio y mensajes con la clínica.',
    status: 'live',
  },
  {
    id: 'pasaporte',
    title: 'Pasaporte de Salud (QR)',
    description: 'Identidad clínica del paciente: vinculación en recepción y datos críticos para emergencia (ICE).',
    status: 'live',
  },
  {
    id: 'directorio',
    title: 'Directorio y reseñas',
    description: 'Mapa de sedes, pin editable y valoraciones de espacio o médico. Respuesta y moderación desde el panel.',
    status: 'live',
  },
  {
    id: 'chat-paciente',
    title: 'Mensajes clínica ↔ paciente',
    description: 'Chat seguro entre el espacio y el paciente (web y apps). Respeta bloqueos del vínculo.',
    status: 'live',
  },
  {
    id: 'caja',
    title: 'Caja y Finanzas',
    description: 'Pagos, egresos, cortes por sucursal. Recibos digitales con envío por email.',
    status: 'live',
  },
  {
    id: 'analiticas',
    title: 'Analíticas del consultorio',
    description: 'Citas, cancelaciones, pacientes nuevos e inactivos, y caja del periodo. Comparas contra el periodo anterior.',
    status: 'live',
  },
  {
    id: 'presupuestos',
    title: 'Presupuestos Clínicos',
    description: 'Generación de presupuestos y cotizaciones. Puedes compartirlos para que el paciente los visualice en su portal.',
    status: 'live',
  },
  {
    id: 'calendario',
    title: 'Agenda y Calendario',
    description: 'Citas y eventos con vista calendario. Gestión por sucursal.',
    status: 'live',
  },
  {
    id: 'recetas',
    title: 'Recetas con e.Firma + QR',
    description: 'Recetas firmadas, PDF descargable y verificación pública por código QR.',
    status: 'live',
  },
  {
    id: 'firma-remota',
    title: 'Firma remota del paciente',
    description: 'Envía un enlace seguro para que el paciente firme consentimientos u otros documentos desde el móvil.',
    status: 'live',
  },
  {
    id: 'especialidades',
    title: 'Expedientes por especialidad',
    description: 'Cardio, pulmonar, fisio, dental, gine/obst, nutri, psico, pediatría, dermatología y más módulos activables.',
    status: 'live',
  },
  {
    id: 'pdf',
    title: 'Generación de PDFs',
    description: 'Expedientes, recetas, recibos y odontogramas exportables a PDF.',
    status: 'live',
  },
  {
    id: 'sucursales',
    title: 'Multi-sucursal',
    description: 'Gestión de múltiples sedes con permisos por sucursal.',
    status: 'live',
  },
  {
    id: 'laboratorios',
    title: 'Órdenes de Laboratorio + Portal',
    description: 'Creación de órdenes, seguimiento por estatus y portal de laboratorio con enlace seguro.',
    status: 'live',
  },
  {
    id: 'inventario',
    title: 'Inventario Clínico',
    description: 'Control de stock, movimientos, historial y alertas de inventario bajo por sucursal.',
    status: 'live',
  },
  {
    id: 'facturacion-cfdi',
    title: 'Facturación CFDI 4.0',
    description: 'Flujo de solicitud, timbrado, descarga de PDF/XML y reenvío por correo.',
    status: 'live',
  },
  {
    id: 'dental-avanzado',
    title: 'Dental Avanzado',
    description: 'Odontograma, radiografías y modelo dental integrado al expediente del paciente.',
    status: 'live',
  },
  {
    id: 'workspace',
    title: 'Varios consultorios en una cuenta',
    description: 'Médica Sur, Ángeles o tu consultorio particular: un login y cambias de agenda en segundos.',
    status: 'live',
  },
  {
    id: 'bienestar',
    title: 'Bienestar del paciente',
    description: 'Plan personal de pasos, hidratación y tips de bienestar en la experiencia del paciente.',
    status: 'live',
  },
  {
    id: 'vademecum',
    title: 'Vademécum Integrado',
    description: 'Catálogo terapéutico para búsqueda rápida de medicamentos al emitir recetas.',
    status: 'live',
  },
]

// ============================================================
// ROADMAP — solo lo que aún no está en producción
// ============================================================
export const ROADMAP_FEATURES = [
  {
    id: 'app-paciente',
    title: 'App paciente iOS y Android',
    description:
      'App nativa del paciente: pasaporte QR, citas, documentos, bienestar y directorio. Lanzamiento público pronto.',
    date: 'Pronto',
    status: 'launch',
    image: '/app-paciente-home.jpg',
  },
  {
    id: 'ia-clinica',
    title: 'IA clínica avanzada',
    description: 'Apoyo clínico con IA más profundo: predicción de riesgo y asistencia en documentación.',
    date: '2026–2027',
    status: 'development',
    image: '/IA.jpg',
  },
  {
    id: 'telemedicina',
    title: 'Telemedicina',
    description: 'Videoconsulta integrada al expediente y a la agenda del paciente.',
    date: '2027',
    status: 'planned',
    image: '/telemedicina.jpg',
  },
]

// ============================================================
// PRECIOS - Alineados al documento de negocio
// Nota: Facturación CFDI es ADD-ON, NO incluido en base
// ============================================================
export const PRICING_PLANS = [
  {
    id: 'consultorio',
    name: 'Consultorio Privado',
    description: 'Para profesionales de salud independientes',
    price: '$1,800',
    period: '+ IVA / mes',
    features: [
      'Expediente clínico NOM-024',
      'Agenda en línea',
      'Portal del paciente con OTP',
      'Recetas con e.firma',
      'Caja y finanzas',
      'PDF y envío por correo',
      'Soporte incluido',
    ],
    cta: 'Iniciar prueba',
    popular: true,
  },
  {
    id: 'dental',
    name: 'Clínica Dental',
    description: 'Odontograma y multi-sucursal',
    price: '$18,000',
    period: '+ IVA / año',
    features: [
      'Todo lo del Consultorio',
      'Odontograma interactivo',
      'Historia clínica dental',
      'Radiografías digitales',
      'Multi-sucursal disponible',
      '+$10,000/año por sucursal',
    ],
    cta: 'Solicitar demo',
    popular: false,
  },
  {
    id: 'rehabilitacion',
    name: 'Rehabilitación',
    description: 'Cardio, Pulmonar o Física',
    price: 'Desde $35,000',
    period: '+ IVA / año',
    features: [
      'Todo lo del Consultorio',
      'Expedientes especializados',
      'Estratificación INCH/AACVPR',
      'Pruebas de esfuerzo',
      'Reportes finales',
      'Precio según módulos',
    ],
    cta: 'Cotizar',
    popular: false,
  },
  {
    id: 'polivalente',
    name: 'Clínica Polivalente',
    description: 'Múltiples especialidades',
    price: 'A medida',
    period: 'Cotización',
    features: [
      'Todas las especialidades',
      'Multi-sede',
      'Onboarding personalizado',
      'Migración de datos',
      'Soporte prioritario',
      'Capacitación incluida',
    ],
    cta: 'Contactar ventas',
    popular: false,
  },
]

// Complementos opcionales (con costo adicional)
export const ADDONS = [
  {
    id: 'facturacion',
    name: 'Facturación CFDI 4.0',
    description: 'Timbrado de facturas electrónicas.',
    price: 'Según volumen',
    note: 'Costo adicional',
  },
  {
    id: 'migracion',
    name: 'Migración de datos',
    description: 'Importamos tu información de otros sistemas.',
    price: 'Según volumen',
    note: 'Configuración inicial',
  },
  {
    id: 'sucursal-extra',
    name: 'Sucursal adicional',
    description: 'Agrega más sucursales a tu clínica.',
    price: 'Contáctanos',
    note: 'Solo clínicas',
  },
]

// Especialidades para consultorio privado
export const ESPECIALIDADES_CONSULTORIO = [
  { id: 'general', label: 'Medicina General' },
  { id: 'cardiologia', label: 'Cardiología' },
  { id: 'dermatologia', label: 'Dermatología' },
  { id: 'endocrinologia', label: 'Endocrinología' },
  { id: 'gastroenterologia', label: 'Gastroenterología' },
  { id: 'ginecologia', label: 'Ginecología y Obstetricia' },
  { id: 'neurologia', label: 'Neurología' },
  { id: 'oftalmologia', label: 'Oftalmología' },
  { id: 'ortopedia', label: 'Ortopedia y Traumatología' },
  { id: 'otorrinolaringologia', label: 'Otorrinolaringología' },
  { id: 'pediatria', label: 'Pediatría' },
  { id: 'psiquiatria', label: 'Psiquiatría' },
  { id: 'urologia', label: 'Urología' },
  { id: 'neumologia', label: 'Neumología' },
  { id: 'nefrologia', label: 'Nefrología' },
  { id: 'reumatologia', label: 'Reumatología' },
  { id: 'oncologia', label: 'Oncología' },
  { id: 'anestesiologia', label: 'Anestesiología' },
  { id: 'cirugia_general', label: 'Cirugía General' },
  { id: 'medicina_interna', label: 'Medicina Interna' },
  { id: 'geriatria', label: 'Geriatría' },
  { id: 'nutricion', label: 'Nutrición' },
  { id: 'psicologia', label: 'Psicología' },
  { id: 'fisioterapia', label: 'Fisioterapia' },
  { id: 'dental', label: 'Odontología' },
  { id: 'otra', label: 'Otra especialidad' },
]

// Módulos para clínicas (tipos de clínica disponibles)
export const MODULOS_CLINICA = [
  { id: 'rehabilitacion_cardiopulmonar', label: 'Rehabilitación Cardíaca, Pulmonar y Fisioterapia' },
  { id: 'dental', label: 'Dental / Odontología' },
  { id: 'cardiaco', label: 'Rehabilitación Cardíaca' },
  { id: 'pulmonar', label: 'Rehabilitación Pulmonar' },
  { id: 'fisioterapia', label: 'Fisioterapia' },
  { id: 'nutricion', label: 'Nutrición' },
  { id: 'psicologia', label: 'Psicología' },
  { id: 'cardiologia', label: 'Cardiología' },
  { id: 'dermatologia', label: 'Dermatología' },
  { id: 'endocrinologia', label: 'Endocrinología' },
  { id: 'gastroenterologia', label: 'Gastroenterología' },
  { id: 'ginecologia', label: 'Ginecología y Obstetricia' },
  { id: 'neurologia', label: 'Neurología' },
  { id: 'oftalmologia', label: 'Oftalmología' },
  { id: 'ortopedia', label: 'Ortopedia y Traumatología' },
  { id: 'otorrinolaringologia', label: 'Otorrinolaringología' },
  { id: 'pediatria', label: 'Pediatría' },
  { id: 'psiquiatria', label: 'Psiquiatría' },
  { id: 'urologia', label: 'Urología' },
  { id: 'neumologia', label: 'Neumología' },
  { id: 'nefrologia', label: 'Nefrología' },
  { id: 'reumatologia', label: 'Reumatología' },
  { id: 'oncologia', label: 'Oncología' },
  { id: 'anestesiologia', label: 'Anestesiología' },
  { id: 'cirugia_general', label: 'Cirugía General' },
  { id: 'medicina_interna', label: 'Medicina Interna' },
  { id: 'geriatria', label: 'Geriatría' },
  { id: 'general', label: 'Medicina General' },
]

// FAQ - Preguntas frecuentes
export const FAQ_ITEMS = [
  {
    id: 'nom-024',
    question: '¿Lynkamed cumple con la NOM-024-SSA3-2012?',
    answer:
      'Sí. Lynkamed está alineado a los estándares de expediente clínico electrónico de la NOM-024-SSA3-2012.\n\n- Estructura de expediente clínico electrónico\n- Controles de acceso por usuario y rol\n- Trazabilidad y confidencialidad de la información\n- Buenas prácticas de seguridad y protección de datos\n\nEsto permite a médicos y clínicas operar con un expediente digital pensado para el marco normativo mexicano.',
  },
  {
    id: 'prueba-gratis',
    question: '¿Cómo funciona la prueba gratuita?',
    answer:
      'Puedes registrarte en menos de 2 minutos y empezar sin tarjeta de crédito.\n\n- 30 días de prueba en los planes disponibles\n- Acceso a las funciones del plan elegido\n- Sin compromiso de permanencia durante la prueba\n\nAl terminar el periodo, decides si continúas con una suscripción o cancelas.',
  },
  {
    id: 'que-incluye',
    question: '¿Qué incluye el precio del consultorio privado?',
    answer:
      'Incluye los módulos necesarios para operar un consultorio privado desde el primer día.\n\n- Expediente clínico electrónico conforme a NOM-024\n- Agenda en línea\n- Portal del paciente\n- Recetas con firma electrónica\n- Caja y finanzas básicas\n- Generación de presupuestos\n- Generación de PDFs\n- Soporte técnico y acompañamiento inicial\n\nLa facturación CFDI se cotiza como complemento según el volumen de facturación y el tipo de operación.',
  },
  {
    id: 'migracion',
    question: '¿Pueden migrar mis datos de otro sistema?',
    answer:
      'Sí. Podemos apoyarte en la migración durante la configuración inicial.\n\nNormalmente trabajamos con información proveniente de:\n- Sistemas anteriores\n- Hojas de Excel\n- Bases de datos\n- Expedientes digitales ya existentes\n\nEl alcance y costo dependen del volumen, calidad y estructura de la información que quieras importar.',
  },
  {
    id: 'sucursales',
    question: '¿Puedo agregar más sucursales a mi clínica?',
    answer:
      'Sí. LynkaMed está preparado para operación multi-sucursal.\n\nCada sede puede tener:\n- Usuarios y roles propios\n- Agenda independiente\n- Caja separada\n- Configuración operativa por sucursal\n\nLa activación de nuevas sucursales se cotiza según la estructura de tu clínica.',
  },
  {
    id: 'varios-hospitales',
    question: '¿Puedo usar LynkaMed si atiendo en varios hospitales o consultorios?',
    answer:
      'Sí. Esa es una de las ventajas del plan de consultorio.\n\nCon una sola cuenta puedes tener varios espacios, por ejemplo:\n- Tu consultorio en Médica Sur\n- Tu práctica en Hospital Ángeles\n- Tu consultorio particular\n\nCambias de espacio en segundos. Cada uno mantiene su agenda, pacientes y equipo por separado, sin mezclar información entre lugares.',
  },
  {
    id: 'seguridad',
    question: '¿Mis datos y los de mis pacientes están seguros?',
    answer:
      'Sí. La seguridad de la información clínica es una prioridad del sistema.\n\nTrabajamos con:\n- Cumplimiento NOM-024 para expediente clínico electrónico\n- Buenas prácticas alineadas a protección de datos personales\n- Cifrado en tránsito y en reposo\n- Separación lógica de datos por clínica o workspace\n- Control de accesos por usuario y rol\n\nAdemás, cada organización opera sobre su propio entorno de datos.',
  },
  {
    id: 'capacitacion',
    question: '¿Ofrecen capacitación para usar el sistema?',
    answer:
      'Sí. Incluimos acompañamiento de onboarding y capacitación según el tipo de operación.\n\nEn consultorios el arranque es más ágil. En clínicas o equipos más grandes organizamos sesiones por rol, flujo y módulo activado.',
  },
  {
    id: 'cancelar',
    question: '¿Puedo cancelar en cualquier momento?',
    answer:
      'Depende del esquema contratado.\n\n- Consultorio privado: suscripción mensual, con cancelación según condiciones comerciales vigentes\n- Clínicas: normalmente trabajamos con contrato anual y renovación\n\nTus datos son tuyos y podemos revisar contigo las opciones de exportación o entrega al cierre.',
  },
  {
    id: 'portal-paciente',
    question: '¿Cómo funciona el portal del paciente?',
    answer:
      'Cada paciente puede acceder a un portal web seguro con contraseña o código OTP.\n\nDesde ahí puede:\n- Ver citas y confirmar asistencia\n- Consultar documentos compartidos\n- Buscar clínicas en el directorio y dejar reseñas\n- Mensajear con su clínica\n- Revisar presupuestos y resultados disponibles\n- Completar su pasaporte de salud (datos ICE)\n\nPronto también en app iOS y Android.',
  },
  {
    id: 'qr-paciente',
    question: '¿Cómo funciona la vinculación por QR?',
    answer:
      'Cada paciente cuenta con un Pasaporte de Salud con QR único.\n\nCuando llega a consulta o a una sede participante:\n- Se escanea el código en recepción\n- Se vincula al espacio sin recrear el expediente\n- En emergencia, muestra datos críticos autorizados (grupo sanguíneo, alergias, contacto)\n\nAsí reduces duplicados y ganas continuidad clínica entre espacios.',
  },
  {
    id: 'diferencia-mercado',
    question: '¿Cuál es la diferencia con otros sistemas en el mercado?',
    answer:
      'La diferencia principal es que LynkaMed está pensado para operación clínica real, no solo para agendar citas.\n\nIntegra en una sola plataforma:\n- Expediente clínico por especialidad\n- Agenda multi-sucursal y multi-workspace\n- Portal y app del paciente\n- Pasaporte de salud QR\n- Directorio y reseñas\n- Caja, inventario y facturación CFDI\n- Mensajería clínica ↔ paciente\n\nAdemás, desarrollamos con retroalimentación directa de profesionales de salud y clínicas.',
  },
  {
    id: 'futuro-producto',
    question: '¿Hacia dónde va el producto?',
    answer:
      'Construimos el sistema clínico más completo y útil para México y Latinoamérica.\n\nYa entregamos: mensajería paciente-clínica, directorio con reseñas, pediatría y dermatología, firma remota, verificación de recetas por QR, pasaporte de salud y vademécum integrado.\n\nPróximo: lanzamiento público de la app paciente iOS/Android, IA clínica avanzada y telemedicina.\n\nPriorizamos funcionalidades con base en necesidades reales de nuestros clientes.',
  },
  {
    id: 'implementacion-tiempo',
    question: '¿Cuánto tarda la implementación?',
    answer:
      'Para configuraciones estándar, la activación es prácticamente inmediata.\n\n- Consultorio individual: activación en el mismo día\n- Clínica de una especialidad: activación base muy rápida y ajustes en días\n- Clínica multi-sede o multi-especialidad: activamos por fases según prioridad operativa\n\nEn todos los casos definimos contigo alcance y orden de activación para empezar a operar lo antes posible.',
  },
  {
    id: 'especialidades-modulos',
    question: '¿Pueden activar expedientes por especialidad en una clínica multiespecialidad?',
    answer:
      'Sí. Ese es uno de los enfoques del producto.\n\nCreamos expedientes por especialidad y los activamos como módulos dentro de la misma operación clínica. Así puedes comenzar con un conjunto de flujos y después crecer sin cambiar de sistema.',
  },
  {
    id: 'soporte-incluye',
    question: '¿Qué incluye el soporte?',
    answer:
      'El soporte cubre acompañamiento sobre uso del sistema, resolución de incidencias y ayuda para mantener tu operación estable.\n\nEn proyectos más grandes también podemos revisar configuración, adopción por equipo y optimización de procesos según alcance contratado.',
  },
]

