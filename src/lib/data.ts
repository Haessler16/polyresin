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

export const technicalProducts: Product[] = [
  {
    id: 1,
    name: 'SAE 15W-40 SN Semisintético',
    category: 'Automotriz',
    type: 'Lubricantes',
    image: '/images/sae-15w40-sn.jpg',
    description: 'Aceite semisintético para motores',
  },
  {
    id: 2,
    name: 'SAE 20W-50 SN Mineral',
    category: 'Automotriz',
    type: 'Lubricantes',
    image: '/images/sae-20w50-sn.jpg',
    description: 'Aceite mineral de alta viscosidad',
  },
  {
    id: 3,
    name: 'SAE 15W-40 API SN Mineral',
    category: 'Automotriz',
    type: 'Lubricantes',
    image: '/images/sae-15w40-api.jpg',
    description: 'Aceite mineral certificado API SN',
  },
]
