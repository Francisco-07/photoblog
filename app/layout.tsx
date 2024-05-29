import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './_components/Navbar'
import AppProvider from './AppProvider'
import Footer from './_sections/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'photoblog',
  description:
    'Descubre cómo nuestra agencia de marketing puede impulsar tu negocio hacia el éxito. Ofrecemos estrategias innovadoras, creatividad excepcional y resultados comprobados. ¡Contáctanos hoy para empezar a destacarte en el mercado!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' data-mui-color-scheme='light'>
      <body className={inter.className}>
        <AppProvider>
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
