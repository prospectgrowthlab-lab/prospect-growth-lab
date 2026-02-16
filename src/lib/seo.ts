import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://prospect-growth-lab.vercel.app';
const SITE_NAME = 'Prospect Growth Lab';
const TWITTER_HANDLE = '@prospectgrowthlab'; // Update when you create Twitter account

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
}

export function generateSEO({
  title,
  description,
  path = '',
  image = '/og-image.png',
  keywords = [],
  type = 'website',
  publishedTime,
  authors = ['Louis Wand'],
}: SEOProps): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  // Default keywords for all pages
  const defaultKeywords = [
    'LinkedIn automation',
    'LinkedIn outbound',
    'B2B lead generation',
    'sales automation',
    'AimFox',
    'LinkedIn prospecting',
    'outbound sales',
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: authors.map(name => ({ name })),
    creator: 'Louis Wand',
    publisher: SITE_NAME,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: TWITTER_HANDLE,
      images: [image],
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
  };

  return metadata;
}

// Schema.org markup generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Done-for-you LinkedIn outbound automation for mid-market companies.',
    founder: {
      '@type': 'Person',
      name: 'Louis Wand',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressLocality: 'Sydney',
    },
    sameAs: [
      // Add your social profiles when created
      // 'https://www.linkedin.com/company/prospect-growth-lab',
      // 'https://twitter.com/prospectgrowthlab',
    ],
  };
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'LinkedIn Outbound Automation',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    serviceType: 'B2B Lead Generation',
    description: 'Done-for-you LinkedIn outbound automation and prospecting service',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '597',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '597',
        priceCurrency: 'USD',
        billingIncrement: 1,
        unitText: 'MONTH',
      },
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
  authorName = 'Louis Wand',
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  modifiedTime?: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}
