import type { Metadata, Viewport } from "next";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "TechCorp Enterprise Solutions",
  description:
    "We build scalable, secure tech solutions for enterprise businesses. From custom software development to AI integration and cloud services.",
  keywords: [
    "enterprise software",
    "custom development",
    "AI integration",
    "cloud services",
    "tech solutions",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function TechCorpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen overflow-x-hidden">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ScrollProgress color="#3b82f6" height={4} position="top" zIndex={50} />
        <div className="max-w-[100vw] overflow-x-hidden">{children}</div>
      </ThemeProvider>
    </div>
  );
}
