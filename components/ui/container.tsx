import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-6 lg:px-8", {
  variants: {
    size: {
      content: "max-w-7xl",
      page: "max-w-[90rem]",
      narrow: "max-w-3xl",
    },
  },
  defaultVariants: {
    size: "content",
  },
});

type ContainerProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof containerVariants> & {
    as?: ElementType;
  };

function Container({ as: Component = "div", className, size, ...props }: ContainerProps) {
  return <Component className={cn(containerVariants({ size }), className)} {...props} />;
}

export { Container, containerVariants };
