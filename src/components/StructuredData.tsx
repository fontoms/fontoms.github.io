import Script from "next/script";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fontom's",
    alternateName: "Fontoms",
    description:
      "Développeur Full-Stack passionné par l'innovation technologique et créateur d'expériences numériques",
    url: "https://fontoms.com",
    image: "https://fontoms.com/og-image.jpg",
    sameAs: ["https://github.com/fontoms", "https://cybercompanion.fr/"],
    jobTitle: "Développeur Full-Stack",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Python",
      "Discord Bots",
      "Web Development",
      "Mobile Development",
      "DevOps",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Développement Full-Stack",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Développement d'applications web",
          description: "Création d'applications web modernes et performantes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Développement de bots Discord",
          description:
            "Création de bots Discord personnalisés avec IA intégrée",
        },
      },
    ],
    creator: [
      {
        "@type": "SoftwareApplication",
        name: "CyberCompanion",
        description:
          "Bot Discord français nouvelle génération avec IA intégrée",
        url: "https://cybercompanion.fr/",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Discord",
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
