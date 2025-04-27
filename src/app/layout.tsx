import '@/assets/styles/app.css'
import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export const metadata = {
  title: 'Hand Craft',
  description: 'This is hand craft.',
  icons: {
    icon: '/favicon.png', // Make sure this file is placed in the /public folder
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
