import type { Metadata } from "next";
import "./globals.css";

// utils
import CustomCursor from "./utils/CustomCursor";

// components
import NavigationTabs from "./components/NavigationStack/NavigationTabs";

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "My Portfolio - by Raheesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <NavigationTabs />
        {children}
      </body>
    </html>
  );
}
