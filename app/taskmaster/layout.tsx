import type { Metadata, Viewport } from "next";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "TaskMaster - Project Management SaaS",
  description:
    "Efficient project management with real-time collaboration. Kanban boards, timeline views, task assignment, and seamless integrations for teams of all sizes.",
  keywords: [
    "project management",
    "task management",
    "kanban board",
    "team collaboration",
    "agile",
    "real-time",
    "SaaS",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function TaskMasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen overflow-x-hidden">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ScrollProgress color="#6366f1" height={4} position="top" zIndex={50} />
        <div className="max-w-[100vw] overflow-x-hidden">{children}</div>
      </ThemeProvider>
    </div>
  );
}
