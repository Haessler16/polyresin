import React from 'react'
import Image from 'next/image'

export function MaquilaSection() {
  return (
    <section className='bg-gradient-to-br from-green-50 to-white'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white rounded-2xl shadow-lg border-2 border-green-600 p-4 lg:p-6'>
          <h2 className='text-xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-0 text-center'>
            Servicio de{' '}
            <span className='text-green-600'>maquila automotriz</span>
          </h2>
          <div className='flex flex-row items-end gap-1 lg:gap-4'>
            {/* Contenido de texto */}
            <section className='flex-1 text-left'>
              <p className=' text-gray-700 text-sm lg:text-base leading-relaxed mb-3'>
                Batching, private label y soporte técnico integral en:
              </p>

              {/* Lista para desktop - bullet points */}
              <ul className=' text-gray-700 text-sm lg:text-base space-y-1 ml-4'>
                <li className='list-disc'>Refrigerantes.</li>
                <li className='list-disc'>Fluido para frenos.</li>
                <li className='list-disc'>Líquido para inyectores.</li>
                <li className='list-disc'>Desengrasantes, limpieza y más.</li>
              </ul>
            </section>

            {/* Imagen de productos - más grande en desktop */}
            <div className='flex-shrink-0'>
              <div className='w-32 h-32 lg:w-40 lg:h-40 relative'>
                <Image
                  src='/image/productos.png'
                  alt='Productos automotrices'
                  className='object-contain'
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
