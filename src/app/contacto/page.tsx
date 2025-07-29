import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - QP Químicas Polyresin',
  description:
    'Ponte en contacto con nosotros. Estamos aquí para ayudarte con tus consultas.',
}

export default function ContactPage() {
  return (
    <div className='pt-16'>
      <ContactForm />
    </div>
  )
}
