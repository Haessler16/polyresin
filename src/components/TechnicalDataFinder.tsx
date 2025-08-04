'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Download, Filter } from 'lucide-react'
import { technicalProducts } from '@/lib/data'

export default function TechnicalDataFinder() {
  const [selectedCategory, setSelectedCategory] = useState('Automotriz')
  const [selectedType, setSelectedType] = useState('Lubricantes')
  const [selectedEngine, setSelectedEngine] = useState('Motores gasolina')

  const categories = ['Automotriz', 'Industrial', 'Construcción']
  const types = ['Lubricantes', 'Adhesivos', 'Recubrimientos']
  const engines = ['Motores gasolina', 'Motores diesel', 'Motores híbridos']

  const filteredProducts = technicalProducts.filter(
    (product) =>
      product.category === selectedCategory && product.type === selectedType,
  )

  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            Buscador de <span className='text-qp-green'>fichas técnicas</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Encuentra la información técnica de nuestros productos de manera
            rápida y sencilla
          </p>
        </motion.div>

        {/* Search Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className='bg-gray-50 rounded-2xl p-8 mb-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-end'>
            {/* Category Filter */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                <Filter size={16} className='inline mr-1' />
                Categoría
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-qp-green focus:border-transparent transition-all duration-200'>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Tipo de producto
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className='w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-qp-green focus:border-transparent transition-all duration-200'>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Engine Filter */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Aplicación
              </label>
              <select
                value={selectedEngine}
                onChange={(e) => setSelectedEngine(e.target.value)}
                className='w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-qp-green focus:border-transparent transition-all duration-200'>
                {engines.map((engine) => (
                  <option key={engine} value={engine}>
                    {engine}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button className='w-full bg-qp-green text-white px-6 py-3 rounded-lg font-medium hover:bg-qp-green-dark transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105'>
                <Search size={18} />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group'>
              {/* Product Image */}
              <div className='relative h-48 bg-gradient-to-br from-qp-green/10 to-qp-green-dark/10'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-20 h-28 bg-white rounded-lg shadow-lg flex items-center justify-center relative'>
                    <div className='text-center'>
                      <div className='w-8 h-8 bg-qp-green rounded mx-auto mb-2 flex items-center justify-center'>
                        <span className='text-white text-xs font-bold'>QP</span>
                      </div>
                      <div className='text-xs text-gray-600 font-medium'>
                        {product.name.split(' ')[1]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className='p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-qp-green transition-colors duration-300'>
                  {product.name}
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  {product.description}
                </p>

                <div className='flex items-center justify-between'>
                  <div className='flex space-x-2'>
                    <span className='bg-qp-green/10 text-qp-green px-2 py-1 rounded-full text-xs font-medium'>
                      {product.category}
                    </span>
                    <span className='bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs'>
                      {product.type}
                    </span>
                  </div>

                  <button className='text-qp-green hover:text-qp-green-dark transition-colors duration-200 p-2 hover:bg-qp-green/10 rounded-lg'>
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-12'>
            <div className='text-gray-400 mb-4'>
              <Search size={48} className='mx-auto' />
            </div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              No se encontraron productos
            </h3>
            <p className='text-gray-600'>
              Intenta cambiar los filtros de búsqueda para encontrar más
              productos
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
