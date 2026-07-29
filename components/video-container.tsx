"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

export function VideoContainer() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [shouldReduceMotion]);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-secondary/60 shadow-[0_1px_2px_rgba(17,24,39,0.04)] lg:aspect-[4/3]"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.24 }}
    >
      <div aria-hidden="true" className="absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-20 size-48 rounded-full bg-primary/8 blur-3xl" />

      <Image
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
          videoPlaying ? "opacity-0" : "opacity-100"
        }`}
        fill
        priority
        src="/images/hero-poster.jpg"
      />

      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay={!shouldReduceMotion}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        loop
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
        onLoadedData={() => setVideoReady(true)}
        onPlaying={() => setVideoPlaying(true)}
      >
        <source src="/videos/intro.webm" type="video/webm" />
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
