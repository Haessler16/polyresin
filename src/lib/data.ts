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
  code: string
  category: string
  type: string
  application: string
  pdfFile: string
  badges: string[]
  image?: string
  description: string
}

// Datos de filtros organizados jerárquicamente basados en el Excel
export const filterData = {
  'CEMENTOS DE CONTACTO': {
    POLICLOROPRENO: [
      'UNIVERSAL / MULTIUSO',
      'LAMINADOS & MDF',
      'TAPICERIA & ESPUMA',
      'CALZADO',
    ],
    'CAUCHO NATURAL': [],
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

// Líneas de negocio actualizadas - eliminando "Soldaduras de PVC" (son parte de Productos auxiliares)
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
    title: 'Automotriz',
    icon: 'settings',
    description: 'Productos especializados para la industria automotriz',
    color: 'from-red-400 to-red-600',
  },
  {
    id: 4,
    title: 'Productos auxiliares',
    icon: 'flask-conical',
    description: 'Auxiliares químicos para optimizar procesos industriales',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 5,
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
    name: 'Automotriz',
    category: 'Automotriz',
    type: 'Industrial',
    image: '/images/automotriz.jpg',
    description: 'Productos especializados para el sector automotriz',
  },
  {
    id: 4,
    name: 'Barnices y lacas',
    category: 'Recubrimientos',
    type: 'Madera',
    image: '/images/barnices.jpg',
    description: 'Protección y acabado para superficies de madera',
  },
  {
    id: 5,
    name: 'Cementos de contacto',
    category: 'Adhesivos',
    type: 'Contacto',
    image: '/images/cementos.jpg',
    description: 'Adhesivos de contacto de secado rápido',
  },
]

