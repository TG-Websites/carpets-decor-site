import '@/assets/styles/app.css'

export const metadata = {
  title: 'Hand Craft',
  description: 'This is hand craft.',
  icons: {
    icon: '/favicon.png', // Make sure this file is placed in the /public folder
  },
}

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
