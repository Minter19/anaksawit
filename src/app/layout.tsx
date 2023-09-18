import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'

const inter = Poppins({ subsets: ['latin'], weight: ['200', '400', '700'] })

export const metadata: Metadata = {
  title: 'Anak Sawit',
  description: 'Web for introducing palm variates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
