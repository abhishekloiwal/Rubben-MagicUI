import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Rubben",
    "Investor Relations",
    "IR Software",
    "Fundraising",
    "LP Management",
    "Alternative Assets",
    "Private Equity",
    "CRM",
    "AI",
    "Investor Intelligence",
  ],
  authors: [
    {
      name: "Dillion Verma",
      url: "https://magicui.design",
    },
  ],
  creator: "dillionverma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@dillionverma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
