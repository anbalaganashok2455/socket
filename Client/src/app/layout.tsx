import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "User Form App",
  description: "Next.js form with Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  {children}
      </body>
    </html>
  );
}
