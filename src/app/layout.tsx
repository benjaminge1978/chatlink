import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChatLink — Simple Video Calls for Creators',
  description: 'Host paid, time‑boxed video calls. Share a link and start earning.',
  metadataBase: new URL(process.env.APP_URL || 'http://localhost:3000'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-brand px-3 py-2 rounded">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}

