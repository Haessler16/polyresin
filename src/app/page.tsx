import type { Metadata } from 'next'
import Script from 'next/script'

import Hero from '@/components/Hero'
import BusinessLines from '@/components/BusinessLines'

import { websiteUrl } from '@/constants/metadata'

export const metadata: Metadata = {
  title: 'Químicas Polyresin de Venezuela | Fichas técnicas y soluciones',
  description:
    'Fabricamos y distribuimos lubricantes, químicos automotrices, adhesivos, resinas poliéster, sistemas de poliuretano, barnices y selladores. Atención en Venezuela y Colombia.',

  alternates: { canonical: websiteUrl },
}

const org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Químicas Polyresin de Venezuela',
  url: websiteUrl,
  logo: `${websiteUrl}/assets/logo.jpeg`,
  brand: [
    { '@type': 'Brand', name: 'AUTOTEK' },
    { '@type': 'Brand', name: 'DURATEK' },
    { '@type': 'Brand', name: 'SUTEX' },
    { '@type': 'Brand', name: 'POLY' },
  ],
  areaServed: ['VE', 'CO'],
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: websiteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${websiteUrl}/productos?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id='ld-org'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />

      <Script
        id='ld-website'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <Hero />
      <BusinessLines />
    </>
  )
}
