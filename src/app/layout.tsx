import type { Metadata } from "next";
<<<<<<< HEAD
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "ZeroVex Solutions | Digital Solutions Partner",
    template: "%s | ZeroVex Solutions",
  },
  description:
    "ZeroVex Solutions combines software development, visual design, and digital strategy to help businesses build a stronger digital presence.",
  keywords: [
    "ZeroVex Solutions",
    "Zerovex",
    "Digital Solutions Partner",
    "Custom Web Applications",
    "Website Development",
    "Graphic Design",
    "Digital Marketing",
    "E-Commerce Solutions",
    "Website Maintenance",
  ],
  authors: [{ name: "ZeroVex Solutions" }],
  creator: "ZeroVex Solutions",
  publisher: "ZeroVex Solutions",
  metadataBase: new URL("https://www.zerovexsolutions.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zerovexsolutions.site",
    title: "ZeroVex Solutions | Digital Solutions Partner",
    description:
      "Combining development, design and digital strategy to help businesses build a stronger digital presence.",
    siteName: "ZeroVex Solutions",
    images: [
      {
        url: "/zerovex-logo.jpg",
        width: 1200,
        height: 630,
        alt: "ZeroVex Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroVex Solutions | Digital Solutions Partner",
    description:
      "Combining development, design and digital strategy to help businesses build a stronger digital presence.",
=======
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/components/SmoothScroll";
import MouseGlow from "@/components/ui/MouseGlow";
import NeuralBackground from "@/components/ui/NeuralBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Zerovex Solutions | AI Automation & Software Development",
    template: "%s | Zerovex Solutions",
  },
  description: "Transform your business with AI automation, custom software development, and scalable SaaS solutions. Building tomorrow's technology today.",
  keywords: ["AI automation", "software development", "SaaS development", "web development", "business automation"],
  authors: [{ name: "Zerovex Solutions" }],
  creator: "Zerovex Solutions",
  publisher: "Zerovex Solutions",
  metadataBase: new URL("https://zerovexsolutions.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zerovexsolutions.site",
    title: "Zerovex Solutions | AI Automation & Software Development",
    description: "Transform your business with AI automation, custom software development, and scalable SaaS solutions.",
    siteName: "Zerovex Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zerovex Solutions | AI Automation & Software Development",
    description: "Transform your business with AI automation, custom software development, and scalable SaaS solutions.",
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
<<<<<<< HEAD
    icon: "/zerovex-logo.jpg",
=======
    icon: "/favicon.svg",
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-black text-white selection:bg-[#E31B2B]/40 selection:text-white" suppressHydrationWarning>
        <PageLoader />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col bg-black selection:bg-[#E31B2B]/40 selection:text-white">
            <Navbar />
            <main className="flex-1 bg-black">{children}</main>
            <Footer />
            <Toaster position="top-right" />
          </div>
        </SmoothScroll>
=======
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-black`} suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll>
            <div className="relative flex min-h-screen flex-col transition-colors duration-300">
              <NeuralBackground />
              <MouseGlow />
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              {/* Toast notifications */}
              <Toaster position="top-right" />
            </div>
          </SmoothScroll>
        </ThemeProvider>
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
      </body>
    </html>
  );
}
