"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

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

type ProjectGalleryProps = {
  project: ProjectDetail;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  if (project.gallery.length === 0) {
    return null;
  }

  return (
    <section
      aria-label={`${project.name} gallery`}
      className="border-y border-border/70 bg-secondary/30 py-16 sm:py-20 lg:py-24"
    >
      <Container size="content">
        <MotionBlock>
          <Typography as="h2" variant="sectionTitle">
            Gallery
          </Typography>
        </MotionBlock>

        <MotionBlock className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" delay={0.06}>
          {project.gallery.map((image) => (
              <div
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted"
                key={image.src}
              >
                <Image
                  alt={image.alt}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={image.src}
                />
              </div>
          ))}
        </MotionBlock>
      </Container>
    </section>
  );
}
