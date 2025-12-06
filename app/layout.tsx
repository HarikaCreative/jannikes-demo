import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Jannikes Catering | Fargerik mat, varme mennesker, kreative opplevelser',
  description: 'Sesongbasert catering, yoga og retreat chef i Asker. Fra kreative cateringmenyer til helhetlige retreat-opplevelser – mat som kunst.',
  keywords: 'catering, yoga, retreat chef, Asker, Norge, vegansk mat, artful balance, kreativ mat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${playfair.variable} ${lato.variable}`}>
      <body className={lato.className}>{children}</body>
    </html>
  )
}
