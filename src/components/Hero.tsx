'use client'
import { motion } from 'framer-motion'
import { Factory } from 'lucide-react'

export default function Hero() {
  return (
    <section className='pt-24 bg-gradient-to-br from-green-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 lg:py-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                Quiénes <span className='text-qp-green'>somos</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className='mt-6 text-sm md:text-lg text-gray-600 leading-relaxed'>
                Desde <b>1975</b>, en{' '}
                <span className='text-qp-green font-bold'>
                  {' '}
                  Químicas Polyresin, C.A.
                </span>{' '}
                diseñamos y fabricamos{' '}
                <b>
                  resinas de poliéster insaturado, adhesivos, sistemas de
                  poliuretano, lubricantes automotrices e industriales, barnices
                  y selladores para madera, y más productos químicos auxiliares
                </b>{' '}
                para impulsar la industria en general.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className='mt-4 text-sm md:text-lg text-gray-600 leading-relaxed'>
                Contamos con ingeniería de formulación y sistemas de control de
                calidad respaldados por normas específicas nacionales e
                internacionales.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className='mt-4 text-sm md:text-lg text-gray-600 leading-relaxed'>
                <strong className='text-qp-green '>Nuestra Misión</strong> es{' '}
                <b>
                  fabricar y suministrar soluciones químicas confiables que
                  faciliten la producción de nuestros clientes
                </b>
                , integrando diseño de formulaciones, control de calidad y
                documentación técnica clara.{' '}
                <strong className='text-qp-green '>Nuestra Visión</strong> es
                impulsar estándares superiores de calidad y seguridad,
                garantizando procesos confiables y relaciones de largo plazo con
                nuestros clientes.
              </motion.p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'>
            <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
              <div className='aspect-w-16 aspect-h-12 bg-gradient-to-br from-qp-green to-qp-green-dark'>
                {/* Placeholder para nueva imagen industrial */}
                <div className='flex items-center justify-center text-white'>
                  <div className='text-center'>
                    <img
                      src='/fabrica_vintage.png'
                      alt='Planta Químicas Polyresin'
                      className='w-full h-full object-cover'
                      loading='lazy'
                    />
                    <div style={{ display: 'none' }} className='p-8'>
                      <Factory size={64} className='mx-auto mb-4 opacity-80' />
                      <p className='text-lg font-medium'>
                        Planta Industrial QP
                      </p>
                      <p className='text-sm opacity-80'>
                        Desde 1975 proporcionando soluciones químicas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay decorativo */}
              <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3'>
                <p className='text-qp-green text-sm font-medium'>Desde 1975</p>
                <p className='text-gray-700 text-xs'>
                  proporcionando soluciones químicas
                </p>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className='absolute -top-4 -left-4 w-24 h-24 bg-qp-green/20 rounded-full blur-xl'></div>
            <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-qp-green/10 rounded-full blur-xl'></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
