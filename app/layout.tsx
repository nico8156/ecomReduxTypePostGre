import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ReduxProvider } from './../redux/reduxProvider'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nico Store',
  description: 'Find the best tech products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body className={inter.className}>
        <ReduxProvider>
            <div className="flex flex-col justify-between h-screen w-screen lg:px-10 md:px-10 text-black">
              <Navbar />
              {children}
              <Footer />
            </div>
        </ReduxProvider>   
      </body>
    </html>
  )
}
