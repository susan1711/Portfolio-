"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Globe, LayoutDashboard, TrendingUp } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
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

type ProjectResultsProps = {
  project: ProjectDetail;
};

const resultItems = [
  {
    key: "launchStatus" as const,
    label: "Launch Status",
    icon: Globe,
  },
  {
    key: "performanceImprovements" as const,
    label: "Performance",
    icon: BarChart3,
  },
  {
    key: "uxImprovements" as const,
    label: "UX Improvements",
    icon: LayoutDashboard,
  },
  {
    key: "businessOutcome" as const,
    label: "Business Outcome",
    icon: TrendingUp,
  },
];

export function ProjectResults({ project }: ProjectResultsProps) {
  const hasResults = resultItems.some((item) => project.results[item.key] !== null);

  if (!hasResults) {
    return null;
  }

  return (
    <section
      aria-labelledby="results-heading"
      className="border-y border-border/70 bg-secondary/30 py-16 sm:py-20 lg:py-24"
    >
      <Container size="content">
        <div className="mx-auto max-w-3xl">
          <MotionBlock>
            <Typography as="h2" id="results-heading" variant="label">
              Results
            </Typography>
            <Typography as="h3" className="mt-3" variant="heading">
              Project Outcomes
            </Typography>
          </MotionBlock>

          <MotionBlock className="mt-10 grid gap-4 sm:grid-cols-2" delay={0.06}>
            {resultItems.map((item) => {
              const value = project.results[item.key];
              if (value === null) {
                return null;
              }

              const Icon = item.icon;

              return (
                <div
                  className="rounded-3xl border border-border bg-card p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-8"
                  key={item.key}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-5 text-primary"
                  />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    {value}
                  </p>
                </div>
              );
            })}
          </MotionBlock>
        </div>
      </Container>
    </section>
  );
}
