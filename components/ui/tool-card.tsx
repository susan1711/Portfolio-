"use client";

import type { SimpleIcon } from "simple-icons";

import type { ToolIcon } from "@/content/knowledge-logos";

function SimpleIconDisplay({ icon }: { icon: SimpleIcon }) {
  return (
    <div
      aria-hidden="true"
      className="flex size-6 items-center justify-center [&>svg]:h-full [&>svg]:w-full"
      dangerouslySetInnerHTML={{
        __html: icon.svg.replace("<svg ", '<svg fill="currentColor" '),
      }}
    />
  );
}

export function ToolCard({ name, icon }: { name: string; icon: ToolIcon }) {
  return (
    <div className="group relative shrink-0">
      <div className="relative flex h-12 items-center gap-3 rounded-2xl border border-border/50 bg-card/40 px-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-card hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] sm:h-[52px] lg:h-14 lg:min-w-40">
        {icon.type === "simple" ? (
          <div className="text-foreground/70 transition-colors duration-300 group-hover:text-primary">
            <SimpleIconDisplay icon={icon.icon} />
          </div>
        ) : (
          <icon.icon
            aria-hidden="true"
            className="size-6 text-foreground/70 transition-colors duration-300 group-hover:text-primary"
          />
        )}

        <span className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
          {name}
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div className="absolute -right-16 -top-16 size-32 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 size-32 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </div>
  );
}
