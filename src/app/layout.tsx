import '@/assets/styles/app.css'
import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export const metadata = {
  title: 'Carpet Decor',
  description: 'This is Carpet Decor.',
  icons: {
    icon: '/fabicon3.png', // Make sure this file is placed in the /public folder
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
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919354715556"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-1/2 right-6 -translate-y-1/2 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-200 border-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform duration-200"
            >
              <path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.482 1.342 4.988l-1.414 5.179 5.308-1.396c1.463.803 3.104 1.227 4.761 1.227 5.523 0 9.997-4.474 9.997-9.997s-4.474-9.998-9.997-9.998zm0 18.001c-1.523 0-3.012-.393-4.312-1.137l-.308-.176-3.154.83.838-3.088-.2-.317c-.823-1.304-1.263-2.803-1.263-4.313 0-4.411 3.587-7.998 7.999-7.998s7.999 3.587 7.999 7.998-3.587 7.999-7.999 7.999zm4.601-6.197c-.252-.126-1.492-.736-1.722-.82-.23-.084-.398-.126-.567.126-.168.252-.651.82-.799.988-.147.168-.294.189-.546.063-.252-.126-1.065-.393-2.029-1.252-.75-.668-1.257-1.492-1.404-1.744-.147-.252-.016-.388.111-.514.114-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.567-1.371-.777-1.877-.205-.492-.414-.424-.567-.432l-.483-.009c-.168 0-.441.063-.672.315-.231.252-.882.861-.882 2.099s.903 2.434 1.029 2.604c.126.168 1.779 2.719 4.317 3.703.604.207 1.075.331 1.443.423.606.145 1.158.125 1.594.076.486-.057 1.492-.609 1.704-1.197.21-.588.21-1.092.147-1.197-.063-.105-.231-.168-.483-.294z"/>
            </svg>
          </span>
          <span className="absolute right-0 -top-9 bg-black text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs whitespace-nowrap mr-2">
            Chat on WhatsApp
          </span>
        </a>
        <Footer />
      </body>
    </html>
  )
}
