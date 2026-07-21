"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

const staggerDelay = 0.1;

export function ComingSoon() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };

  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Ambient green gradient orbs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-48 -top-48 size-[36rem] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute -bottom-48 -right-48 size-[30rem] rounded-full bg-primary/6 blur-[100px]" />
        <div className="absolute left-1/2 top-1/3 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[80px]" />
      </div>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-2xl text-center">
          {/* Badge */}
          <motion.div animate={animate} initial={initial} transition={transition}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-foreground">
              <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-primary" />
              Building in Public
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            animate={animate}
            className="mt-8 font-heading text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-foreground"
            initial={initial}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : staggerDelay }}
          >
            Portfolio v1 is under construction.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            animate={animate}
            className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            initial={initial}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : staggerDelay * 2 }}
          >
            I&rsquo;m rebuilding my portfolio from the ground up to better showcase my
            Shopify development work, real client projects, and engineering process.
          </motion.p>

          {/* Progress Card */}
          <motion.div
            animate={animate}
            className="mx-auto mt-10 max-w-sm rounded-2xl border border-border bg-card p-6 sm:p-7"
            initial={initial}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : staggerDelay * 3 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                Current Progress
              </span>
              <span className="font-heading text-lg font-semibold text-foreground">82%</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                animate={shouldReduceMotion ? { width: "82%" } : { width: "82%" }}
                className="h-full rounded-full bg-primary"
                initial={{ width: "0%" }}
                transition={{ duration: 1, delay: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary/60" />
                Expected Launch
              </span>
              <span className="font-medium text-foreground">August 2026</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            animate={animate}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={initial}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : staggerDelay * 4 }}
          >
            <Button asChild size="lg">
              <a href="/preview">
                Preview Portfolio
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="https://github.com/susan1711" rel="noreferrer" target="_blank">
                GitHub
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="https://www.linkedin.com/in/sudharsan-bharathi-raja/" rel="noreferrer" target="_blank">
                LinkedIn
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        animate={animate}
        className="border-t border-border px-6 py-6 sm:px-8 lg:px-12"
        initial={initial}
        transition={{ ...transition, delay: shouldReduceMotion ? 0 : staggerDelay * 5 }}
      >
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <span>&copy; Sudharsan</span>
          <span>Built with Next.js</span>
        </div>
      </motion.footer>
    </div>
  );
}
