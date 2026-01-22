"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isFading, setIsFading] = useState(false);

  const handleVideoEnd = () => {
    // Commencer le fade out
    setIsFading(true);
    // Attendre la fin du fade avant de signaler la fin
    setTimeout(() => {
      sessionStorage.setItem("horeva-intro-seen", "true");
      onComplete();
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black"
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      >
        <source src="/aii.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
