export interface BusinessLine {
  id: number
  title: string
  icon: string
  description: string
  color: string
}

export interface Product {
  id: number
  name: string
  category: string
  type: string
  image: string
  description: string
}

export interface TechnicalProduct {
  id: number
  name: string
  category: string
  type: string
  application: string
  image?: string
  description: string
}

// Datos de filtros organizados jerárquicamente
export const filterData = {
  'CEMENTOS DE CONTACTO': {
    POLICLOROPRENO: [
      'UNIVERSAL / MULTIUSO',
      'LAMINADOS & MDF',
      'TAPICERIA & ESPUMA',
      'CALZADO',
    ],
    'CAUCHO NATURAL': ['UNIVERSAL / MULTIUSO'],
    'POLIURETANO REACTIVABLE': [],
  },
  'RESINAS DE POLIESTER': {
    TEREFTALICA: [],
    ORTOFTALICA: [],
    'ORTOFTALICA TIXOTROPICA': [],
    'ORTOFTALICA PARA MASILLAS': [],
    'ISOFTALICA NPG': [],
    AUXILIARES: [],
  },
  'SISTEMAS DE POLIURETANO': {
    'CALZADO DE SEGURIDAD': ['COMPACTO', 'EXPANSO'],
    'CALZADO DAMA': [],
    'CALZADO CASUAL': [],
    PLANTILLAS: [],
    ASIENTOS: [],
    'PREPOLIMEROS DE FORMULACION': [],
  },
  'BARNICES Y SELLADORES PARA MADERA': {
    BARNICES: ['NATURAL', 'MARINO'],
    'SELLADORES & ADHESIVOS': [],
    REMOVEDORES: [],
  },
  AUTOMOTRIZ: {
    'FLUIDOS PARA FRENOS': ['DOT 3', 'DOT 4', 'DOT 5.1'],
    'DESENGRASANTES Y LIMPIEZA': [],
    'FORMULA MARINA': [],
    'LIQUIDO LIMPIADOR DE INYECTORES': [],
    REFRIGERANTES: [],
    LUBRICANTES: [
      'MOTORES GASOLINA',
      'MOTORES DIESEL',
      'HIDRAULICO AW',
      'TRANSMISIONES',
      'TRACTORES',
      'TURBINA',
      'CORTE DE METAL',
    ],
  },
} as const

export type Category = keyof typeof filterData
export type Subcategory<C extends Category> = keyof (typeof filterData)[C]
export type Applications<
  C extends Category,
  S extends Subcategory<C>,
> = (typeof filterData)[C][S][never]

export const businessLines: BusinessLine[] = [
  {
    id: 1,
    title: 'Resinas de poliéster',
    icon: 'bottle',
    description:
      'Resinas de alta calidad para diversas aplicaciones industriales',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: 'Sistemas de poliuretano',
    icon: 'footprints',
    description: 'Sistemas versátiles para la industria del calzado y más',
    color: 'from-green-400 to-green-600',
  },
  {
    id: 3,
    title: 'Soldaduras de PVC',
    icon: 'pipe',
    description: 'Soluciones especializadas para unión de tuberías',
    color: 'from-gray-400 to-gray-600',
  },
  {
    id: 4,
    title: 'Automotriz',
    icon: 'settings',
    description: 'Productos especializados para la industria automotriz',
    color: 'from-red-400 to-red-600',
  },
  {
    id: 5,
    title: 'Productos químicos auxiliares',
    icon: 'flask-conical',
    description: 'Auxiliares químicos para optimizar procesos industriales',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 6,
    title: 'Cementos de contacto',
    icon: 'paintbrush',
    description: 'Adhesivos de contacto para múltiples aplicaciones',
    color: 'from-orange-400 to-orange-600',
  },
]

export const carouselProducts: Product[] = [
  {
    id: 1,
    name: 'Resinas de poliéster',
    category: 'Resinas',
    type: 'Industrial',
    image: '/images/resinas-poliester.jpg',
    description: 'Resinas termoendurecibles de alta calidad',
  },
  {
    id: 2,
    name: 'Sistemas de poliuretano',
    category: 'Poliuretano',
    type: 'Flexible',
    image: '/images/poliuretano.jpg',
    description: 'Sistemas bicomponentes para diversas aplicaciones',
  },
  {
    id: 3,
    name: 'Soldaduras de PVC',
    category: 'Adhesivos',
    type: 'PVC',
    image: '/images/soldaduras-pvc.jpg',
    description: 'Soldaduras líquidas para unión permanente',
  },
  {
    id: 4,
    name: 'Automotriz',
    category: 'Automotriz',
    type: 'Industrial',
    image: '/images/automotriz.jpg',
    description: 'Productos especializados para el sector automotriz',
  },
  {
    id: 5,
    name: 'Barnices y lacas',
    category: 'Recubrimientos',
    type: 'Madera',
    image: '/images/barnices.jpg',
    description: 'Protección y acabado para superficies de madera',
  },
  {
    id: 6,
    name: 'Cementos de contacto',
    category: 'Adhesivos',
    type: 'Contacto',
    image: '/images/cementos.jpg',
    description: 'Adhesivos de contacto de secado rápido',
  },
]

