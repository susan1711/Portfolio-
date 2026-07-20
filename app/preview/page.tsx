import type { Metadata } from "next";

import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: { absolute: "Sudharsan | Portfolio" },
};

export default function Preview() {
  return <HomePage />;
}
