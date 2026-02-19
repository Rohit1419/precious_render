"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Định nghĩa kiểu Attribute từ next-themes
type Attribute = "class" | "data-theme" | "data-mode";

// Định nghĩa kiểu ThemeProviderProps đơn giản
interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: Attribute | Attribute[];
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
  forcedTheme?: string;
  themes?: string[];
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
