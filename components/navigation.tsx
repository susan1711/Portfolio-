"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [activeHref, setActiveHref] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 8);
    const updateActiveHash = () => setActiveHref(window.location.hash || "#home");

    updateScrollState();
    updateActiveHash();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("hashchange", updateActiveHash);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("hashchange", updateActiveHash);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <Container
        className={cn(
          "relative rounded-2xl border transition-[background-color,border-color,box-shadow] duration-300",
          hasScrolled
            ? "border-border/80 bg-background/75 shadow-[0_8px_30px_rgba(17,24,39,0.06)] backdrop-blur-xl dark:shadow-black/20"
            : "border-transparent bg-transparent",
        )}
        size="page"
      >
        <div className="flex h-16 items-center justify-between">
          <a
            className="font-heading text-lg font-semibold tracking-[-0.04em]"
            href="#home"
            onClick={closeMenu}
          >
            Sudharsan<span className="text-primary">.</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {homeContent.navigation.map((item) => (
              <a
                aria-current={activeHref === item.href ? "page" : undefined}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  activeHref === item.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                href={item.href}
                key={item.href}
                onClick={() => setActiveHref(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="size-10 rounded-xl md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              size="icon"
              variant="ghost"
            >
              {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {isOpen ? (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-border/80 py-3 md:hidden"
            id="mobile-navigation"
          >
            {homeContent.navigation.map((item) => (
              <a
                aria-current={activeHref === item.href ? "page" : undefined}
                className={cn(
                  "block rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                  activeHref === item.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
                href={item.href}
                key={item.href}
                onClick={() => {
                  setActiveHref(item.href);
                  closeMenu();
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
