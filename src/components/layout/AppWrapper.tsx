"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { IntroAnimation } from "../ui/IntroAnimation";
import { SocialButtons } from "../ui/SocialButtons";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false);
  const [showSite, setShowSite] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Vérifier si l'intro a déjà été vue
    const seen = sessionStorage.getItem("horeva-intro-seen");
    if (seen) {
      // Déjà vue, afficher le site directement
      setShowSite(true);
      setShowIntro(false);
    } else {
      // Pas encore vue, afficher l'intro
      setShowIntro(true);
    }
    setIsLoaded(true);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowSite(true);
  };

  // Écran noir pendant le chargement initial
  if (!isLoaded) {
    return <div className="fixed inset-0 bg-black" />;
  }

  return (
    <>
      {/* Intro Animation */}
      {showIntro && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* Site Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSite ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ pointerEvents: showSite ? "auto" : "none" }}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SocialButtons />
      </motion.div>
    </>
  );
}
