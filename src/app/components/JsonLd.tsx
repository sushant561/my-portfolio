'use client';

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sushantbhagat.vercel.app",
    "name": "Sushant Bhagat",
    "givenName": "Sushant",
    "familyName": "Bhagat",
    "alternateName": ["sushant561", "sushantbhagat01", "sushant1864"],
    "description": "Full Stack Developer and Computer Science student at Delhi University (ARSD College)",
    "image": "https://sushantbhagat.vercel.app/images/new_sushant.jpg",
    "url": "https://sushantbhagat.vercel.app",
    "sameAs": [
      "https://github.com/sushant561",
      "https://www.linkedin.com/in/sushant-bhagat-9a3587329",
      "https://x.com/Sushant1864"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Atma Ram Sanatan Dharma College, Delhi University",
      "alternateName": "ARSD College"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "India"
    },
    "birthPlace": {
      "@type": "Place",
      "name": "Lohardaga, Jharkhand, India"
    },
    "knowsAbout": [
      "Full Stack Development",
      "React.js",
      "Next.js",
      "Python",
      "TypeScript",
      "Node.js"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
