import type { Metadata } from "next";
import "./globals.css";
import { Nav, Footer } from "./components";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { generateSEO, generateOrganizationSchema, generateServiceSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Prospect Growth Lab | LinkedIn Outbound Automation",
  description:
    "We help mid-market companies scale their outbound pipeline with done-for-you LinkedIn automation. Book a call today.",
  keywords: [
    "LinkedIn lead generation",
    "done-for-you LinkedIn outbound",
    "B2B sales automation",
    "LinkedIn prospecting service",
    "sales development",
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleAnalytics />
        <Nav />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema()),
          }}
        />
      </body>
    </html>
  );
}
