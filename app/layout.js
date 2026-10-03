import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig, person, social } from '@/data/profile';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${person.name}`,
  },
  description: siteConfig.description,
  canonical: siteConfig.url,
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
    type: 'profile',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: person.name,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${person.name} — ${person.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  authors: [{ name: person.name, url: siteConfig.url }],
  creator: person.name,
  keywords: [
    'Nafis Sadik',
    'Technology Specialist',
    'Media Specialist',
    'SaaS Development',
    'Artificial Intelligence',
    'TechDoor LLC',
    'Dhaka Bangladesh',
    'Digital Products',
    'Computer Science',
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: `${person.name} — ${person.title}`,
      description: siteConfig.description,
      mainEntity: { '@id': `${siteConfig.url}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: person.name,
      url: siteConfig.url,
      jobTitle: person.title,
      description: siteConfig.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhaka',
        addressCountry: 'BD',
      },
      affiliation: {
        '@type': 'Organization',
        name: 'TechDoor LLC',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Southeast University',
      },
      knowsAbout: [
        'SaaS Development',
        'Artificial Intelligence',
        'Technology',
        'Media',
        'Computer Science',
        'Digital Products',
      ],
      sameAs: [
        social.linkedin,
        social.facebook,
        social.instagram,
        social.github,
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: person.name,
      description: siteConfig.description,
      author: { '@id': `${siteConfig.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Noise texture overlay — purely decorative */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
