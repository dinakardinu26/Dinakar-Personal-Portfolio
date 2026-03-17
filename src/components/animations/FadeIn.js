"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const FadeIn = ({ children, delay = 0, direction = "up", duration = 0.5, staggerChildren = 0 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const directions = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
    none: { opacity: 0 }
  };

  const containerVariants = {
    hidden: directions[direction],
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        staggerChildren: staggerChildren,
      }
    }
  };

  if (!mounted) {
    // Avoid hydration mismatch by rendering static content on server
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStaggerItem = ({ children, direction = "up", duration = 0.5 }) => {
  const directions = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
    none: { opacity: 0 }
  };

  const itemVariants = {
    hidden: directions[direction],
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: duration, ease: "easeOut" }
    }
  };

  return <motion.div variants={itemVariants}>{children}</motion.div>;
};
