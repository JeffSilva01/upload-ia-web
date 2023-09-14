import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uploading IA | <NLW/> IA',
  description: 'Projeto da NLW feito pela Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