// Productos técnicos actualizados con datos reales del Excel
export const technicalProducts: TechnicalProduct[] = [
  // CEMENTOS DE CONTACTO - POLICLOROPRENO
  {
    id: 1,
    name: 'DURATEK D10',
    code: 'D10',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'UNIVERSAL / MULTIUSO',
    pdfFile:
      'cementos/duratek-d10-adhesivo-policloropreno-universal-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de policloropreno universal; alto agarre inicial y secado rápido para muebles y reparaciones.',
  },
  {
    id: 2,
    name: 'DURATEK S-350',
    code: 'S-350',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'UNIVERSAL / MULTIUSO',
    pdfFile:
      'cementos/duratek-S-350-adhesivo-policloropreno-universal-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de policloropreno multiuso; amplio margen de tiempo para posicionar y alinear las piezas antes de unirlas, con gran versatilidad de sustratos.',
  },
  {
    id: 3,
    name: 'DURATEK D20',
    code: 'D20',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'LAMINADOS & MDF',
    pdfFile:
      'cementos/duratek-d20-adhesivo-policloropreno-universal-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de policloropreno para laminados/MDF; mayor tiempo abierto para alineación precisa.',
  },
  {
    id: 4,
    name: 'DURATEK D30',
    code: 'D30',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'LAMINADOS & MDF',
    pdfFile:
      'cementos/duratek-d30-adhesivo-policloropreno-universal-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de policloropreno alta viscosidad; mejor resistencia térmica en carpintería pesada.',
  },
  {
    id: 5,
    name: 'DURATEK SPRAY HS',
    code: 'SPRAY HS',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'LAMINADOS & MDF',
    pdfFile:
      'cementos/duratek-spray-hs-adhesivo-policloropreno-spray-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de policloropreno para aplicación a pistola; cobertura uniforme y productividad.',
  },
  {
    id: 6,
    name: 'DURATEK S-1200',
    code: 'S-1200',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'LAMINADOS & MDF',
    pdfFile:
      'cementos/duratek-s-1200-adhesivo-policloropreno-solidos-altos-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de policloropreno de sólidos altos; amplio tiempo abierto, pegado muy fuerte en laminados especiales.',
  },
  {
    id: 7,
    name: 'DURATEK S-100',
    code: 'S-100',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'TAPICERIA & ESPUMA',
    pdfFile:
      'cementos/duratek-s-100-adhesivo-policloropreno-felixible-tapiceria-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de policloropreno flexible; fraguado rápido en tapicería, espuma, cuero y vinil.',
  },
  {
    id: 8,
    name: 'DURATEK S-500',
    code: 'S-500',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'CALZADO',
    pdfFile:
      'cementos/duratek-s500-adhesivo-policloropreno-calzado-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de policloropreno para calzado; alta adhesión y resistencia a humedad en suelas.',
  },
  {
    id: 9,
    name: 'DURATEK S-600',
    code: 'S-600',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLICLOROPRENO',
    application: 'CALZADO',
    pdfFile:
      'cementos/duratek-s600-adhesivo-policloropreno-calzado-extra-fuerte-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de policloropreno extra-fuerte; montado de suelas de cuero/goma para trabajo pesado.',
  },

  // CEMENTOS DE CONTACTO - CAUCHO NATURAL
  {
    id: 10,
    name: 'SUTEX-240',
    code: 'SUTEX-240',
    category: 'CEMENTOS DE CONTACTO',
    type: 'CAUCHO NATURAL',
    application: '',
    pdfFile:
      'cementos/sutex-240-adhesivo-caucho-natural-translucido-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo de caucho natural translúcido; tack inmediato y reposicionable para artes gráficas.',
  },

  // CEMENTOS DE CONTACTO - POLIURETANO REACTIVABLE
  {
    id: 11,
    name: 'SUTEX S-2800',
    code: 'S-2800',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLIURETANO REACTIVABLE',
    application: '',
    pdfFile:
      'cementos/sutex-s-2800-adhesivo-pu-reactivable-monocomponente-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo PU reactivable monocomponente; reactivación térmica y alta resistencia en suelas.',
  },
  {
    id: 12,
    name: 'SUTEX TPU-630',
    code: 'TPU-630',
    category: 'CEMENTOS DE CONTACTO',
    type: 'POLIURETANO REACTIVABLE',
    application: '',
    pdfFile:
      'cementos/sutex-tpu-630-adhesivo-pu-reactivable-monocomponente-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo PU reactivable; monocomponente, opción de endurecedor para curado veloz en calzado técnico.',
  },

  // RESINAS DE POLIESTER
  {
    id: 13,
    name: 'POLY-3711N',
    code: 'POLY-3711N',
    category: 'RESINAS DE POLIESTER',
    type: 'TEREFTALICA',
    application: '',
    pdfFile:
      'poliester/poly-3711n-resina-poliester-tereftalica-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Resina tereftálica no pre-acelerada; baja viscosidad para laminados FRP de uso general.',
  },
  {
    id: 14,
    name: 'POLY-3705N',
    code: 'POLY-3705N',
    category: 'RESINAS DE POLIESTER',
    type: 'ORTOFTALICA',
    application: '',
    pdfFile:
      'poliester/poly-3705n-resina-poliester-ortoftalica-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Resina ortoftálica no pre-acelerada; rígida y de buena humectación para carrocerías y lanchas.',
  },
  {
    id: 15,
    name: 'POLY-3751',
    code: 'POLY-3751',
    category: 'RESINAS DE POLIESTER',
    type: 'ORTOFTALICA TIXOTROPICA',
    application: '',
    pdfFile:
      'poliester/poly-3751-resina-poliester-ortoftalica-tixotropica-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Resina ortoftálica tixotrópica pre-acelerada; no escurre y favorece laminados verticales/spray-up.',
  },
  {
    id: 16,
    name: 'POLY-3703S',
    code: 'POLY-3703S',
    category: 'RESINAS DE POLIESTER',
    type: 'ORTOFTALICA PARA MASILLAS',
    application: '',
    pdfFile:
      'poliester/poly-3703s-resina-poliester-ortoftalica-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Resina ortoftálica para masillas; base de body-filler catalizado con BPO para reparación automotriz.',
  },
  {
    id: 17,
    name: 'POLY-3808',
    code: 'POLY-3808',
    category: 'RESINAS DE POLIESTER',
    type: 'ISOFTALICA NPG',
    application: '',
    pdfFile:
      'poliester/poly-3808-resina-poliester-iso-npg-gel-coat-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Resina ISO-NPG; brillo y resistencia UV para gel-coats náuticos y sanitarios.',
  },
  {
    id: 18,
    name: 'POLY-3809',
    code: 'POLY-3809',
    category: 'RESINAS DE POLIESTER',
    type: 'ISOFTALICA NPG',
    application: '',
    pdfFile: 'poliester/poly-3809-resina-poliester-iso-npg-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Resina ISO-NPG; mayor resistencia química para FRP de alto desempeño y tanques.',
  },
  {
    id: 19,
    name: 'POLY-7010',
    code: 'POLY-7010',
    category: 'RESINAS DE POLIESTER',
    type: 'AUXILIARES',
    application: '',
    pdfFile: 'poliester/poly-7010-solvente-lavapoliester-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Solvente lavapoliéster; reduce viscosidad y limpia pistolas/herramientas.',
  },

  // SISTEMAS DE POLIURETANO - CALZADO DE SEGURIDAD
  {
    id: 20,
    name: 'POLYRESIN P340-M902',
    code: 'P340-M902',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DE SEGURIDAD',
    application: 'COMPACTO',
    pdfFile:
      'poliuretano/polyresin-p340-m902-sistema-pu-compacto-suela-seguridad-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema compacto para suela de seguridad; desmolde rápido y alta dureza.',
  },
  {
    id: 21,
    name: 'POLYRESIN M902S',
    code: 'M902S',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DE SEGURIDAD',
    application: 'COMPACTO',
    pdfFile:
      'poliuretano/polyresin-p340-m902s-sistema-pu-compacto-suela-seguridad-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema compacto para suela de seguridad; optimizado en fluidez/proporción para inyección estable.',
  },
  {
    id: 22,
    name: 'POLYRESIN M903S',
    code: 'M903S',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DE SEGURIDAD',
    application: 'COMPACTO',
    pdfFile:
      'poliuretano/polyresin-p340-m903s-sistema-pu-compacto-suela-seguridad-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema compacto para suela de seguridad; formulado para ciclos cortos en producción.',
  },
  {
    id: 23,
    name: 'POLYRESIN P340-M856',
    code: 'P340-M856',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DE SEGURIDAD',
    application: 'EXPANSO',
    pdfFile:
      'poliuretano/polyresin-p340-m856-sistema-pu-expanso-suela-seguridad-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema expanso lineal para suela/entresuela de seguridad; baja densidad y buen rebote.',
  },
  {
    id: 24,
    name: 'POLYRESIN M855S',
    code: 'M855S',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DE SEGURIDAD',
    application: 'EXPANSO',
    pdfFile:
      'poliuretano/polyresin-p340-m855s-sistema-pu-expanso-suela-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema expanso lineal para suela/entresuela; ligero, de gran amortiguación y buen rebote para confort prolongado.',
  },

  // SISTEMAS DE POLIURETANO - OTROS
  {
    id: 25,
    name: 'POLYRESIN P367-M134-4318',
    code: 'P367-M134-4318',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DAMA',
    application: '',
    pdfFile:
      'poliuretano/polyresin-p367-m134-4318-sistema-pu-microcelular-suela-dama-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema microcelular para suela dama; ultraligero y de acabado fino.',
  },
  {
    id: 26,
    name: 'POLYRESIN P367E-M1005-4320',
    code: 'P367E-M1005-4320',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO DAMA',
    application: '',
    pdfFile:
      'poliuretano/polyresin-p367-m1005-4320-sistema-pu-microcelular-suela-dama-ficha-tecnica-es-ve',
    badges: [],
    description: 'Sistema microcelular para suela dama; ligero y acabado fino.',
  },
  {
    id: 27,
    name: 'POLYRESIN P353-M1004-4320',
    code: 'P353-M1004-4320',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'CALZADO CASUAL',
    application: '',
    pdfFile:
      'poliuretano/polyresin-p353-m1004-4320-sistema-pu-suela-casual-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema lineal monodensidad para suela casual; proceso simple y balance confort/dureza.',
  },
  {
    id: 28,
    name: 'POLYRESIN P4352-4320',
    code: 'P4352-4320',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'PLANTILLAS',
    application: '',
    pdfFile:
      'poliuretano/polyresin-p4352-4320-sistema-pu-espuma-flexible-plantillas-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema de espuma flexible para plantillas; gran amortiguación y resiliencia.',
  },
  {
    id: 29,
    name: 'POLYRESIN P4354-4320',
    code: 'P4354-4320',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'PLANTILLAS',
    application: '',
    pdfFile:
      'poliuretano/polyresin-p4354-4320-sistema-pu-espuma-flexible-plantillas-entresuelas-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema de espuma flexible para plantillas entresuelas; confort prolongado en uso diario.',
  },
  {
    id: 30,
    name: 'POLYRESIN P4354-4318',
    code: 'P4354-4318',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'ASIENTOS',
    application: '',
    pdfFile:
      'poliuretano/polyresin-p4354-4318-sistema-pu-espuma-asientos-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sistema HR (alta resiliencia) para sillines/asientos; confort y recuperación rápida.',
  },
  {
    id: 31,
    name: 'POLYRESIN PREPOLÍMERO 4320',
    code: 'PREPOLIMERO 4320',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'PREPOLIMEROS DE FORMULACION',
    application: '',
    pdfFile:
      'poliuretano/polyresin-prepolimero-4320-isocianato-para-formulacion-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Prepolímero isocianato para formulación; base de sistemas compactos/expansos.',
  },
  {
    id: 32,
    name: 'POLYRESIN PREPOLÍMERO 4318',
    code: 'PREPOLIMERO 4318',
    category: 'SISTEMAS DE POLIURETANO',
    type: 'PREPOLIMEROS DE FORMULACION',
    application: '',
    pdfFile:
      'poliuretano/polyresin-prepolimero-4318-isocianato-para-formulacion-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Prepolímero isocianato para formulación (suela dama); %NCO y viscosidad controlados.',
  },

  // BARNICES Y SELLADORES PARA MADERA
  {
    id: 33,
    name: 'DURATEK DBNB',
    code: 'DBNB',
    category: 'BARNICES Y SELLADORES PARA MADERA',
    type: 'BARNICES',
    application: 'NATURAL',
    pdfFile:
      'barnices/duratek-dbnb-barniz-natural-brillante-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Barniz natural brillante alquídico; realza la veta y protege interiores con acabado espejo.',
  },
  {
    id: 34,
    name: 'DURATEK DBSR',
    code: 'DBSR',
    category: 'BARNICES Y SELLADORES PARA MADERA',
    type: 'BARNICES',
    application: 'NATURAL',
    pdfFile:
      'barnices/duratek-dbsr-barniz-natural-brillante-secado-rapido-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Barniz natural brillante alquídico; secado rápido para repinte ágil en líneas productivas.',
  },
  {
    id: 35,
    name: 'DURATEK DBMN',
    code: 'DBMN',
    category: 'BARNICES Y SELLADORES PARA MADERA',
    type: 'BARNICES',
    application: 'MARINO',
    pdfFile:
      'barnices/duratek-dbmn-barniz-marino-brillante-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Barniz marino brillante fenólico; alta resistencia UV/agua para exteriores y ebanistería náutica.',
  },
  {
    id: 36,
    name: 'DURATEK DSL-3001',
    code: 'DSL-3001',
    category: 'BARNICES Y SELLADORES PARA MADERA',
    type: 'SELLADORES & ADHESIVOS',
    application: '',
    pdfFile:
      'barnices/duratek-dsl-3001-sellador-celulosico-listo-para-usar-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Sellador celulósico listo para usar; seca en minutos y se lija fácil para cerrar poro.',
  },
  {
    id: 37,
    name: 'DURATEK DCB',
    code: 'DCB',
    category: 'BARNICES Y SELLADORES PARA MADERA',
    type: 'SELLADORES & ADHESIVOS',
    application: '',
    pdfFile:
      'barnices/duratek-dcb-adhesivo-pva-cola-blanca-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Adhesivo PVA base agua ("cola blanca"); transparente al curar y de uso versátil en madera/papel.',
  },
  {
    id: 38,
    name: 'DURATEK W380',
    code: 'W380',
    category: 'BARNICES Y SELLADORES PARA MADERA',
    type: 'REMOVEDORES',
    application: '',
    pdfFile:
      'barnices/duratek-w380-removedor-de-pinturas-gel-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Removedor en gel/pasta; decapa esmaltes y barnices con acción rápida para restauración.',
  },

  // AUTOMOTRIZ - FLUIDOS PARA FRENOS
  {
    id: 39,
    name: 'AUTOTEK W1200',
    code: 'W1200',
    category: 'AUTOMOTRIZ',
    type: 'FLUIDOS PARA FRENOS',
    application: 'DOT 3',
    pdfFile: 'autotek/autotek-w1200-liquido-frenos-dot3-ficha-tecnica-es-ve',
    badges: ['DOT-3'],
    description:
      'DOT-3 Fluido sintético para frenos hidráulicos; brinda punto de ebullición adecuado y protección de sellos.',
  },
  {
    id: 40,
    name: 'AUTOTEK W1300',
    code: 'W1300',
    category: 'AUTOMOTRIZ',
    type: 'FLUIDOS PARA FRENOS',
    application: 'DOT 4',
    pdfFile: 'autotek/autotek-w1300-liquido-frenos-dot4-ficha-tecnica-es-ve',
    badges: ['DOT-4'],
    description:
      'DOT-4 Fluido sintético para frenos hidráulicos; mayor resistencia a "vapor lock" y desempeño en ABS/ESP.',
  },
  {
    id: 41,
    name: 'AUTOTEK W1500',
    code: 'W1500',
    category: 'AUTOMOTRIZ',
    type: 'FLUIDOS PARA FRENOS',
    application: 'DOT 5.1',
    pdfFile: 'autotek/autotek-w1500-liquido-frenos-dot5.1-ficha-tecnica-es-ve',
    badges: ['DOT-5.1'],
    description:
      'DOT-5.1 Fluido sintético para frenos hidráulicos; baja viscosidad a frío y respuesta rápida en uso severo.',
  },

  // AUTOMOTRIZ - DESENGRASANTES Y LIMPIEZA
  {
    id: 42,
    name: 'AUTOTEK W0115',
    code: 'W0115',
    category: 'AUTOMOTRIZ',
    type: 'DESENGRASANTES Y LIMPIEZA',
    application: '',
    pdfFile:
      'autotek/autotek-w0115-desengrasante-base-agua-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Desengrasante base agua multiusos; limpia rápido sin residuos en motores y superficies.',
  },
  {
    id: 43,
    name: 'AUTOTEK POLY-590',
    code: 'POLY-590',
    category: 'AUTOMOTRIZ',
    type: 'DESENGRASANTES Y LIMPIEZA',
    application: '',
    pdfFile:
      'autotek/autotek-poly-590-desengrasante-dielectrico-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Desengrasante dieléctrico; evapora rápido y no humedece componentes eléctricos.',
  },
  {
    id: 44,
    name: 'AUTOTEK RUG-2070',
    code: 'RUG-2070',
    category: 'AUTOMOTRIZ',
    type: 'DESENGRASANTES Y LIMPIEZA',
    application: '',
    pdfFile: 'autotek/autotek-rug-2070-limpiador-textiles-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Limpiador espumoso para textiles; remueve manchas y renueva tapicerías y alfombras.',
  },
  {
    id: 45,
    name: 'AUTOTEK W321',
    code: 'W321',
    category: 'AUTOMOTRIZ',
    type: 'DESENGRASANTES Y LIMPIEZA',
    application: '',
    pdfFile:
      'autotek/autotek-w321-limpiador-descarbonzante-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Limpiador–desengrasante–descarbonizante; remueve barnices y aceite quemado de piezas metálicas.',
  },

  // AUTOMOTRIZ - FORMULA MARINA
  {
    id: 46,
    name: 'AUTOTEK LW-4000',
    code: 'LW-4000',
    category: 'AUTOMOTRIZ',
    type: 'FORMULA MARINA',
    application: '',
    pdfFile: 'autotek/autotek-lw-4000-formula-marina-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Formula marina. Lubricante anticorrosivo multipropósito; desplaza humedad y protege en ambientes salinos.',
  },

  // AUTOMOTRIZ - LÍQUIDO LIMPIADOR DE INYECTORES
  {
    id: 47,
    name: 'AUTOTEK ULTRASONIC-2000',
    code: 'ULTRASONIC-2000',
    category: 'AUTOMOTRIZ',
    type: 'LIQUIDO LIMPIADOR DE INYECTORES',
    application: '',
    pdfFile:
      'autotek/autotek-ultrasonic-2000-limpiador-inyectores-banco-ultrasonido-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Líquido para limpieza en banco/ultrasonido; despega lacas y uniformiza el patrón de inyección. Extra-fuerte removedor de carbonilla.',
  },
  {
    id: 48,
    name: 'AUTOTEK WF-2000',
    code: 'WF-2000',
    category: 'AUTOMOTRIZ',
    type: 'LIQUIDO LIMPIADOR DE INYECTORES',
    application: '',
    pdfFile:
      'autotek/autotek-wf-2000-limpiador-inyectores-aditivo-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Limpiador de inyectores concentrado; descarboniza sin desmontar y mejora ralentí/consumo. Incrementa el octanaje.',
  },

  // AUTOMOTRIZ - REFRIGERANTES
  {
    id: 49,
    name: 'AUTOTEK W5050',
    code: 'W5050',
    category: 'AUTOMOTRIZ',
    type: 'REFRIGERANTES',
    application: '',
    pdfFile:
      'autotek/autotek-w5050-refrigerante-oat-prediluido-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Refrigerante OAT prediluido 50/50; recomendado para cualquier tipo de motor.',
  },
  {
    id: 50,
    name: 'AUTOTEK W1010',
    code: 'W1010',
    category: 'AUTOMOTRIZ',
    type: 'REFRIGERANTES',
    application: '',
    pdfFile:
      'autotek/autotek-w1010-refrigerante-oat-prediluido-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Refrigerante OAT prediluido listo para usar; larga vida útil y protección contra la oxidación.',
  },

  // AUTOMOTRIZ - LUBRICANTES MOTORES GASOLINA
  {
    id: 51,
    name: 'AUTOTEK SAE 15W-40 SN',
    code: 'SAE 15W-40 SN',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'MOTORES GASOLINA',
    pdfFile:
      'autotek/autotek-aceite-sae-15w40-sn-semisintetico-ficha-tecnica-ve',
    badges: ['SAE 15W-40', 'API SN', 'Semi-sintético'],
    description: 'Aceite para motor gasolina; SAE 15W-40 SN.',
  },
  {
    id: 52,
    name: 'AUTOTEK SAE 15W-40 API SN',
    code: 'SAE 15W-40 API SN',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'MOTORES GASOLINA',
    pdfFile: 'autotek/autotek-aceite-sae-15w40-api-sn-mineral-ficha-tecnica-ve',
    badges: ['SAE 15W-40', 'API SN', 'Mineral'],
    description:
      'Aceite mineral multigrado para motor gasolina; SAE 15W-40 API SN.',
  },
  {
    id: 53,
    name: 'AUTOTEK SAE 20W-50 SN',
    code: 'SAE 20W-50 SN',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'MOTORES GASOLINA',
    pdfFile: 'autotek/autotek-aceite-mineral-sae-20w50-sn-ficha-tecnica-ve',
    badges: ['SAE 20W-50', 'API SN', 'Mineral'],
    description:
      'Aceite mineral multigrado para motor gasolina; SAE 20W-50 SN.',
  },

  // AUTOMOTRIZ - LUBRICANTES MOTORES DIESEL
  {
    id: 54,
    name: 'AUTOTEK SAE 15W-40 DIESEL',
    code: 'SAE 15W-40',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'MOTORES DIESEL',
    pdfFile: 'autotek/autotek-aceite-diesel-sae-15w40-ficha-tecnica-ve',
    badges: ['SAE 15W-40'],
    description:
      'Aceite multigrado para motor diésel; SAE 15W-40. Maneja hollín y sostiene película lubricante bajo carga.',
  },
  {
    id: 55,
    name: 'AUTOTEK SAE 20W-50 DIESEL',
    code: 'SAE 20W-50',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'MOTORES DIESEL',
    pdfFile: 'autotek/autotek-aceite-diesel-sae-20w50-ficha-tecnica-ve',
    badges: ['SAE 20W-50'],
    description: 'Aceite para motor diésel; SAE 20W-50. Monogrado.',
  },

  // AUTOMOTRIZ - LUBRICANTES HIDRÁULICO AW
  {
    id: 56,
    name: 'AUTOTEK AW-22',
    code: 'AW-22',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'HIDRAULICO AW',
    pdfFile: 'autotek/autotek-aw-22-aceite-hidraulico-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Aceite hidráulico AW-22; cuenta con propiedades antidesgaste, antispumante, antioxidante y demulsificantes.',
  },
  {
    id: 57,
    name: 'AUTOTEK AW-68',
    code: 'AW-68',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'HIDRAULICO AW',
    pdfFile:
      'autotek/autotek-aw-68-aceite-hidraulico-iso-vg-68-ficha-tecnica-es-ve',
    badges: [],
    description:
      'Aceite hidráulico AW-68; cuenta con propiedades antidesgaste, antispumante, antioxidante y demulsificantes.',
  },

  // AUTOMOTRIZ - LUBRICANTES TRANSMISIONES
  {
    id: 58,
    name: 'AUTOTEK DEXRON III',
    code: 'FLUIDO A.T.F',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'TRANSMISIONES',
    pdfFile: 'autotek/autotek-dexron-iii-fluido-atf-ficha-tecnica-es-ve',
    badges: ['DEXRON III', 'MERCON FORD', 'COVENIN 899-3'],
    description:
      'Fluido para transmisiones automáticas; cambios suaves y fricción controlada.',
  },
  {
    id: 59,
    name: 'AUTOTEK GL5',
    code: 'TRANSMISION GL5',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'TRANSMISIONES',
    pdfFile:
      'autotek/autotek-gl5-aceite-transmision-api-gl5-80w90-ficha-tecnica-es-ve',
    badges: ['API MT-1', 'API GL5', 'MACK GOH', 'mil L-21050', 'COVENIN 987-2'],
    description: 'Aceite para transmisiones manuales;SAE 80W90 / 85W140',
  },

  // AUTOMOTRIZ - LUBRICANTES TRACTORES
  {
    id: 60,
    name: 'AUTOTEK LUBRICANTE TRACTORES',
    code: 'ACEITE LUBRICANTE TRACTORES',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'TRACTORES',
    pdfFile: 'autotek/autotek-lubricante-tractores-ficha-tecnica-ve',
    badges: [],
    description:
      'Aceite para sistemas hidráulicos de tractores. Mezcla de bases minerales y packing de aditivos de alta calidad.',
  },

  // AUTOMOTRIZ - LUBRICANTES TURBINA
  {
    id: 61,
    name: 'AUTOTEK ACEITE TURBINAS',
    code: 'TURBO',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'TURBINA',
    pdfFile: 'autotek/autotek-aceite-turbinas-ficha-tecnica-ve',
    badges: [],
    description:
      'Aceite para cojinetes y turbinas; alta estabilidad oxidativa y térmica.',
  },

  // AUTOMOTRIZ - LUBRICANTES CORTE DE METAL
  {
    id: 62,
    name: 'AUTOTEK FLUIDO SOLUBLE',
    code: 'SOLUBLE',
    category: 'AUTOMOTRIZ',
    type: 'LUBRICANTES',
    application: 'CORTE DE METAL',
    pdfFile: 'autotek/autotek-fluido-soluble-mecanizado-ficha-tecnica-ve',
    badges: [],
    description:
      'Fluido soluble para mecanizado; protege y mejora acabado en metales. Libre de nitritos, fenoles y cloro.',
  },
]
