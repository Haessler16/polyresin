'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const certifications = [
    'ISO9001',
    'ASTM',
    'INAQL',
    'Autoluk',
    'Marca 2',
    'Marca 3',
  ]

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='col-span-1 md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-10 h-10 bg-qp-green rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>QP</span>
              </div>
              <div>
                <div className='text-lg font-bold'>QUÍMICAS POLYRESIN</div>
                <div className='text-xs text-gray-400'>C.A.</div>
              </div>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Desde 1975 liderando la fabricación de resinas sintéticas y
              productos químicos auxiliares para los mercados nacional e
              internacional.
            </p>

            {/* Certifications */}
            <div>
              <h4 className='text-sm font-semibold text-gray-200 mb-3'>
                Certificaciones
              </h4>
              <div className='flex flex-wrap gap-2'>
                {certifications.map((cert, index) => (
                  <span
                    key={cert}
                    className='bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300 border border-gray-700'>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className='text-lg font-semibold mb-4'>Enlaces rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-300 hover:text-qp-green transition-colors duration-200'>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href='/productos'
                  className='text-gray-300 hover:text-qp-green transition-colors duration-200'>
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href='/contacto'
                  className='text-gray-300 hover:text-qp-green transition-colors duration-200'>
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-qp-green transition-colors duration-200'>
                  Dirección
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-qp-green transition-colors duration-200'>
                  Responsabilidad
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-qp-green transition-colors duration-200'>
                  Temas legales
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='border-t border-gray-800 mt-12 pt-8 text-center'>
          <p className='text-gray-400 text-sm'>
            © {currentYear} Químicas Polyresin, C.A. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
