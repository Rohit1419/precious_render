import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precious Render",
  description:
    "Expert web development services for modern businesses. From landing pages to full-scale applications, we deliver high-performance, secure, and SEO-optimized websites.",
  keywords: [
    "web development",
    "professional websites",
    "responsive design",
    "SaaS development",
    "landing page design",
  ],
  icons: {
    icon: "/Favicon.png",
  },
};

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
