import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour GitHub Pages
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Configuration du basePath pour GitHub Pages
  // Décommentez et modifiez si votre repository n'est pas à la racine
  // basePath: '/nom-de-votre-repository',

  // Optimisation des performances
  compress: true,
  poweredByHeader: false,

  // Headers de sécurité
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Optimisation expérimentale
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
