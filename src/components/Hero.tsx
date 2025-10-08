'use client'
import { motion } from 'framer-motion'
// import { Factory } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
// import entrada from '/image/entrada.jpeg'
// import fabrica from '/image/fabrica.jpeg'
// import person from '/image/person.jpeg'
// import planta from '/image/planta.jpeg'
// import potes from '/image/potes.jpeg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export default function Hero() {
  const images = [
    { src: '/image/planta.jpeg', alt: 'Planta Industrial' },
    { src: '/image/entrada.jpeg', alt: 'Entrada QuÃ­micas Polyresin' },
    { src: '/image/potes.jpeg', alt: 'Productos QuÃ­micas Polyresin' },
    { src: '/image/fabrica.jpeg', alt: 'FÃ¡brica QuÃ­micas Polyresin' },
    { src: '/image/person.jpeg', alt: 'Equipo QuÃ­micas Polyresin' },
  ]

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

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'>
            <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect='fade'
                fadeEffect={{ crossFade: true }}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: '.hero-swiper-pagination',
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className='hero-swiper aspect-w-16 aspect-h-12'>
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className='relative w-full h-[400px] lg:h-[500px]'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className='object-cover'
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination */}
              <div className='hero-swiper-pagination absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2'></div>

              {/* Overlay decorativo */}
              <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 z-10'>
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

      <style jsx global>{`
        .hero-swiper {
          border-radius: 1rem;
        }

        .hero-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.7;
          transition: all 0.3s;
        }

        .hero-swiper-pagination .swiper-pagination-bullet-active {
          background: #1aa737;
          opacity: 1;
          width: 32px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  )
}