export const technicalProducts: TechnicalProduct[] = [
  // Cementos de Contacto
  {
    id: 1,
    name: 'Cemento de Contacto Policloropreno Universal',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'UNIVERSAL / MULTIUSO',
    description: 'Adhesivo de contacto de alta resistencia para uso general',
  },
  {
    id: 2,
    name: 'Cemento Caucho Natural Universal',
    category: 'CEMENTOS DE CONTACTO',
    type: 'CAUCHO NATURAL',
    application: 'UNIVERSAL / MULTIUSO',
    description: 'Adhesivo base caucho natural para aplicaciones diversas',
  },
  {
    id: 3,
    name: 'Cemento PU Reactivo para Laminados',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'LAMINADOS & MDF',
    description: 'Adhesivo poliuretano especializado para laminados y MDF',
  },
  {
    id: 4,
    name: 'Cemento PU Reactivo Tapicería',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'TAPICERIA & ESPUMA',
    description: 'Adhesivo flexible para tapicería y espumas',
  },
  {
    id: 5,
    name: 'Cemento PU Reactivo Calzado',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'CALZADO',
    description: 'Adhesivo especializado para la industria del calzado',
  },
  {
    id: 555,
    name: 'Cemento de Contacto Policloropreno Reactivo',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLIURETANO REACTIVABLE',
    application: '',
    description: 'Adhesivo poliuretano especializado',
  },

  // Resinas de Poliéster
  {
    id: 6,
    name: 'Resina Tereftálica Premium',
    category: 'RESINAS DE POLIESTER',
    type: 'TEREFTALICA',
    application: '',
    description:
      'Resina tereftálica de alta calidad para aplicaciones exigentes',
  },
  {
    id: 7,
    name: 'Resina Ortoftálica Estándar',
    category: 'RESINAS DE POLIESTER',
    type: 'ORTOFTALICA',
    application: '',
    description: 'Resina ortoftálica para aplicaciones generales',
  },
  {
    id: 8,
    name: 'Resina Ortoftálica Tixotrópica',
    category: 'RESINAS DE POLIESTER',
    type: 'ORTOFTALICA TIXOTROPICA',
    application: '',
    description: 'Resina con propiedades tixotrópicas para aplicación vertical',
  },
  {
    id: 9,
    name: 'Resina para Masillas',
    category: 'RESINAS DE POLIESTER',
    type: 'ORTOFTALICA PARA MASILLAS',
    application: '',
    description: 'Resina especializada para formulación de masillas',
  },
  {
    id: 999,
    name: 'Resinas Auxiliares',
    category: 'RESINAS DE POLIESTER',
    type: 'AUXILIARES',
    application: '',
    description: 'Resina especializada para formulación de masillas',
  },
  {
    id: 10,
    name: 'Resina Isoftálica NPG',
    category: 'RESINAS DE POLIESTER',
    type: 'ISOFTALICA NPG',
    application: '',
    description: 'Resina isoftálica con neopentilglicol',
  },

  // Sistemas de Poliuretano
  {
    id: 11,
    name: 'Sistema PU Calzado Seguridad Compacto',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DE SEGURIDAD',
    application: 'COMPACTO',
    description: 'Sistema PU bicomponente para suelas compactas de seguridad',
  },
  {
    id: 12,
    name: 'Sistema PU Calzado Seguridad Expanso',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DE SEGURIDAD',
    application: 'EXPANSO',
    description: 'Sistema PU expandido para suelas ligeras de seguridad',
  },
  {
    id: 13,
    name: 'Sistema PU Calzado Dama',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DAMA',
    application: '',
    description: 'Sistema especializado para calzado femenino',
  },
  {
    id: 14,
    name: 'Sistema PU Plantillas Confort',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'PLANTILLAS',
    application: '',
    description: 'Sistema para plantillas de alta comodidad',
  },

  // Barnices y Selladores
  {
    id: 15,
    name: 'Barniz Natural Transparente',
    category: 'BARNICES Y SELLADORES PARA MADERA',
    type: 'BARNICES',
    application: 'NATURAL',
    description: 'Barniz transparente para acabado natural de madera',
  },
  {
    id: 16,
    name: 'Barniz Marino Protector',
    category: 'BARNICES Y SELLADORES PARA MADERA',
    type: 'BARNICES',
    application: 'MARINO',
    description: 'Barniz especial resistente a ambientes marinos',
  },
  {
    id: 17,
    name: 'Sellador Adhesivo Universal',
    category: 'BARNICES Y SELLADORES PARA MADERA',
    type: 'SELLADORES & ADHESIVOS',
    application: '',
    description: 'Sellador con propiedades adhesivas',
  },

  // Automotriz
  {
    id: 18,
    name: 'Fluido de Frenos DOT 3',
    category: 'AUTOMOTRIZ',
    type: 'FLUIDOS PARA FRENOS',
    application: 'DOT 3',
    description: 'Líquido de frenos certificación DOT 3',
  },
  {
    id: 19,
    name: 'Fluido de Frenos DOT 4',
    category: 'AUTOMOTRIZ',
    type: 'FLUIDOS PARA FRENOS',
    application: 'DOT 4',
    description: 'Líquido de frenos certificación DOT 4',
  },
  {
    id: 20,
    name: 'Fluido de Frenos DOT 5.1',
    category: 'AUTOMOTRIZ',
    type: 'FLUIDOS PARA FRENOS',
    application: 'DOT 5.1',
    description: 'Líquido de frenos alta performance DOT 5.1',
  },
  {
    id: 21,
    name: 'Desengrasante Industrial',
    category: 'AUTOMOTRIZ',
    type: 'DESENGRASANTES Y LIMPIEZA',
    application: '',
    description: 'Desengrasante de alta eficacia para limpieza industrial',
  },
  {
    id: 22,
    name: 'Fórmula Marina Anticorrosiva',
    category: 'AUTOMOTRIZ',
    type: 'FORMULA MARINA',
    application: '',
    description: 'Fórmula especial para protección en ambientes marinos',
  },
  {
    id: 23,
    name: 'Limpiador de Inyectores Premium',
    category: 'AUTOMOTRIZ',
    type: 'LIQUIDO LIMPIADOR DE INYECTORES',
    application: '',
    description: 'Limpiador especializado para sistemas de inyección',
  },
  {
    id: 24,
    name: 'Refrigerante Motor Universal',
    category: 'AUTOMOTRIZ',
    type: 'REFRIGERANTES',
    application: '',
    description: 'Refrigerante universal para sistemas de enfriamiento',
  },
  {
    id: 25,
    name: 'SAE 15W-40 Motor Gasolina',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'MOTORES GASOLINA',
    description: 'Aceite multigrado para motores gasolina',
  },
  {
    id: 26,
    name: 'SAE 20W-50 Motor Gasolina',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'MOTORES GASOLINA',
    description: 'Aceite alta viscosidad para motores gasolina',
  },
  {
    id: 27,
    name: 'SAE 15W-40 Motor Diesel',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'MOTORES DIESEL',
    description: 'Aceite especializado para motores diesel',
  },
  {
    id: 28,
    name: 'SAE 10W-30 Motor Diesel',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'MOTORES DIESEL',
    description: 'Aceite sintético para motores diesel modernos',
  },
  {
    id: 29,
    name: 'Aceite Hidráulico AW 32',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'HIDRAULICO AW',
    description: 'Aceite hidráulico anti-desgaste ISO 32',
  },
  {
    id: 30,
    name: 'Aceite Hidráulico AW 68',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'HIDRAULICO AW',
    description: 'Aceite hidráulico anti-desgaste ISO 68',
  },
  {
    id: 31,
    name: 'Aceite Transmisión ATF',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'TRANSMISIONES',
    description: 'Fluido para transmisiones automáticas',
  },
  {
    id: 32,
    name: 'Aceite Transmisión Manual SAE 80W-90',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'TRANSMISIONES',
    description: 'Aceite para cajas de cambios manuales',
  },
  {
    id: 33,
    name: 'Aceite Tractor Universal',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'TRACTORES',
    description: 'Aceite multifuncional para tractores',
  },
  {
    id: 34,
    name: 'Aceite Turbina ISO 32',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'TURBINA',
    description: 'Aceite especializado para turbinas industriales',
  },
  {
    id: 35,
    name: 'Aceite Corte Metales Soluble',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'CORTE DE METAL',
    description: 'Fluido de corte soluble para mecanizado',
  },
  {
    id: 36,
    name: 'Aceite Corte Metales Directo',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'CORTE DE METAL',
    description: 'Aceite de corte directo para operaciones de mecanizado',
  },
]
