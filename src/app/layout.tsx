import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Skranji } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['100','200', '300', '400', '700'] })
const skranji = Skranji({ subsets: ['latin'], weight: ['400','700'] })

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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
