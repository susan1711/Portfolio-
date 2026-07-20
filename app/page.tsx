import type { Metadata } from "next";

import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: { absolute: "Sudharsan | Portfolio Under Construction" },
};

export default function Home() {
  return <ComingSoon />;
}
