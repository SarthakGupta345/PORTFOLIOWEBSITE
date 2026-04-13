import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import Nav from "./Nav";

import InteractiveBackground from "./InteractiveBackground";
import CursorFollower from "@/components/CursorFollower";

export const metadata: Metadata = {
  title: "Cédric Karungu - Portfolio",
  description: "Fullstack Developer/Project Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CursorFollower />
          <InteractiveBackground />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
