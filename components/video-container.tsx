"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

export function VideoContainer() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldReduceMotion) {
      video.pause();
      video.currentTime = 0;
    }
  }, [shouldReduceMotion]);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="relative mx-auto aspect-[9/16] w-full max-w-[200px] overflow-hidden rounded-3xl border border-border bg-secondary/60 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:max-w-[240px] lg:max-w-[min(100%,calc((100svh-16rem)*0.5625))] xl:max-w-[min(100%,360px,calc((100svh-16rem)*0.5625))]"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.24 }}
    >
      <div aria-hidden="true" className="absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-20 size-48 rounded-full bg-primary/8 blur-3xl" />

      <video
        ref={videoRef}
        aria-label="Self-introduction video"
        autoPlay={!shouldReduceMotion}
        className="relative z-10 size-full object-contain"
        controls
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/intro-avatar.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
