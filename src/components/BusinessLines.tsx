'use client'
// import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Slider, { Settings as SettingsSlick } from 'react-slick'
import Link from 'next/link'
import {
  Package,
  Footprints,
  Settings,
  FlaskConical,
  Paintbrush,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import { businessLines } from '@/lib/data'

const iconMap = {
  bottle: Package,
  footprints: Footprints,
  settings: Settings,
  'flask-conical': FlaskConical,
  paintbrush: Paintbrush,
}

export default function BusinessLines() {
  interface ArrowProps {
    className?: string
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<SVGSVGElement>
  }

  function NextArrow(props: ArrowProps) {
    const { className, style, onClick } = props
    return (
      <ArrowRight
        size={30}
        className={className}
        style={{
          ...style,
          display: 'block',
          background: '#1aa737',
          borderRadius: '50%',
          padding: '2px',
          color: 'white',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          marginRight: '10px',
        }}
        onClick={onClick}
      />
    )
  }

  function PrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props
    return (
      <ArrowLeft
        size={30}
        className={className}
        style={{
          ...style,
          display: 'block',
          background: '#1aa737',
          borderRadius: '50%',
          padding: '2px',
          color: 'white',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          marginLeft: '10px',
        }}
        onClick={onClick}
      />
    )
  }
  const settings: SettingsSlick = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    centerPadding: '60px',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className='py-16 lg:py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            Líneas de <span className='text-qp-green'>negocio</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Ofrecemos una amplia gama de productos químicos especializados para
            diversas industrias y aplicaciones.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <Slider {...settings}>
          {businessLines.map((line, index) => {
            const Icon = iconMap[line.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className='group px-4'>
                <div className='relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden'>
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${line.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${line.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className='text-white' size={32} />
                  </div>

                  {/* Content */}
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-qp-green transition-colors duration-300'>
                    {line.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {line.description}
                  </p>

                  {/* Hover indicator */}
                  <div className='absolute bottom-4 right-4 w-8 h-8 bg-qp-green rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300'>
                    <svg
                      className='w-4 h-4 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </Slider>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-16'>
          <Link href='/productos'>
            <button className='bg-qp-green text-white px-8 py-3 rounded-full font-medium hover:bg-qp-green-dark transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
              Navegar por las fichas técnicas de nuestros productos
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
