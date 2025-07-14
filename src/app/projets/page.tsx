"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Globe,
  Users,
  Heart,
  Wrench,
  Shield,
  ChevronDown,
  ArrowLeft,
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

export default function Projets() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const cybercompanionRef = useRef(null);
  const mechanicRef = useRef(null);
  const amiRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const cybercompanionInView = useInView(cybercompanionRef, {
    once: true,
    margin: "-100px",
  });
  const mechanicInView = useInView(mechanicRef, {
    once: true,
    margin: "-100px",
  });
  const amiInView = useInView(amiRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  const cybercompanionFeatures = [
    {
      title: "Modération Avancée",
      description:
        "Système d'avertissements, anti-spam, anti-raid avec logs détaillés",
      icon: "🛡️",
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Système de Niveaux",
      description: "Cartes personnalisables, rôles automatiques, classements",
      icon: "📊",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Économie & Jeux",
      description: "Boutique, emplois, paris et divers mini-jeux",
      icon: "🎮",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Intelligence Artificielle",
      description: "Conversations, création d'images, résumé de textes",
      icon: "🤖",
      color: "from-purple-400 to-violet-500",
    },
    {
      title: "Dashboard Web",
      description: "Interface Next.js pour configurer sans commandes",
      icon: "💻",
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Automatisations",
      description: "Auto-rôles, messages d'accueil, annonces programmées",
      icon: "⚡",
      color: "from-yellow-400 to-orange-500",
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

      {/* Header animé */}
      <motion.header
        className="modern-header fixed top-0 left-0 right-0 z-40 p-2 sm:p-4 md:px-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="logo text-xl sm:text-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fontom&apos;s
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            <Link href="/">
              <motion.div
                className="nav-link flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <ArrowLeft size={16} />
                Accueil
              </motion.div>
            </Link>
            <Link href="/#projects-preview">
              <motion.div
                className="nav-link text-sm sm:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Aperçu Projets
              </motion.div>
            </Link>
            <Link href="/#cybercompanion">
              <motion.div
                className="nav-link text-sm sm:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                CyberCompanion
              </motion.div>
            </Link>
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
                <Link href="/">
                  <motion.div
                    className="nav-link flex items-center justify-center gap-2 py-2 px-3 rounded-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowLeft size={16} />
                    Accueil
                  </motion.div>
                </Link>
                <Link href="/#projects-preview">
                  <motion.div
                    className="nav-link block py-2 px-3 rounded-lg text-center"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    Aperçu Projets
                  </motion.div>
                </Link>
                <Link href="/#cybercompanion">
                  <motion.div
                    className="nav-link block py-2 px-3 rounded-lg text-center"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    CyberCompanion
                  </motion.div>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 relative z-10">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="px-4 md:px-8 py-12 sm:py-16 md:py-20 text-center"
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h1
              className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={
                heroInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Mes Projets
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={
                heroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Découvrez mes créations et communautés en détail
            </motion.p>

            <motion.p
              className="text-base sm:text-lg mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed px-4 sm:px-0"
              initial={{ y: 30, opacity: 0 }}
              animate={
                heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 1 }}
            >
              Cette page présente en détail mes trois projets principaux :
              <span className="text-blue-400 font-medium"> CyberCompanion</span>
              , le bot Discord que j&apos;ai créé,
              <span className="text-orange-400 font-medium">
                {" "}
                The Mechanic Community
              </span>
              , où je suis modérateur et développeur bot, et
              <span className="text-green-400 font-medium"> Ami en Tête</span>,
              dont je suis administrateur et responsable technique du bot.
            </motion.p>

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

        {/* CyberCompanion Section */}
        <motion.section
          ref={cybercompanionRef}
          className="px-4 md:px-8 py-12 sm:py-16 md:py-20"
          initial={{ opacity: 0 }}
          animate={cybercompanionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={
                cybercompanionInView
                  ? { y: 0, opacity: 1 }
                  : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  CyberCompanion
                </span>
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
                initial={{ y: 30, opacity: 0 }}
                animate={
                  cybercompanionInView
                    ? { y: 0, opacity: 1 }
                    : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Mon projet phare : un bot Discord français nouvelle génération
                qui révolutionne l&apos;expérience des communautés francophones.
                Développé avec passion depuis 2023.
              </motion.p>

              {/* Statistiques CyberCompanion */}
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
                initial={{ y: 30, opacity: 0 }}
                animate={
                  cybercompanionInView
                    ? { y: 0, opacity: 1 }
                    : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  {
                    label: "Serveurs",
                    value: "65+",
                    color: "from-blue-400 to-cyan-500",
                  },
                  {
                    label: "Utilisateurs",
                    value: "13k+",
                    color: "from-purple-400 to-pink-500",
                  },
                  {
                    label: "Commandes",
                    value: "50k+",
                    color: "from-orange-400 to-red-500",
                  },
                  {
                    label: "Disponibilité",
                    value: "99.7%",
                    color: "from-green-400 to-emerald-500",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-4 sm:p-6 text-center"
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={
                      cybercompanionInView
                        ? { y: 0, opacity: 1 }
                        : { y: 20, opacity: 0 }
                    }
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div
                      className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Fonctionnalités CyberCompanion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {cybercompanionFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 sm:p-6 group cursor-pointer"
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={
                    cybercompanionInView
                      ? { y: 0, opacity: 1, scale: 1 }
                      : { y: 50, opacity: 0, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.6,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <motion.div
                    className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Actions CyberCompanion */}
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={
                cybercompanionInView
                  ? { y: 0, opacity: 1 }
                  : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://cybercompanion.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2">
                    <Globe size={20} />
                    Site Officiel
                  </Button>
                </motion.a>
                <motion.a
                  href="https://cybercompanion.fr/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-purple-500/30 hover:border-purple-500 text-purple-400 hover:text-purple-300 px-8 py-3 rounded-full"
                  >
                    Rejoindre Discord
                  </Button>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* The Mechanic Community Section */}
        <motion.section
          ref={mechanicRef}
          className="px-4 md:px-8 py-12 sm:py-16 md:py-20"
          initial={{ opacity: 0 }}
          animate={mechanicInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={
                mechanicInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.6 }}
            >
              <div className="order-2 lg:order-1">
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    The Mechanic Community
                  </span>
                </motion.h2>
                <motion.p
                  className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    mechanicInView
                      ? { y: 0, opacity: 1 }
                      : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  La plus grande communauté francophone dédiée à la passion
                  automobile et à la mécanique. Un espace d&apos;entraide où les
                  passionnés partagent leurs connaissances et expériences.
                </motion.p>

                <motion.div
                  className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    mechanicInView
                      ? { y: 0, opacity: 1 }
                      : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p className="text-orange-400 font-semibold text-base sm:text-lg">
                    🔧 Mon Rôle : Modérateur & Développeur Bot
                  </p>
                  <p className="text-gray-300 mt-2 text-sm sm:text-base">
                    En tant que modérateur de la communauté et développeur du
                    bot Discord, je contribue activement à maintenir un
                    environnement bienveillant et à développer des outils pour
                    améliorer l&apos;expérience des membres.
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    mechanicInView
                      ? { y: 0, opacity: 1 }
                      : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {[
                    {
                      icon: <Wrench className="text-orange-500" size={20} />,
                      title: "Passion Auto",
                      desc: "Discussions passionnées",
                    },
                    {
                      icon: <Users className="text-blue-500" size={20} />,
                      title: "Communauté",
                      desc: "Active et bienveillante",
                    },
                    {
                      icon: <Shield className="text-green-500" size={20} />,
                      title: "Staff Actif",
                      desc: "Équipe dévouée",
                    },
                    {
                      icon: <Heart className="text-pink-500" size={20} />,
                      title: "Entraide",
                      desc: "Conseils et support",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        mechanicInView
                          ? { x: 0, opacity: 1 }
                          : { x: -20, opacity: 0 }
                      }
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {item.icon}
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    mechanicInView
                      ? { y: 0, opacity: 1 }
                      : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.a
                    href="https://the-mechanic-community.fontoms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 w-full text-sm sm:text-base">
                      <Globe size={18} />
                      Visiter le Site
                    </Button>
                  </motion.a>
                  <motion.a
                    href="https://discord.gg/mecafr"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-orange-300 px-6 sm:px-8 py-3 rounded-full w-full text-sm sm:text-base"
                    >
                      Rejoindre Discord
                    </Button>
                  </motion.a>
                </motion.div>
              </div>

              <motion.div
                className="glass-card p-6 sm:p-8 text-center order-1 lg:order-2"
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  transition: { type: "spring", stiffness: 300 },
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={
                  mechanicInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.9, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🏎️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Rejoignez-nous !
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Des salons thématiques pour tous les aspects de
                  l&apos;automobile, une communauté passionnée et respectueuse,
                  de l&apos;entraide technique et des conseils de passionnés.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Ami en Tête Section */}
        <motion.section
          ref={amiRef}
          className="px-4 md:px-8 py-20"
          initial={{ opacity: 0 }}
          animate={amiInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={amiInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="glass-card p-8 text-center order-2 lg:order-1"
                whileHover={{
                  scale: 1.02,
                  rotateY: -2,
                  transition: { type: "spring", stiffness: 300 },
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={
                  amiInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.9, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Un refuge bienveillant
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  &quot;S&apos;il n&apos;y a pas de solution, c&apos;est
                  qu&apos;il n&apos;y a pas de problème.&quot;
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-lg">
                    <div className="text-2xl mb-2">🔒</div>
                    <div className="font-medium">Confidentialité</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-lg">
                    <div className="text-2xl mb-2">🎮</div>
                    <div className="font-medium">Détente</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-3 rounded-lg">
                    <div className="text-2xl mb-2">💬</div>
                    <div className="font-medium">Partage</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-lg">
                    <div className="text-2xl mb-2">⭐</div>
                    <div className="font-medium">Motivation</div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 lg:order-2">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Ami en Tête
                  </span>
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-300 mb-4 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    amiInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Un espace chaleureux et bienveillant pour ceux qui se sentent
                  seuls ou confrontés à des défis. Ensemble, nous créons une
                  communauté basée sur l&apos;entraide, l&apos;empathie et la
                  camaraderie.
                </motion.p>

                <motion.div
                  className="mb-8 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    amiInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p className="text-green-400 font-semibold text-lg">
                    🤝 Mon Rôle : Administrateur & Responsable Technique du Bot
                  </p>
                  <p className="text-gray-300 mt-2">
                    En tant qu&apos;administrateur et responsable technique du
                    bot, je supervise la communauté et développe les outils
                    techniques pour offrir un support optimal aux membres qui en
                    ont besoin.
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-4 mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    amiInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {[
                    {
                      title: "Confidentialité",
                      desc: "Un refuge confidentiel où des bénévoles vous écoutent sans jugement",
                      icon: "🔒",
                    },
                    {
                      title: "Détente",
                      desc: "Un espace de détente avec des jeux amusants et des discussions",
                      icon: "🎮",
                    },
                    {
                      title: "Partage d'expérience",
                      desc: "Un lieu d'échanges constructifs où chaque histoire compte",
                      icon: "💬",
                    },
                    {
                      title: "Motivation",
                      desc: "Un booster d'espoir pour vous rappeler qu'il y a toujours de la lumière",
                      icon: "⭐",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        amiInView
                          ? { x: 0, opacity: 1 }
                          : { x: -20, opacity: 0 }
                      }
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    amiInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.a
                    href="https://ami-en-tete.fontoms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2">
                      <Globe size={20} />
                      Visiter le Site
                    </Button>
                  </motion.a>
                  <motion.a
                    href="https://discord.gg/kZaW43zN3Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="border-green-500/30 hover:border-green-500 text-green-400 hover:text-green-300 px-8 py-3 rounded-full"
                    >
                      Rejoindre Discord
                    </Button>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="modern-footer px-4 md:px-8 py-12 mt-20"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Créé avec ❤️ pour construire des communautés bienveillantes
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Fontom&apos;s. Tous droits réservés.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
