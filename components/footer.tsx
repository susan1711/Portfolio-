"use client";

import { ArrowUp, ExternalLink } from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { contactContent } from "@/content/contact";
import { homeContent } from "@/content/home";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div aria-hidden="true" className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container className="py-12 sm:py-16" size="content">
        <div className="flex flex-col items-center gap-8 sm:gap-10">
          <a
            aria-label="Back to top"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            <ArrowUp aria-hidden="true" className="size-4" />
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6">
            {homeContent.navigation.map((item) => (
              <a
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            {contactContent.socials.map((social) => (
              <a
                aria-label={social.ariaLabel}
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
                <ExternalLink aria-hidden="true" className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          <p className="text-sm leading-5 text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
