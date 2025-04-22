// app/layout.tsx
import './globals.css'
import { Montserrat, Poppins } from 'next/font/google'

const roboto = Montserrat({
  subsets: ['latin'],
  weight: ['500'], // for headings
  variable: '--font-roboto',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Next.js Todo App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
