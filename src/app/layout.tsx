import type { Metadata } from "next";
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
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/zerovex-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
      </body>
    </html>
  );
}
