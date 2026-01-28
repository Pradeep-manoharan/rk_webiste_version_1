import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../globals.css'

export const metadata = {
  title: 'Rathnakumar | RK - Data Science & AI Product Leader',
  description: 'EB1A Visa Recipient | AI & Data Science Expert | Product Leader at Fortune 500 Companies | Author | Patent Holder',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Curious Maverick inspired typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Fragment+Mono&family=Inter:wght@400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
