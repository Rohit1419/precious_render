import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FoodFast - Speedy Food Delivery Service",
  description:
    "Quick and tasty food delivered to your doorstep within 30 minutes.",
};

export default function FoodFastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative">{children}</div>;
}
