import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_APP_URL ? new URL(process.env.NEXT_PUBLIC_APP_URL) : new URL("https://www.naved.xyz"),
  title: "Naved Alam - Designer & Builder",
  description: "Portfolio of Naved Alam, showcasing work across UI/UX, branding, Web3, AI tools, and more.",
  keywords: [
    "Naved Alam",
    "Product Designer",
    "Design Engineer",
    "UI/UX",
    "Designer",
    "Web3",
    "AI Tools",
    "Design Systems",
    "React",
    "Tailwind CSS",
    "Healthcare Design",
    "Branding",
    "Frontend Development",
    "Design Portfolio"
  ],
  icons: {
    icon: [
      {
        url: "/favicon-light.svg",
        href: "favicon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        href: "favicon-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://www.naved.xyz",
  },
  openGraph: {
    title: "Naved Alam - Designer & Builder",
    description: "Portfolio of Naved Alam, showcasing UI/UX, branding, Web3, AI tools, and more.",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://www.naved.xyz",
    images: [
      {
        url: "/design/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naved Alam - Designer & Builder",
    description: "Portfolio of Naved Alam, showcasing UI/UX, branding, Web3, AI tools, and more.",
    images: ["/design/og-image.png"],
    site: process.env.NEXT_PUBLIC_APP_URL || "https://www.naved.xyz",
  },
};