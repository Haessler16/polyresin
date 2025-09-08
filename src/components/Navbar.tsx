'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import img from '../../public/logo.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-white/95'
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <Image src={img} alt='empresa con su nombre' width={80} />
            {/* <div className='w-10 h-10 bg-qp-green rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>QP</span>
            </div>
            <div className='hidden sm:block'>
              <div className='text-lg font-bold text-gray-900'>QUÍMICAS</div>
              <div className='text-xs text-gray-600 -mt-1'>POLYRESIN</div>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-qp-green px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                  pathname === item.href ? 'text-qp-green' : ''
                }`}>
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-qp-green transition-all duration-300 ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden relative z-50'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 hover:text-qp-green p-2 relative'>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm'
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-white border-t relative z-50 shadow-xl rounded-lg'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-qp-green bg-gray-50'
                      : 'text-gray-700 hover:text-qp-green hover:bg-gray-50'
                  }`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
