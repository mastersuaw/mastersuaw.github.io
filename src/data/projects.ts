export type LegalLink = {
  type: 'internal' | 'external';
  url: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bundleId: string;
  version: string;
  platforms: string[];
  icon: string;
  features: string[];
  stack: string[];
  repoUrl?: string;
  websiteUrl?: string;
  stores: { ios?: string; android?: string };
  legal: {
    privacy: LegalLink;
    terms: LegalLink;
    support: LegalLink;
  };
};

const BASE = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    slug: 'anote-domino',
    name: 'Anote Domino',
    tagline: 'La forma más fácil de llevar el marcador en tus partidas de dominó',
    description:
      'Marcador de partidas de dominó para iOS y Android. Anota puntos en vivo, gestiona equipos, consulta historial y estadísticas. Los datos se guardan localmente en el dispositivo.',
    bundleId: 'com.mastersuaw.anotedomino',
    version: '1.0',
    platforms: ['iOS', 'Android'],
    icon: `${BASE}images/apps/anote-domino.png`,
    features: [
      'Marcador en vivo para dos equipos (+25, +30, +60 y puntos personalizados)',
      'Modos por puntos o por rondas, cronómetro opcional',
      'Equipos con nombre, color y jugadores',
      'Historial y estadísticas de partidas',
      'Compartir resultados por WhatsApp, copiar o guardar imagen',
      'Modo oscuro, efectos de sonido y onboarding guiado',
      'Sin cuenta ni login; datos solo en el dispositivo',
    ],
    stack: ['SwiftUI', 'Jetpack Compose', 'Kotlin', 'Material 3'],
    repoUrl: 'https://github.com/mastersuaw/anotedomino',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/anote-domino/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/anote-domino/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/anote-domino/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'creatitek',
    name: 'Creatitek',
    tagline: 'Regalos personalizados y sublimación en Santo Domingo',
    description:
      'Plataforma de e-commerce y apps nativas para solicitar servicios de sublimación y estampado: catálogo, carrito, checkout, registro e historial de pedidos.',
    bundleId: 'com.creatitek.app',
    version: '1.3.0',
    platforms: ['iOS', 'Android', 'Web'],
    icon: `${BASE}images/apps/creatitek.png`,
    features: [
      'Catálogo de productos de sublimación y estampado',
      'Carrito y checkout con gestión de pedidos',
      'Registro e inicio de sesión con historial de pedidos',
      'Panel administrativo y contenido editable',
      'Notificaciones por correo y WhatsApp',
      'Personalizador 3D y flujo para PYMES',
    ],
    stack: ['Next.js', 'React', 'Supabase', 'Kotlin', 'SwiftUI'],
    websiteUrl: 'https://www.creatitek.com',
    stores: {},
    legal: {
      privacy: {
        type: 'external',
        url: 'https://www.creatitek.com/politica-privacidad',
        label: 'Política de privacidad',
      },
      terms: {
        type: 'external',
        url: 'https://www.creatitek.com/terminos',
        label: 'Términos y condiciones',
      },
      support: {
        type: 'external',
        url: 'https://www.creatitek.com',
        label: 'Soporte y contacto',
      },
    },
  },
  {
    slug: 'leonida-guia',
    name: 'Leonida Guia',
    tagline: 'Guía no oficial de misiones y mapa de GTA VI',
    description:
      'Aplicación de guía interactiva para explorar el mapa de Leonida en GTA VI: misiones, coleccionables, progreso y modo offline. Desarrollada de forma independiente, sin afiliación a Rockstar Games.',
    bundleId: 'com.leonidaguide.app',
    version: '0.1.0',
    platforms: ['iOS', 'Android'],
    icon: `${BASE}images/apps/leonida-guia.png`,
    features: [
      'Mapa interactivo de Leonida con puntos de interés',
      'Listado de misiones con seguimiento de progreso',
      'Coleccionables y estadísticas del mapa',
      'Búsqueda y filtros por categoría',
      'Modo offline para consultar contenido descargado',
      'Sincronización de contenido desde base de datos remota',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    repoUrl: 'https://github.com/mastersuaw/leonida-guia',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/leonida-guia/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/leonida-guia/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/leonida-guia/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'sobriety-garden',
    name: 'Sobriety Garden',
    tagline: 'Recovery no es lineal. Tu jardín guarda cada intento.',
    description:
      'Tracker de sobriedad offline-first con jardín gamificado para iOS y Android. Registra check-ins diarios, cultiva plantas con tu progreso, gestiona tropiezos con empatía y consulta herramientas para momentos de impulso. Los datos se guardan localmente en el dispositivo.',
    bundleId: 'com.sobrietygarden.app',
    version: '0.1.0',
    platforms: ['iOS', 'Android'],
    icon: `${BASE}images/apps/sobriety-garden.png`,
    features: [
      'Jardín gamificado: plantas que crecen con tu racha de sobriedad',
      'Check-ins diarios, notas de ánimo y seguimiento de racha con freezes',
      'Registro empático de tropiezos y recaídas con nueva semilla en el jardín',
      'Urge toolkit para atravesar momentos de impulso',
      'Calculadora de ahorro según gasto semanal estimado',
      'Widget de inicio con días de racha y etapa de planta',
      'Recordatorios locales de check-in',
      'Sobriety Garden Pro: journal, export CSV, freezes ilimitados y temas premium',
      'Sin cuenta ni login; datos locales en SQLite (offline-first)',
      'Disponible en español e inglés',
    ],
    stack: ['Flutter', 'Dart', 'Riverpod', 'Drift', 'SQLite', 'RevenueCat'],
    repoUrl: 'https://github.com/mastersuaw/sobrietygarden',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/sobriety-garden/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/sobriety-garden/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/sobriety-garden/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'pensum-rd',
    name: 'Pensum RD',
    tagline: 'Tu pensum y tu progreso académico universitario',
    description:
      'Aplicación educativa gratuita (Education) para estudiantes dominicanos: consulta el plan de estudios (pensum) de tu universidad y carrera, marca materias aprobadas o en curso y sigue tu progreso por créditos y cuatrimestre. Disponible en App Store (iOS 17+, desarrollador Rusbel Monegro). Modo invitado offline o sincronización en la nube con cuenta.',
    bundleId: 'com.mipensum.app',
    version: '1.0',
    platforms: ['iOS 17+', 'Android'],
    icon: `${BASE}images/apps/pensum-rd.png`,
    features: [
      'Consulta el pensum completo organizado por cuatrimestre',
      'Marca cada materia como pendiente, cursando, aprobada o convalidada',
      'Progreso total: porcentaje de créditos y cuatrimestre actual',
      'Prerequisitos de cada materia',
      'Funciona sin conexión: el pensum queda guardado en el dispositivo',
      'Modo invitado sin cuenta; migración automática al registrarte',
      'Sincronización del progreso entre dispositivos con cuenta',
      'Selección de universidad, carrera y versión de pensum',
      'Tema claro, oscuro o según el sistema',
    ],
    stack: ['SwiftUI', 'Jetpack Compose', 'Kotlin', 'Supabase', 'Next.js'],
    repoUrl: 'https://github.com/mastersuaw/pensumrd',
    stores: {
      ios: 'https://apps.apple.com/us/app/pensum-rd/id6788668407',
    },
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/pensum-rd/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/pensum-rd/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/pensum-rd/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'pensum-mx',
    name: 'Pensum MX',
    tagline: 'Tu malla curricular y tu progreso académico universitario',
    description:
      'Aplicación educativa gratuita (Education) para estudiantes mexicanos: consulta la malla curricular (plan de estudios) de tu universidad y carrera, marca materias aprobadas o en curso y sigue tu progreso por créditos y semestre. Disponible para iOS 17+ y Android (desarrollador Rusbel Monegro / mastersuaw). Modo invitado offline o sincronización en la nube con cuenta. Catálogo filtrado por México (p. ej. UNAM y más universidades en expansión).',
    bundleId: 'com.mipensum.app.mx',
    version: '0.1.0',
    platforms: ['iOS 17+', 'Android'],
    icon: `${BASE}images/apps/pensum-mx.png`,
    features: [
      'Consulta la malla curricular completa organizada por semestre',
      'Marca cada materia como pendiente, cursando, aprobada o convalidada',
      'Progreso total: porcentaje de créditos y semestre actual',
      'Prerequisitos de cada materia',
      'Funciona sin conexión: la malla queda guardada en el dispositivo',
      'Modo invitado sin cuenta; migración automática al registrarte',
      'Sincronización del progreso entre dispositivos con cuenta',
      'Selección de universidad, carrera y versión de plan de estudios',
      'Tema claro, oscuro o según el sistema',
    ],
    stack: ['SwiftUI', 'Jetpack Compose', 'Kotlin', 'Supabase', 'Next.js'],
    repoUrl: 'https://github.com/mastersuaw/pensumrd',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/pensum-mx/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/pensum-mx/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/pensum-mx/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'apagones-rd',
    name: 'Apagones RD',
    tagline: 'Consulta apagones y zonas afectadas en República Dominicana',
    description:
      'App nativa para iOS y Android que muestra el estado de circuitos eléctricos según datos CUED/EDE: mapa de zonas afectadas, reportes por circuito, historial, mantenimientos y reportes comunitarios. La información es referencial y no confirma apagón en un domicilio concreto.',
    bundleId: 'do.luzrd.apagones',
    version: '1.0.0',
    platforms: ['iOS', 'Android'],
    icon: `${BASE}images/apps/apagones-rd.png`,
    features: [
      'Inicio con alertas cercanas, KPIs y estado en tiempo casi real',
      'Mapa de zonas afectadas (datos oficiales y reportes de usuarios)',
      'Búsqueda de circuitos por código o sector',
      'Detalle de circuito: estado, historial, tendencia mensual y mantenimientos EDE',
      'Circuito favorito y preferencias de provincia / zona de influencia',
      'Reportes comunitarios: ¿tienes luz en este momento?',
      'Consejos ante apagones',
      'Ubicación opcional para detectar sector y alertas cercanas',
      'Disclaimer claro: no confirma apagón en una dirección específica',
    ],
    stack: ['SwiftUI', 'Jetpack Compose', 'Kotlin', 'Next.js', 'Supabase', 'Google Maps', 'Firebase'],
    repoUrl: 'https://github.com/mastersuaw/apagonesrd',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/apagones-rd/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/apagones-rd/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/apagones-rd/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'pelota-do',
    name: 'Pelota Do',
    tagline: 'Sigue LIDOM en vivo: portada, posiciones, resultados y estadísticas',
    description:
      'Apps nativas para iOS 17+ y Android para seguir la pelota invernal dominicana (LIDOM): juegos del día con actualizaciones en vivo, tabla de posiciones (temporada actual e histórico), resultados con detalle de juego y estadísticas de bateo/pitcheo (fuente MLB Stats API). Sin cuenta ni login.',
    bundleId: 'com.pelotado.mastersuaw',
    version: '1.0',
    platforms: ['iOS 17+', 'Android'],
    icon: `${BASE}images/apps/pelota-do.png`,
    features: [
      'Portada con juegos del día y actualizaciones en vivo por WebSocket',
      'Tabla de posiciones en vivo e histórico embebido de temporadas anteriores',
      'Resultados paginados, filtro por mes y detalle de juego',
      'Estadísticas de bateo, pitcheo y equipos (MLB Stats API / MLBAM)',
      'Caché local de estadísticas (~30 min) para menos peticiones',
      'Tabs nativos: Portada, Posiciones, Estadísticas y Resultados',
      'Sin cuenta ni login; datos de red solo para contenido deportivo',
    ],
    stack: ['SwiftUI', 'Jetpack Compose', 'Kotlin', 'Material 3', 'OkHttp'],
    repoUrl: 'https://github.com/mastersuaw/pelotainvernal',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/pelota-do/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/pelota-do/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/pelota-do/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'nomina-rd',
    name: 'Nómina RD',
    tagline: 'Calcula tu sueldo neto en República Dominicana (AFP, SFS e ISR)',
    description:
      'Calculadora nativa offline de nómina y retenciones laborales para República Dominicana. Ingresa el salario bruto mensual y obtén sueldo neto con desglose de AFP, SFS e ISR según tasas y topes embebidos. Historial local, FAQ y compartir resultados. Sin cuenta ni telemetría.',
    bundleId: 'com.nominard.mastersuaw',
    version: '1.0.0',
    platforms: ['iOS 17+', 'Android'],
    icon: `${BASE}images/apps/nomina-rd.png`,
    features: [
      'Calculadora de sueldo neto a partir del salario bruto mensual',
      'Desglose de retenciones AFP (2.87%), SFS (3.04%) e ISR con topes TSS',
      'Vista quincenal y proyección anual del cálculo',
      'Historial local de cálculos (borrable desde la app)',
      'Preguntas frecuentes sobre ISR, AFP, SFS y el flujo de cálculo',
      'Compartir resultado del cálculo',
      'Enlaces a fuentes DGII/TSS y avisos legales en la app',
      'Offline-first: sin backend, cuenta ni telemetría en v1',
      'Herramienta informativa: no sustituye asesoría contable ni la retención del empleador',
    ],
    stack: ['SwiftUI', 'Jetpack Compose', 'Kotlin'],
    websiteUrl: 'https://tunominard.com/',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/nomina-rd/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/nomina-rd/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/nomina-rd/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'prestacion-rd',
    name: 'Prestacion RD',
    tagline: 'Estima prestaciones laborales en República Dominicana (preaviso, cesantía y más)',
    description:
      'Calculadora nativa offline de prestaciones laborales para República Dominicana. Estima preaviso, cesantía, vacaciones y salario de Navidad con metodología alineada a calculo.mt.gob.do y el Código de Trabajo. Wizard de datos, salarios y opciones; resultado con desglose y PDF para compartir. Sin cuenta ni telemetría. Estimación orientativa: no es un certificado oficial del Ministerio de Trabajo.',
    bundleId: 'do.prestacionrd.mastersuaw',
    version: '1.0.0',
    platforms: ['iOS 15+', 'Android'],
    icon: `${BASE}images/apps/prestacion-rd.png`,
    features: [
      'Wizard: datos del trabajador → salarios → opciones → resultado',
      'Preaviso (Art. 76), cesantía (Art. 80, corte 17-jun-1992), vacaciones (Arts. 177–181) y salario de Navidad (Art. 219)',
      'Tipos de cálculo: ordinario, intermitente y trabajo doméstico',
      'Períodos de pago: mensual, quincenal, semanal y diario',
      'Motivos de terminación: desahucio, renuncia, causa justificada o personalizado',
      'Hasta 12 períodos de salario y comisión; completar hacia abajo desde el primero',
      'Desglose de totales y compartir resultado en PDF',
      'Ayuda con enlaces a calculo.mt.gob.do y al Código de Trabajo',
      'Tema claro, oscuro o según el sistema',
      'Offline: sin backend, cuenta ni telemetría; estimación orientativa (no oficial)',
    ],
    stack: ['UIKit', 'Swift', 'Kotlin', 'Material Components'],
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/prestacion-rd/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/prestacion-rd/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/prestacion-rd/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'examen-rd',
    name: 'Examen RD',
    tagline: 'Preparación teórica para la licencia de conducir en República Dominicana',
    description:
      'App Flutter offline-first de preparación para el examen teórico de la licencia de conducir en República Dominicana. Estudio por temas, simulacro 20 preguntas / 20 minutos, catálogo de señales, checklist del trámite, prep. práctico y psicométrico/CEMECO. Categorías 01 (moto), 02 (livianos) y 03/04 (pesados). Sin cuenta ni backend; no afiliada al INTRANT.',
    bundleId: 'com.examenrd.mastersuaw',
    version: '1.0.0',
    platforms: ['iOS', 'Android'],
    icon: `${BASE}images/apps/examen-rd.png`,
    features: [
      'Bancos de preguntas Cat. 01 (moto), Cat. 02 (livianos) y Cat. 03/04 (pesados)',
      'Estudio por tema, mixto y banco de errores con feedback y explicaciones',
      'Simulacro cronometrado estilo 20 preguntas · 20 minutos',
      'Catálogo de señales de tránsito con búsqueda, filtros y quiz corto',
      'Checklist del trámite RD con pasos ordenados y enlaces a OV / portal / examen.intrant',
      'Prep. práctico: tips, maniobras y costos/plazos por categoría',
      'Prep. psicométrico / CEMECO: tips y checklist de documentos',
      'Progreso, historial de simulacros y preferencias solo en el dispositivo',
      'Offline-first: sin cuenta, login ni servidor propio',
      'Material de preparación independiente: no es el examen oficial ni está afiliada al INTRANT',
    ],
    stack: ['Flutter', 'Dart', 'go_router', 'SharedPreferences'],
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/examen-rd/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/examen-rd/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/examen-rd/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'ahorrogrid',
    name: 'AhorroGrid',
    tagline: 'Ahorro visual con grid 10×10: 100 casillas hacia tu meta en RD$',
    description:
      'App nativa de ahorro personal que digitaliza el reto de las 100 casillas: cada meta es un grid 10×10; cada celda tiene un monto en RD$ y al marcarla se actualizan totales y progreso. Hasta 5 planes activos, distribución lineal/progresiva/aleatoria, historial de acciones y navegación Inicio · Planes · Historial · Perfil. iOS 17+ (SwiftUI) y Android (Jetpack Compose); sync en la nube con Supabase en fases posteriores.',
    bundleId: 'app.ahorogrid.ios',
    version: '0.1.0',
    platforms: ['iOS 17+', 'Android'],
    icon: `${BASE}images/apps/ahorrogrid.png`,
    features: [
      'Grid 10×10 (100 casillas) por meta de ahorro en RD$',
      'Crear planes con título, meta, duración, color y tipo de distribución',
      'Distribución lineal, progresiva o aleatoria (suma exacta = meta)',
      'Estados de celda: pendiente, completado, en proceso y anulado',
      'Hasta 5 planes activos a la vez',
      'Inicio con resumen global, carrusel de planes y actividad reciente',
      'Historial append-only de acciones de ahorro',
      'Tabs: Inicio, Planes, Historial y Perfil (+ FAB para crear)',
      'Datos locales en el dispositivo; auth/sync Supabase previstos',
      'Sin banca ni open banking: solo seguimiento visual del ahorro',
    ],
    stack: ['SwiftUI', 'Jetpack Compose', 'Kotlin', 'Supabase', 'SwiftData'],
    repoUrl: 'https://github.com/mastersuaw/ahorrogrid',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/ahorrogrid/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/ahorrogrid/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/ahorrogrid/soporte`,
        label: 'Soporte',
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
