'use client'
import { useState, useEffect } from 'react'
import { Search, Download, Filter } from 'lucide-react'
import { filterData, technicalProducts, Category } from '@/lib/data'

export default function TechnicalDataFinder() {
  const [selectedCategory, setSelectedCategory] = useState<Category>()
  const [selectedType, setSelectedType] = useState('')
  const [selectedApplication, setSelectedApplication] = useState('')
  const [availableTypes, setAvailableTypes] = useState<string[]>([])
  const [availableApplications, setAvailableApplications] = useState<string[]>(
    [],
  )
  const [searchPerformed, setSearchPerformed] = useState(false)

  // Obtener categorías disponibles
  const categories = Object.keys(filterData)

  // Actualizar tipos disponibles cuando cambia la categoría
  useEffect(() => {
    if (selectedCategory) {
      const types = Object.keys(
        (filterData[selectedCategory] as unknown as Array<
          keyof (typeof filterData)[typeof selectedCategory]
        >) || {},
      )
      setAvailableTypes(types)
      setSelectedType('')
      setSelectedApplication('')
      setAvailableApplications([])
    } else {
      setAvailableTypes([])
      setSelectedType('')
      setSelectedApplication('')
      setAvailableApplications([])
    }
  }, [selectedCategory])

  // Actualizar aplicaciones disponibles cuando cambia el tipo
  useEffect(() => {
    if (selectedCategory && selectedType) {
      const applications =
        ((filterData[selectedCategory] as unknown as readonly string[])[
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          selectedType as any
        ] as unknown as readonly string[]) || []
      setAvailableApplications(applications as string[])
      setSelectedApplication('')
    } else {
      setAvailableApplications([])
      setSelectedApplication('')
    }
  }, [selectedCategory, selectedType])

  const handleSearch = () => {
    setSearchPerformed(true)
  }

  const filteredProducts = technicalProducts.filter((product) => {
    if (!searchPerformed) return false

    let matches = true

    if (selectedCategory && product.category !== selectedCategory) {
      matches = false
    }

    if (selectedType && product.type !== selectedType) {
      matches = false
    }

    if (selectedApplication && product.application !== selectedApplication) {
      matches = false
    }

    return matches
  })

  return (
    <section className='h-screen py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            Buscador de <span className='text-green-600'>fichas técnicas</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Encuentra la información técnica de nuestros productos de manera
            rápida y sencilla
          </p>
        </div>

        {/* Search Filters */}
        <div className='bg-gray-50 rounded-2xl p-8 mb-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end'>
            {/* Category Filter */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                <Filter size={16} className='inline mr-1' />
                Categoría Principal
              </label>
              <select
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as Category)
                }
                className='w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'>
                <option value=''>Seleccionar categoría...</option>
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
                Tipo de Producto
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                disabled={!selectedCategory}
                className='w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed'>
                <option value=''>
                  {selectedCategory
                    ? 'Seleccionar tipo...'
                    : 'Primero selecciona una categoría'}
                </option>
                {availableTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Application Filter */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Aplicación
              </label>
              <select
                value={selectedApplication}
                onChange={(e) => setSelectedApplication(e.target.value)}
                disabled={!selectedType || availableApplications.length === 0}
                className='w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed'>
                <option value=''>
                  {availableApplications.length === 0
                    ? selectedType
                      ? 'Sin aplicaciones específicas'
                      : 'Selecciona tipo primero'
                    : 'Seleccionar aplicación...'}
                </option>
                {availableApplications.map((application) => (
                  <option key={application} value={application}>
                    {application}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button
                onClick={handleSearch}
                disabled={!selectedCategory}
                className='w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg'>
                <Search size={18} />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {searchPerformed && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group'
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}>
                {/* Product Image */}
                <div className='relative h-48 bg-gradient-to-br from-green-50 to-green-100'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-20 h-28 bg-white rounded-lg shadow-lg flex items-center justify-center relative'>
                      <div className='text-center'>
                        <div className='w-8 h-8 bg-green-600 rounded mx-auto mb-2 flex items-center justify-center'>
                          <span className='text-white text-xs font-bold'>
                            QP
                          </span>
                        </div>
                        <div className='text-xs text-gray-600 font-medium'>
                          {product.name.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300'>
                    {product.name}
                  </h3>
                  <p className='text-gray-600 text-sm mb-4'>
                    {product.description}
                  </p>

                  <div className='space-y-2 mb-4'>
                    <div className='flex flex-wrap gap-1'>
                      <span className='bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium'>
                        {product.category}
                      </span>
                      {product.type && (
                        <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium'>
                          {product.type}
                        </span>
                      )}
                      {product.application && (
                        <span className='bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium'>
                          {product.application}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='text-sm text-gray-500'>
                      Ficha técnica disponible
                    </div>
                    <button className='text-green-600 hover:text-green-700 transition-colors duration-200 p-2 hover:bg-green-50 rounded-lg'>
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No results message */}
        {searchPerformed && filteredProducts.length === 0 && (
          <div className='text-center py-12'>
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
          </div>
        )}

        {/* Initial state message */}
        {!searchPerformed && (
          <div className='text-center py-12'>
            <div className='text-gray-400 mb-4'>
              <Filter size={48} className='mx-auto' />
            </div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              Selecciona los filtros y presiona buscar
            </h3>
            <p className='text-gray-600'>
              Utiliza los filtros de arriba para encontrar los productos que
              necesitas
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
