"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

export default function CustomCursor({ mousePosition }: CustomCursorProps) {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.tagName === "A" ||
        target.closest("a") ||
        target.classList.contains("skill-badge") ||
        target.classList.contains("feature-card") ||
        target.classList.contains("nav-link")
      ) {
        setCursorVariant("hover");
      } else if (
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.classList.contains("hero-title")
      ) {
        setCursorVariant("text");
      } else {
        setCursorVariant("default");
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(255, 115, 0, 0.8)",
      mixBlendMode: "difference" as const,
      scale: 1,
    },
    hover: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(255, 115, 0, 0.2)",
      mixBlendMode: "normal" as const,
      scale: 1,
      border: "2px solid rgba(255, 115, 0, 0.8)",
    },
    text: {
      width: 8,
      height: 32,
      backgroundColor: "rgba(255, 115, 0, 0.8)",
      mixBlendMode: "difference" as const,
      scale: 1,
      borderRadius: "4px",
    },
    click: {
      scale: 0.8,
    },
  };

  return (
    <>
      {/* Curseur principal */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        variants={variants}
        animate={[cursorVariant, isClicking ? "click" : ""]}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Halo qui suit le curseur */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border border-orange-500/30"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          width: 48,
          height: 48,
        }}
        animate={{
          scale: cursorVariant === "hover" ? 1.5 : 1,
          opacity: cursorVariant === "hover" ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />

      {/* Trainée de particules */}
      <motion.div
        className="fixed pointer-events-none z-[9997] w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
        animate={{
          scale: [1, 0],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />
    </>
  );
}
