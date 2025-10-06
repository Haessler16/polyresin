import TechnicalDataFinder from '@/components/TechnicalDataFinder'
import type { Metadata } from 'next'
import { websiteUrl } from '@/constants/metadata'

export const metadata: Metadata = {
  title: 'Buscador de fichas técnicas | Químicas Polyresin Venezuela',
  description:
    'Todas las fichas técnicas de lubricantes, químicos automotrices, adhesivos, resinas poliéster, sistemas de poliuretano, barnices y selladores. Proveedor en Venezuela y Colombia.',
  alternates: { canonical: `${websiteUrl}/productos` },
}

export default function ProductsPage() {
  return (
    <div className='pt-[6.5rem]'>
      <TechnicalDataFinder />
    </div>
  )
}
