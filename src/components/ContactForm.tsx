'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react'

interface FormData {
  name: string
  company: string
  product: string
  amount: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    product: '',
    amount: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!formData.company.trim())
      newErrors.company = 'La empresa/cargo es requerido'
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          company: '',
          product: '',
          amount: '',
          message: '',
        })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        console.error('Error al enviar el formulario:', data.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error al enviar el formulario:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className='py-16 lg:py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            <span className='text-qp-green'>Contáctanos</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos
            a la brevedad.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <form
              onSubmit={handleSubmit}
              className='bg-white rounded-2xl shadow-lg p-8'>
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
                  <p className='text-green-700 font-medium'>
                    ¡Mensaje enviado correctamente! Nos pondremos en contacto
                    contigo pronto.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg'>
                  <p className='text-red-700 font-medium'>
                    Hubo un error al enviar el mensaje. Por favor, intenta
                    nuevamente.
                  </p>
                </motion.div>
              )}

              <div className='space-y-6'>
                {/* Name Field */}
                <section>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'>
                    Nombre *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      errors.name
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-qp-green focus:border-qp-green'
                    }`}
                    placeholder='Tu nombre completo'
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-sm text-red-600'>
                      {errors.name}
                    </motion.p>
                  )}
                </section>

                {/* Empresa / Cargo Field */}
                <section>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-gray-700 mb-2'>
                    Empresa / Cargo *
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      errors.company
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-qp-green focus:border-qp-green'
                    }`}
                    placeholder='Nombre de tu empresa o cargo'
                  />
                  {errors.company && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-sm text-red-600'>
                      {errors.company}
                    </motion.p>
                  )}
                </section>

                {/* Product Interest Field */}
                <section>
                  <label
                    htmlFor='product'
                    className='block text-sm font-medium text-gray-700 mb-2'>
                    Producto de interés
                  </label>
                  <select
                    id='product'
                    name='product'
                    value={formData.product}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-qp-green focus:border-qp-green transition-all duration-200'>
                    <option value=''>Selecciona un producto</option>
                    <option value='resinas-poliester'>
                      Resinas de poliéster
                    </option>
                    <option value='sistemas-poliuretano'>
                      Sistemas de poliuretano
                    </option>
                    <option value='soldaduras-pvc'>Soldaduras de PVC</option>
                    <option value='automotriz'>Automotriz</option>
                    <option value='productos-quimicos'>
                      Productos químicos auxiliares
                    </option>
                    <option value='cementos-contacto'>
                      Cementos de contacto
                    </option>
                  </select>
                </section>

                {/* Amount Field */}
                <section>
                  <label
                    htmlFor='amount'
                    className='block text-sm font-medium text-gray-700 mb-2'>
                    Cantidad
                  </label>
                  <input
                    type='text'
                    id='amount'
                    name='amount'
                    value={formData.amount}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-qp-green focus:border-qp-green transition-all duration-200'
                    placeholder='Ej: 100 kg, 50 litros, etc.'
                  />
                </section>

                {/* Message Field */}
                <section>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'>
                    Mensaje *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg transition-all text-black duration-200 resize-none ${
                      errors.message
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-qp-green focus:border-qp-green'
                    }`}
                    placeholder='Cuéntanos sobre tu proyecto o consulta...'
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-sm text-red-600'>
                      {errors.message}
                    </motion.p>
                  )}
                </section>

                {/* Submit Button */}
                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-qp-green hover:bg-qp-green-dark text-white shadow-lg hover:shadow-xl'
                  }`}>
                  {isSubmitting ? (
                    <>
                      <div className='animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent'></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='space-y-8'>
            {/* Offices */}
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <h3 className='text-xl font-semibold text-gray-900 mb-6 flex items-center'>
                <Building2 className='mr-3 text-qp-green' size={24} />
                Estamos ubicados en:
              </h3>

              <div className='space-y-6'>
                <div>
                  <p className='text-gray-600 flex items-start'>
                    <MapPin
                      className='mr-2 text-qp-green mt-1 flex-shrink-0'
                      size={16}
                    />
                    Prolongación Av. Bolívar, Sector el Cerrito, a 800 mts del
                    Terminal de Pasajeros, Vía Rangel, Ocumare del Tuy, Zona
                    Postal 1209, Estado Miranda
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                Información de contacto
              </h3>

              <div className='space-y-4'>
                <div className='flex items-center'>
                  <Phone className='mr-3 text-qp-green' size={20} />
                  <span className='text-gray-600'>+58 424.237.8867</span>
                </div>

                <div className='flex items-center'>
                  <Mail className='mr-3 text-qp-green' size={20} />
                  <span className='text-gray-600'>
                    ventas@quimicaspolyresin.com
                  </span>
                </div>

                <div className='flex items-center'>
                  <Clock className='mr-3 text-qp-green' size={20} />
                  <span className='text-gray-600'>L-V 8:00 - 17:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
