import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'C&C Stump Grinding and More- Licensed & Insured',
  description: 'Professional stump grinding, debris removal, and cleanup services in Orange and Lake County. Licensed and insured. Call 407-448-1647 for a free quote.',
  openGraph: {
    title: 'C&C Stump Grinding and More',
    description: 'Professional stump grinding services in Orange and Lake County',
    images: [
      {
        url: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
