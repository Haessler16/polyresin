'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
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

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const iconMap = {
  bottle: Package,
  footprints: Footprints,
  settings: Settings,
  'flask-conical': FlaskConical,
  paintbrush: Paintbrush,
}

export default function BusinessLines() {
  return (
    <section className='py-3 lg:py-5 bg-white'>
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

        {/* Swiper Carousel */}
        <section className='rrelative px-4 sm:px-8 lg:px-12'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className='business-lines-swiper'>
            {businessLines.map((line, index) => {
              const Icon = iconMap[line.icon as keyof typeof iconMap]

              return (
                <SwiperSlide key={line.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className='group h-full'>
                    <div className='relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden h-full'>
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
                    </div>
                  </motion.div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className='swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-opacity hover:opacity-80'>
            <div className='flex items-center justify-center w-10 h-10 bg-qp-green rounded-full shadow-lg'>
              <ArrowLeft className='text-white' size={24} />
            </div>
          </button>

          <button className='swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-opacity hover:opacity-80'>
            <div className='flex items-center justify-center w-10 h-10 bg-qp-green rounded-full shadow-lg'>
              <ArrowRight className='text-white' size={24} />
            </div>
          </button>

          {/* Custom Pagination */}
          <div className='swiper-pagination-custom flex justify-center gap-2 mt-8'></div>
        </section>

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

      <style jsx global>{`
        .business-lines-swiper {
          padding-bottom: 40px;
          width: 100%;
        }

        .swiper-pagination-custom {
          position: relative !important;
          bottom: 0 !important;
        }

        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #1aa737;
          width: 32px;
          border-radius: 4px;
        }

        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          display: none;
        }

        /* Mostrar navegación solo en desktop */
        @media (min-width: 768px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: flex;
          }
        }

        .swiper-button-prev-custom.swiper-button-disabled,
        .swiper-button-next-custom.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  )
}
