'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Factory } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='pt-16 bg-gradient-to-br from-green-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24'>
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
                className='mt-6 text-lg text-gray-600 leading-relaxed'>
                Químicas Polyresin, C.A, fundada en 1975, líder fabricación de
                resinas sintéticas y productos químicos auxiliares para los
                mercados nacional e internacional.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
              <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                <Factory className='mr-2 text-qp-green' size={24} />
                Nuestra visión
              </h3>
              <p className='text-gray-600 leading-relaxed mb-4'>
                Ser reconocidos como la empresa líder en innovación y calidad en
                el sector químico, proporcionando soluciones sostenibles que
                contribuyan al desarrollo industrial del país.
              </p>
              <Link
                href='/productos'
                className='inline-flex items-center text-qp-green font-medium hover:text-qp-green-dark transition-colors duration-200'>
                Explorar fichas técnicas
                <ArrowRight className='ml-2' size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'>
            <div className='relative overflow-hidden rounded-2xl shadow-2x'>
              <div className='aspect-w-16 aspect-h-12 bg-gradient-to-br from-qp-green to-qp-green-dark'>
                {/* Placeholder para imagen industrial */}
                <div className='flex items-center justify-center text-black'>
                  <div className='text-center'>
                    <img src='/fabrica.png' alt='fabrica' />
                    {/* <Factory size={64} className='mx-auto mb-4 opacity-80' />
                    <p className='text-lg font-medium'>Planta Industrial QP</p>
                    <p className='text-sm opacity-80'>
                      Desde 1975 proporcionando soluciones químicas
                    </p> */}
                  </div>
                </div>
              </div>

              {/* Overlay decorativo */}
              <div className='absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-lg p-3'>
                <p className='text-black text-sm font-medium'>Desde 1975</p>
                <p className='text-black/80 text-xs'>
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
