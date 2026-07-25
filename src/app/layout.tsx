import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FourStackTech — Flutter App Development Company",
  description:
    "FourStackTech builds powerful cross-platform mobile apps with Flutter for iOS & Android. UI/UX design, backend integration, app store deployment — for startups and businesses.",
  keywords: [
    "Flutter development",
    "cross-platform mobile apps",
    "iOS Android app development",
    "Flutter agency",
    "FourStackTech",
  ],
  openGraph: {
    title: "FourStackTech — Flutter App Development Company",
    description:
      "We build powerful cross-platform mobile apps with Flutter for startups and businesses.",
    type: "website",
    siteName: "FourStackTech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
