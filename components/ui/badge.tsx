import type { ComponentPropsWithoutRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium leading-none transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/15 text-foreground hover:bg-primary/20 hover:border-primary/30",
        secondary: "border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-foreground/20",
        outline: "border-border bg-transparent text-foreground hover:bg-secondary hover:border-foreground/20",
        success: "border-transparent bg-green-500/15 text-green-700 dark:text-green-400 hover:bg-green-500/25",
        warning: "border-transparent bg-amber-500/15 text-amber-700 dark:text-amber-400 hover:bg-amber-500/25",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
