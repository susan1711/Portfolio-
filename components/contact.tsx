"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Download, ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { contactContent } from "@/content/contact";

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

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactContent.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <Section aria-labelledby="contact-heading" id="contact" spacing="spacious">
      <Container size="content">
        <MotionBlock>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {contactContent.eyebrow}
          </p>
          <h2
            className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]"
            id="contact-heading"
          >
            {contactContent.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {contactContent.description}
          </p>
        </MotionBlock>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="space-y-8">
            <MotionBlock className="flex flex-wrap items-center gap-4" delay={0.08}>
              <Badge className="gap-2 px-4 py-2 text-sm" variant="default">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                {contactContent.availability}
              </Badge>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin aria-hidden="true" className="size-4" />
                {contactContent.location}
              </span>
            </MotionBlock>

            <MotionBlock
              className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-4 sm:p-6"
              delay={0.12}
            >
              <code className="font-mono text-base text-foreground sm:text-lg">
                {contactContent.email}
              </code>
              <Button
                aria-label={copied ? "Email copied to clipboard" : "Copy email to clipboard"}
                className="size-10 rounded-xl"
                onClick={handleCopyEmail}
                size="icon"
                variant="secondary"
              >
                {copied ? <Check aria-hidden="true" className="text-green-500" /> : <Copy aria-hidden="true" />}
              </Button>
            </MotionBlock>

            <MotionBlock className="flex flex-col gap-3 sm:flex-row" delay={0.16}>
              <Button asChild className="gap-3" size="lg">
                <a
                  href={contactContent.primaryCta.href}
                  rel={contactContent.primaryCta.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  target={contactContent.primaryCta.href.startsWith("mailto:") ? undefined : "_blank"}
                >
                  {contactContent.primaryCta.label}
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={contactContent.secondaryCta.href}>
                  {contactContent.secondaryCta.label}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a
                  download={contactContent.resume.download}
                  href={contactContent.resume.href}
                >
                  {contactContent.resume.label}
                  <Download aria-hidden="true" />
                </a>
              </Button>
            </MotionBlock>
          </div>

          <MotionBlock className="flex flex-wrap gap-3 lg:flex-col" delay={0.12}>
            <div aria-label="Social links" className="flex flex-wrap gap-3 lg:flex-col" role="list">
              {contactContent.socials.map((social) => (
                <Button
                  asChild
                  key={social.label}
                  size="lg"
                  variant="secondary"
                  role="listitem"
                >
                  <a
                    aria-label={social.ariaLabel}
                    className="gap-3"
                    href={social.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {social.label}
                    <ExternalLink aria-hidden="true" className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </MotionBlock>
        </div>
      </Container>
    </Section>
  );
}
