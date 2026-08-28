import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#ffffff',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#030305',
    },
  ],

  width: 'device-width',

  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),

  title: 'Varad Wakarekar — Software Developer Portfolio',

  description:
    'Full-stack software developer specializing in React, Next.js, Node.js, PostgreSQL, and AI-powered applications.',

  keywords: [
    'Varad Wakarekar',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Portfolio',
    'TypeScript',
    'Node.js',
    'AI Developer',
  ],

  authors: [
    {
      name: 'Varad Wakarekar',
    },
  ],

  creator: 'Varad Wakarekar',

  openGraph: {
    title: 'Varad Wakarekar — Software Engineer',

    description:
      'Personal portfolio showcasing full-stack applications, projects, experience, and certifications.',

    type: 'website',

    locale: 'en_US',

    siteName: 'Varad Wakarekar Portfolio',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Varad Wakarekar — Software Developer',

    description:
      'Personal portfolio showcasing full-stack applications, projects, experience, and certifications.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}