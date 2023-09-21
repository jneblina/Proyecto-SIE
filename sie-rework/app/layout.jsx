import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SIE Rework',
  description: 'Rework de la pagina del SIE del ITE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>

        <main className='w-screen h-screen'>{children}</main>
        </body>
    </html>
  )
}
