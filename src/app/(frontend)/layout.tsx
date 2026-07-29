import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../globals.css'
import { Inter, Lato, DM_Serif_Text } from 'next/font/google'

// Configure fonts using Next.js font optimization
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata = {
  title: 'Rathnakumar | RK - Data Science & AI Product Leader',
  description: 'EB1A Visa Recipient | AI & Data Science Expert | Product Leader at Fortune 500 Companies | Author | Patent Holder',
  icons: {
    icon: [
      { url: '/rk-favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/rk-favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/rk-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/rk-favicon-32.png',
    apple: [{ url: '/rk-apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${inter.variable} ${lato.variable} ${dmSerifText.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
