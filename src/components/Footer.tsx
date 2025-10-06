'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='col-span-1 md:col-span-1'>
            <div className='flex items-center space-x-3 mb-6'>
              {/* Logo real - placeholder por ahora */}
              <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2'>
                <img
                  src='/logo.jpeg'
                  alt='Químicas Polyresin Logo'
                  className='w-full h-full object-contain'
                  // onError={(e) => {
                  //   // Fallback al logo actual si no encuentra la imagen
                  //   e.currentTarget.style.display = 'none';
                  //   e.currentTarget.nextElementSibling.style.display = 'flex';
                  // }}
                />
                <div
                  style={{ display: 'none' }}
                  className='w-full h-full bg-qp-green rounded flex items-center justify-center'>
                  <span className='text-white font-bold text-lg'>QP</span>
                </div>
              </div>
              <div>
                <div className='text-lg font-bold'>QUÍMICAS POLYRESIN</div>
                <div className='text-xs text-gray-400'>C.A.</div>
              </div>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Desde 1975 liderando la fabricación de resinas sintéticas y
              productos químicos auxiliares para el mercado nacional e
              internacional.
            </p>
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

          {/* Dirección */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className='text-lg font-semibold mb-4'>Dirección</h3>
            <div className='text-gray-300 leading-relaxed text-sm'>
              <p>Prolongación Av. Bolívar, Sector el Cerrito,</p>
              <p>a 800 mts del Terminal de Pasajeros,</p>
              <p>Vía Rangel, Ocumare del Tuy,</p>
              <p>Zona Postal 1209, Estado Miranda</p>
            </div>
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
