import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prospect Growth Lab | LinkedIn Outbound Automation",
  description:
    "We help mid-market companies scale their outbound pipeline with done-for-you LinkedIn automation. Book a call today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
