import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Iqrom Abadi — Mobile Engineer | Building Scalable Mobile Products',
  description:
    'Mobile Engineer specializing in Flutter, Clean Architecture, Real-Time Systems, and Enterprise Mobile Applications. Building scalable mobile products for Android and iOS.',
  keywords: [
    'Mobile Engineer',
    'Flutter Developer',
    'Enterprise Mobile Applications',
    'Clean Architecture',
    'Real-Time Systems',
    'Android',
    'iOS',
    'Iqrom Abadi',
  ],
  authors: [{ name: 'Iqrom Abadi' }],
  openGraph: {
    title: 'Iqrom Abadi — Mobile Engineer | Building Scalable Mobile Products',
    description: 'Mobile Engineer specializing in Flutter, Clean Architecture, and Enterprise Mobile Applications.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}
