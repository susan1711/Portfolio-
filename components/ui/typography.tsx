import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      hero: "font-heading text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl",
      pageTitle: "font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl",
      sectionTitle: "font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl",
      heading: "font-heading text-2xl font-semibold tracking-[-0.03em]",
      subheading: "font-heading text-xl font-medium tracking-[-0.02em] sm:text-2xl",
      body: "text-base leading-7 text-muted-foreground",
      lead: "text-lg leading-8 text-muted-foreground",
      small: "text-sm leading-6 text-muted-foreground",
      caption: "text-sm leading-5 text-muted-foreground",
      label: "text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground",
      code: "font-mono text-sm leading-6",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TypographyProps = ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof typographyVariants> & {
    as?: ElementType;
  };

function Typography({ as: Component = "p", className, variant, ...props }: TypographyProps) {
  return <Component className={cn(typographyVariants({ variant }), className)} {...props} />;
}

export { Typography, typographyVariants };
