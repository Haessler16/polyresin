import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QP Químicas Polyresin - Líder en Resinas y Productos Químicos',
  description:
    'Químicas Polyresin C.A, fundada en 1975, líder en fabricación de resinas sintéticas y productos químicos auxiliares para mercados nacional e internacional.',
  keywords: 'resinas, poliéster, poliuretano, químicos, Venezuela, industria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
