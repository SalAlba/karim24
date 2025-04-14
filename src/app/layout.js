import { Inter } from 'next/font/google'
import { Cairo } from 'next/font/google'

import './globals.css'

// const inter = Inter({ subsets: ['latin', 'arabic'] })
const cairo = Cairo({ subsets: ['arabic', 'latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BankApp - Modern Banking Solution',
  description: 'A modern banking application for all your financial needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}