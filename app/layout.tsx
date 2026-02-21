import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { getSiteSettings } from "@/lib/sanity/sanityFetch";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  
  return {
    title: siteSettings?.siteName || "Precious Render",
    description: siteSettings?.siteDescription || 
      "Premium Jewelry Rendering Services - Photorealistic 3D renders, 360° animations, and marketing videos for modern jewelers.",
    keywords: [
      "jewelry rendering",
      "3D jewelry visualization",
      "jewelry 3D renders",
      "360 jewelry videos",
      "jewelry product photography",
      "CAD to catalog",
      "virtual jewelry inventory",
    ],
    icons: {
      icon: siteSettings?.faviconUrl || "/Favicon.png",
    },
    openGraph: {
      title: siteSettings?.siteName || "Precious Render",
      description: siteSettings?.siteDescription || 
        "Premium Jewelry Rendering Services",
      type: "website",
      images: [
        {
          url: siteSettings?.logoUrl || "/Precious Render.png",
          width: 1200,
          height: 630,
          alt: siteSettings?.siteName || "Precious Render",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteSettings?.siteName || "Precious Render",
      description: siteSettings?.siteDescription || 
        "Premium Jewelry Rendering Services",
      images: [siteSettings?.logoUrl || "/Precious Render.png"],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress
            color="#10b981"
            height={4}
            position="top"
            zIndex={50}
          />
          <div className="max-w-[100vw] overflow-x-hidden relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}