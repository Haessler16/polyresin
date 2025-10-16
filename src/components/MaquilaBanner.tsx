import React from 'react'
import Image from 'next/image'

export function MaquilaSection() {
  return (
    <section className='pb-12 pt-0 lg:pb-16 lg:pt-8 bg-gradient-to-br from-green-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white rounded-2xl shadow-lg border-2 border-green-600 p-6 lg:p-8'>
          <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8'>
            {/* Icono/Logo */}
            <section className='flex-shrink-0'>
              <div className='w-14 h-14 lg:w-20 lg:h-20 bg-white border-2 border-green-600 rounded-xl flex items-center justify-center'>
                <span className='text-green-600 text-2xl font-bold'>GP</span>
              </div>
            </section>

            {/* Contenido de texto */}
            <section className='flex-1 text-center lg:text-left'>
              <h2 className='text-xl lg:text-3xl font-bold text-gray-900 mb-3'>
                Servicio de{' '}
                <span className='text-green-600'>maquila automotriz</span>
              </h2>
              <p className='text-gray-700 text-sm lg:text-lg leading-relaxed mb-2'>
                Batching, private label y soporte de llidad y cumplimiento.
              </p>
              <p className='text-gray-700 text-sm lg:text-lg leading-relaxed'>
                refrigerantes, fluído para frenos, liquido de inyectores,
                desengrasantes y limpeza y mas.
              </p>
            </section>

            {/* Imagen de productos */}
            <div className='flex-shrink-0'>
              <div className='w-28 h-28 lg:w-40 lg:h-40 relative'>
                <Image
                  src='/image/productos.png'
                  alt='Productos automotrices'
                  className='object-cover'
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
