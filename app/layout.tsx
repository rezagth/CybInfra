import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cybiinfra.vercel.app'),
  title: {
    template: '%s | CybInfra',
    default: 'CybInfra | Sécurité et Stratégie Digitale',
  },
  description: 'CybInfra offre un accompagnement stratégique sur mesure, des solutions de cybersécurité robustes et une expertise en stratégie digitale pour transformer votre entreprise.',
  keywords: ['cybersécurité', 'transformation numérique', 'stratégie digitale', 'accompagnement', 'sécurité informatique'],
  authors: [{ name: 'CybInfra' }],
  creator: 'CybInfra',
  publisher: 'CybInfra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }
  ],
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
      url: 'https://cybiinfra.vercel.app',
      siteName: 'CybInfra',
    title: 'CybInfra | Sécurité et Stratégie Digitale',
    description: 'CybInfra offre un accompagnement stratégique sur mesure, des solutions de cybersécurité robustes et une expertise en stratégie digitale pour transformer votre entreprise.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CybInfra - Solutions de Cybersécurité',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CybInfra | Sécurité et Stratégie Digitale',
    description: 'CybInfra offre un accompagnement stratégique sur mesure, des solutions de cybersécurité robustes et une expertise en stratégie digitale pour transformer votre entreprise.',
    images: ['/og-image.jpg'],
    creator: '@CybInfra',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="cross-origin-opener-policy" content="same-origin" />
        <meta name="cross-origin-embedder-policy" content="require-corp" />
        <meta name="cross-origin-resource-policy" content="same-site" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400 700;
            font-display: swap;
            src: url('/fonts/inter-var.woff2') format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}