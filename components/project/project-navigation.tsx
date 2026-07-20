"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { ProjectDetail } from "@/content/project-details";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

function MotionBlock({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 18 };

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={initial}
      transition={{ ...transition, delay: shouldReduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

type ProjectNavigationProps = {
  previous: ProjectDetail | null;
  next: ProjectDetail | null;
};

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  return (
    <nav aria-label="Project navigation" className="py-16 sm:py-20 lg:py-24">
      <Container size="content">
        <MotionBlock>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div>
              {previous ? (
                <Button asChild size="lg" variant="secondary">
                  <Link href={`/projects/${previous.slug}`}>
                    <ArrowLeft aria-hidden="true" />
                    <span className="max-w-28 truncate sm:max-w-40">
                      {previous.name}
                    </span>
                  </Link>
                </Button>
              ) : (
                <div />
              )}
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg" variant="ghost">
                <Link href="/#projects">
                  <Home aria-hidden="true" />
                  <span className="sr-only sm:not-sr-only">Back to Home</span>
                </Link>
              </Button>
            </div>

            <div className="flex justify-end">
              {next ? (
                <Button asChild size="lg" variant="secondary">
                  <Link href={`/projects/${next.slug}`}>
                    <span className="max-w-28 truncate sm:max-w-40">
                      {next.name}
                    </span>
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </MotionBlock>
      </Container>
    </nav>
  );
}
