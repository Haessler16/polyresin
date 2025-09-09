import TechnicalDataFinder from '@/components/TechnicalDataFinder'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos - QP Químicas Polyresin',
  description:
    'Explora nuestro catálogo de productos químicos y descarga fichas técnicas.',
}

export default function ProductsPage() {
  return (
    <div className='pt-[6.5rem]'>
      <TechnicalDataFinder />
    </div>
  )
}
