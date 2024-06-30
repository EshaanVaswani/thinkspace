import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "ThinkSpace",
   description:
      "Your Ultimate Workspace for Thinking, Creating, and Collaborating",
   icons: {
      icon: [
         {
            media: "(prefers-color-scheme:light)",
            url: "/logo.png",
            href: "/logo.png",
         },
         {
            media: "(prefers-color-scheme:dark)",
            url: "/logo-dark.png",
            href: "/logo-dark.png",
         },
      ],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
               storageKey="thinkspace-theme"
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
