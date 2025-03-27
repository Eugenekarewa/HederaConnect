import type React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth/auth-context";
import "./globals.css";
import Footer from "@/components/footer";
import MainHeader from "@/components/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HederaConnect - Decentralized Knowledge Sharing",
  description: "A platform for sharing educational content on Hedera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <MainHeader />
            {children}

            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
