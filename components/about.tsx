"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { VisualContainer } from "@/components/visual-container";
import { aboutContent } from "@/content/about";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };

  return (
    <Section aria-labelledby="about-heading" id="about" spacing="spacious">
      <Container size="content">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.9fr)] lg:gap-20 xl:gap-28">
          <div>
            <motion.p
              animate={animate}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-primary"
              initial={initial}
              transition={transition}
            >
              {aboutContent.eyebrow}
            </motion.p>
            <motion.h2
              animate={animate}
              className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]"
              id="about-heading"
              initial={initial}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.08 }}
            >
              {aboutContent.heading}
            </motion.h2>

            <motion.div
              animate={animate}
              className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
              initial={initial}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.16 }}
            >
              {aboutContent.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              animate={animate}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              initial={initial}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.24 }}
            >
              <Button asChild size="lg">
                <a download={aboutContent.primaryCta.download} href={aboutContent.primaryCta.href}>
                  {aboutContent.primaryCta.label}
                  <Download aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={aboutContent.secondaryCta.href}>
                  {aboutContent.secondaryCta.label}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </motion.div>
          </div>

          <VisualContainer />
        </div>
      </Container>
    </Section>
  );
}

