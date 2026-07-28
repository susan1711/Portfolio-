import {
  siClaudecode,
  siGoogleanalytics,
  siGooglemarketingplatform,
  siMeta,
  siN8n,
  siRazorpay,
  siShopify,
  siWix,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";
import {
  Box,
  Code2,
  Image,
  Palette,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type ToolIcon =
  | { type: "simple"; icon: SimpleIcon }
  | { type: "lucide"; icon: LucideIcon };

export interface ToolData {
  name: string;
  icon: ToolIcon;
}

export const tools: ToolData[] = [
  { name: "Shopify", icon: { type: "simple", icon: siShopify } },
  { name: "WordPress", icon: { type: "simple", icon: siWordpress } },
  { name: "Wix", icon: { type: "simple", icon: siWix } },
  { name: "Meta Ads", icon: { type: "simple", icon: siMeta } },
  { name: "Google Analytics", icon: { type: "simple", icon: siGoogleanalytics } },
  { name: "Claude Code", icon: { type: "simple", icon: siClaudecode } },
  { name: "Google Merchant Center", icon: { type: "simple", icon: siGooglemarketingplatform } },
  { name: "n8n", icon: { type: "simple", icon: siN8n } },
  { name: "Razorpay", icon: { type: "simple", icon: siRazorpay } },
  { name: "Codex", icon: { type: "lucide", icon: Code2 } },
  { name: "Antigravity", icon: { type: "lucide", icon: Zap } },
  { name: "Photoshop", icon: { type: "lucide", icon: Image } },
  { name: "Canva", icon: { type: "lucide", icon: Palette } },
  { name: "Pabbly", icon: { type: "lucide", icon: Box } },
  { name: "GoHighLevel", icon: { type: "lucide", icon: TrendingUp } },
];
