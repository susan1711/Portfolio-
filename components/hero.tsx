"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };

  return (
    <main className="relative overflow-hidden" id="home">
      {/* Decorative gradient orbs */}
      <div aria-hidden="true" className="glow-dot -left-32 -top-32 size-96 opacity-60 dark:opacity-40" />
      <div aria-hidden="true" className="glow-dot -bottom-48 -right-32 size-80 opacity-40 dark:opacity-30" />

      <Container
        className="flex min-h-[calc(100svh-5.75rem)] items-center py-20 sm:py-24 lg:py-28"
        size="content"
      >
        <div className="max-w-4xl">
          <motion.div animate={animate} initial={initial} transition={transition}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground">
              <span aria-hidden="true" className="pulse-dot size-1.5 rounded-full bg-primary" />
              {homeContent.hero.availability}
            </span>
          </motion.div>

          <motion.h1
            animate={animate}
            className="mt-7 font-heading text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-foreground"
            initial={initial}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.08 }}
          >
            {homeContent.hero.greeting}
          </motion.h1>

          <motion.p
            animate={animate}
            className="mt-7 max-w-3xl text-xl font-medium leading-[1.35] tracking-[-0.03em] text-foreground sm:text-2xl lg:text-3xl"
            initial={initial}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.16 }}
          >
            {homeContent.hero.headline}
          </motion.p>

          <motion.p
            animate={animate}
            className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            initial={initial}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.24 }}
          >
            {homeContent.hero.description}
          </motion.p>

          <motion.div
            animate={animate}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={initial}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.32 }}
          >
            <Button asChild size="lg">
              <a href={homeContent.hero.primaryCta.href}>
                {homeContent.hero.primaryCta.label}
                <ArrowDownRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={homeContent.hero.secondaryCta.href}>{homeContent.hero.secondaryCta.label}</a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
