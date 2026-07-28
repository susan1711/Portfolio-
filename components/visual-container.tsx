"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

type VisualContainerProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export function VisualContainer({ imageSrc, imageAlt }: VisualContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };

  return (
    <motion.div
      animate={animate}
      className="relative flex w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-secondary/60 p-4 shadow-[0_1px_2px_rgba(17,24,39,0.04)] lg:self-end"
      initial={initial}
      transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.16 }}
    >
      <div aria-hidden="true" className="absolute -right-16 -top-16 size-44 rounded-full bg-primary/15 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-16 -left-16 size-44 rounded-full bg-primary/10 blur-3xl" />

      {imageSrc ? (
        <Image
          alt={imageAlt ?? ""}
          className="relative h-auto w-full max-w-sm object-contain"
          src={imageSrc}
          width={1024}
          height={1536}
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      ) : (
        <div className="relative flex flex-col items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
            <ImageIcon aria-hidden="true" className="size-6 text-primary" />
          </div>
          <p className="text-sm font-medium text-muted-foreground">Illustration / Photo</p>
        </div>
      )}
    </motion.div>
  );
}