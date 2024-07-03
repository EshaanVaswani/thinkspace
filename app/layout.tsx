import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

import "./globals.css";

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
            <ConvexClientProvider>
               <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                  storageKey="thinkspace-theme"
               >
                  <Toaster position="bottom-right" />
                  <ModalProvider />
                  {children}
               </ThemeProvider>
            </ConvexClientProvider>
         </body>
      </html>
   );
}
