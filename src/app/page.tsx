"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Globe,
  Smartphone,
  Server,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";

export default function Home() {
  const [currentYear, setCurrentYear] = useState(2024);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Masquer le curseur par défaut
    document.body.style.cursor = "none";

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  const features = [
    {
      icon: Code,
      title: "Développement Full-Stack",
      description:
        "Expertise en développement frontend et backend avec les technologies modernes. Spécialisé dans React, Next.js et Node.js.",
      gradient: "from-orange-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Applications Web Modernes",
      description:
        "Création d'applications web performantes et responsive avec une UX exceptionnelle. PWA, SPA et architectures modernes.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description:
        "Développement d'applications mobiles natives et cross-platform. React Native, Flutter et développement natif.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Infrastructure & DevOps",
      description:
        "Gestion d'infrastructure cloud, CI/CD, containerisation avec Docker et Kubernetes. Expertise en auto-hébergement.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-x-hidden">
      {/* Curseur personnalisé */}
      <CustomCursor mousePosition={mousePosition} />

      {/* Indicateur de progression de scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 transform-gpu z-50"
        style={{ scaleX: pathLength, transformOrigin: "0%" }}
      />

      {/* Background Effects */}
      <motion.div className="background-animation" style={{ y: yRange }} />
      <div className="grid-background"></div>

      {/* Floating Orbs animés */}
      <motion.div
        className="fixed top-20 left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="fixed bottom-20 right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Header animé */}
      <motion.header
        className="modern-header fixed top-0 left-0 right-0 z-40 p-2 sm:p-4 md:px-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="logo text-xl sm:text-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fontom&apos;s
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {[
              { href: "#home", label: "Accueil" },
              { href: "#projects", label: "Projets" },
              { href: "#expertise", label: "Expertise" },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav-link text-sm sm:text-base"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="https://cybercompanion.fr/"
              className="nav-link flex items-center gap-2 text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ y: 0, scale: 0.95 }}
            >
              CyberCompanion
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ExternalLink size={16} />
              </motion.div>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 p-4 bg-black/90 backdrop-blur-lg rounded-xl border border-white/10"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col gap-2">
                {[
                  { href: "#home", label: "Accueil" },
                  { href: "#projects", label: "Projets" },
                  { href: "#expertise", label: "Expertise" },
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="nav-link block py-2 px-3 rounded-lg text-center"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://cybercompanion.fr/"
                  className="nav-link flex items-center justify-center gap-2 py-2 px-3 rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                >
                  CyberCompanion
                  <ExternalLink size={16} />
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 relative z-10">
        {/* Hero Section */}
        <motion.section
          id="home"
          ref={heroRef}
          className="px-4 md:px-8 py-12 sm:py-16 md:py-20 text-center"
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h1
              className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={
                heroInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #ffffff, #ff7300, #ff00ff, #00d4ff, #ffffff)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="block sm:inline"
              >
                Salut 👋, moi c&apos;est
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0"
                initial={{ scale: 0.8, rotateX: -90 }}
                animate={
                  heroInView
                    ? { scale: 1, rotateX: 0 }
                    : { scale: 0.8, rotateX: -90 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Fontom&apos;s
              </motion.span>
            </motion.h1>

            <motion.p
              className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-light"
              initial={{ y: 50, opacity: 0 }}
              animate={
                heroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Développeur Full-Stack & Créateur d&apos;Expériences
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed px-4 sm:px-0"
              initial={{ y: 30, opacity: 0 }}
              animate={
                heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 1 }}
            >
              Passionné par l&apos;innovation technologique, je crée des
              applications web et mobiles modernes qui repoussent les limites de
              l&apos;expérience utilisateur. Créateur du bot{" "}
              <Link
                href="/projets"
                className="text-orange-500 font-semibold hover:text-orange-400 transition-colors underline decoration-orange-500/30 hover:decoration-orange-400"
              >
                CyberCompanion
              </Link>{" "}
              🤖
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0"
              initial={{ y: 30, opacity: 0 }}
              animate={
                heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link href="/projets" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button className="modern-button bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-black font-semibold px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto text-sm sm:text-base">
                    Découvrir mes projets
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="border-orange-500/50 hover:border-orange-400 text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 transition-all duration-300 px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto text-sm sm:text-base"
                  onClick={() =>
                    window.open(
                      "mailto:contact@fontoms.com?subject=Contact depuis le portfolio&body=Bonjour Fontom's,%0D%0A%0D%0AJe vous contacte depuis votre portfolio...",
                      "_blank"
                    )
                  }
                >
                  Me contacter
                </Button>
              </motion.div>
            </motion.div>

            {/* Indicateur de scroll */}
            <motion.div
              className="flex flex-col items-center mt-16"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-sm text-gray-400 mb-2">
                Scroll pour découvrir
              </p>
              <ChevronDown className="text-orange-500" size={24} />
            </motion.div>
          </div>
        </motion.section>

        {/* Projets Section */}
        <motion.section
          id="projects"
          ref={featuresRef}
          className="px-4 md:px-8 py-12 sm:py-16 md:py-20"
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={
                featuresInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Projets
                </span>
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
                initial={{ y: 30, opacity: 0 }}
                animate={
                  featuresInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Découvrez mes créations principales, des bots Discord aux
                communautés que j&apos;ai développées pour rassembler et aider
                les gens.
              </motion.p>
            </motion.div>

            {/* Aperçu des projets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                {
                  title: "CyberCompanion",
                  description:
                    "Bot Discord français nouvelle génération avec IA intégrée",
                  icon: "🤖",
                  stats: "65+ serveurs",
                  gradient: "from-blue-400 to-purple-500",
                  link: "https://cybercompanion.fr/",
                },
                {
                  title: "The Mechanic Community",
                  description:
                    "Communauté francophone dédiée à l'automobile et la mécanique",
                  icon: "🏎️",
                  stats: "Communauté active",
                  gradient: "from-orange-400 to-red-500",
                  link: "https://the-mechanic-community.fontoms.com",
                },
                {
                  title: "Ami en Tête",
                  description:
                    "Espace d'entraide bienveillant pour ceux qui se sentent seuls",
                  icon: "🤝",
                  stats: "Support 24/7",
                  gradient: "from-green-400 to-blue-500",
                  link: "https://ami-en-tete.fontoms.com",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 sm:p-6 group cursor-pointer mx-2 sm:mx-0"
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={
                    featuresInView
                      ? { y: 0, opacity: 1, scale: 1 }
                      : { y: 50, opacity: 0, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <motion.div
                    className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    {project.icon}
                  </motion.div>
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 sm:mb-4 text-center">
                    {project.description}
                  </p>
                  <div className="text-center">
                    <span
                      className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient}/20 border bg-clip-text text-transparent border-opacity-30`}
                      style={{
                        borderColor: project.gradient.includes("blue")
                          ? "#3b82f6"
                          : project.gradient.includes("orange")
                          ? "#f97316"
                          : "#10b981",
                      }}
                    >
                      {project.stats}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bouton vers la page projets complète */}
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={
                featuresInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/projets">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg flex items-center gap-3 mx-auto">
                    <Globe size={24} />
                    Voir plus de détails
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="expertise"
          className="px-4 md:px-8 py-20"
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={
                featuresInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Expertise Technique
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={
                featuresInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mes domaines de spécialisation technique
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 100, opacity: 0, rotateX: -15 }}
                  animate={
                    featuresInView
                      ? { y: 0, opacity: 1, rotateX: 0 }
                      : { y: 100, opacity: 0, rotateX: -15 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    rotateY: 2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="cursor-pointer"
                >
                  <Card className="feature-card glass-card p-8 group h-full">
                    <CardHeader className="text-center pb-6">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                      >
                        <feature.icon size={32} className="text-white" />
                      </motion.div>
                      <CardTitle className="text-white text-2xl font-bold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-center text-lg leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer animé */}
      <motion.footer
        className="modern-footer px-4 md:px-8 py-8 sm:py-12 mt-12 sm:mt-20"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <motion.a
                href="https://github.com/fontoms"
                className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-orange-500 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Github size={20} className="sm:size-6" />
                </motion.div>
                <span className="font-medium text-sm sm:text-base">GitHub</span>
              </motion.a>
              <motion.a
                href="mailto:contact@fontoms.com"
                className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-orange-500 transition-colors group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail size={20} className="sm:size-6" />
                </motion.div>
                <span className="font-medium text-sm sm:text-base">
                  Contact
                </span>
              </motion.a>
            </div>

            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-400 mb-2 text-sm sm:text-base">
                Développé avec ❤️ en France
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                © {currentYear} Fontom&apos;s. Tous droits réservés.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
