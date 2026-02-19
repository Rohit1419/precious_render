import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STYLISH | Modern Fashion E-Commerce",
  description:
    "Discover the latest fashion trends and shop your favorite styles with ease.",
};

export default function EstoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">{children}</div>
  );
}
