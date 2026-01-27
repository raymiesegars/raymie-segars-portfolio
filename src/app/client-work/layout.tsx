export default function ClientWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Freelance Web Development Services',
    provider: {
      '@type': 'Person',
      name: 'Raymie Segars',
      email: 'raymievsegarsiv@gmail.com',
      telephone: '+18439058169',
      url: 'https://raymiesegars.com',
      jobTitle: 'Full-Stack Web Developer',
      sameAs: [
        'https://github.com/raymiesegars',
        'https://www.linkedin.com/in/raymie-segars/',
        'https://twitter.com/raymiesegarsiv',
        'https://linktr.ee/raymiesegars',
      ],
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: [
      'Web Development',
      'Full-Stack Development',
      'Custom Web Applications',
      '3D Web Development',
      'WebXR Development',
      'API Development',
      'Database Design',
    ],
    description: 'Freelance full-stack web developer available for projects. Specializing in Next.js, React, TypeScript, Three.js, and custom web applications.',
    url: 'https://raymiesegars.com/client-work',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
