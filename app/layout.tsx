import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://CandCStumpgrindingandmore.com'),
  title: 'Professional Stump Grinding in Orange & Lake County | C&C Stump Grinding',
  description: 'Expert stump grinding services in Orange County and Lake County, Florida. Licensed & insured. Fast service, competitive pricing. Free quote - Call 407-448-1647',
  keywords: ['stump grinding Orlando', 'stump removal Orange County', 'stump grinding Lake County', 'tree stump removal Florida', 'professional stump grinding'],
  alternates: {
    canonical: 'https://CandCStumpgrindingandmore.com',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Professional Stump Grinding in Orange & Lake County | C&C Stump Grinding',
    description: 'Expert stump removal & cleanup services. Licensed, insured, fast response. Serving Orange and Lake County. Free quote!',
    url: 'https://CandCStumpgrindingandmore.com',
    type: 'website',
    images: [
      {
        url: 'https://alyssa-personal.s3.us-east-1.amazonaws.com/vecteezy_large-tree-stump-in-summer-forest-tree-stump_3280061.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional tree stump grinding service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Stump Grinding in Orange & Lake County',
    description: 'Licensed & insured stump removal services. Call 407-448-1647 for a free quote.',
    images: ['https://alyssa-personal.s3.us-east-1.amazonaws.com/vecteezy_large-tree-stump-in-summer-forest-tree-stump_3280061.jpg'],
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
