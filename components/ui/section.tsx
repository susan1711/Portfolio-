import type { ComponentPropsWithoutRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "",
      compact: "py-12 sm:py-16",
      default: "py-16 sm:py-24",
      spacious: "py-20 sm:py-28",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

type SectionProps = ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants>;

function Section({ className, spacing, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ spacing }), className)} {...props} />;
}

export { Section, sectionVariants };
