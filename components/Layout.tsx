import { Metadata } from 'next';
import React from "react"
import Navbar from "./Navbar"

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_APP_URL ? new URL(process.env.NEXT_PUBLIC_APP_URL) : undefined,
  title: "Naved Alam - Designer & Builder",
  description: "A product designer and aspiring design engineer, exploring AI, Web3, and developer tools.",
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
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "",
  },
  openGraph: {
    title: "Naved Alam - Designer & Builder",
    description: "Portfolio of Naved Alam, showcasing work across UI/UX, branding, Web3, AI tools, and more.",
    url: process.env.NEXT_PUBLIC_APP_URL || "",
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
    description: "Portfolio of Naved Alam, showcasing work across UI/UX, branding, Web3, AI tools, and more.",
    images: ["/og-image.webp"],
    site: process.env.NEXT_PUBLIC_APP_URL || "",
  },
};

const Layout = ({children})=> {
    return <>
    <Navbar/>
    <div className="pt-16">
      {children}
    </div>
    </>
}

export default Layout