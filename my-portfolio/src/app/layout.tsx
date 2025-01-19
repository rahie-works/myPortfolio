import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./utils/CustomCursor";

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
        {children}
      </body>
    </html>
  );
}
