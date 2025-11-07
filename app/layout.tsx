import type { Metadata } from "next";
import Script from "next/script";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Justus Beck",
  description:
    "Hey, I'm Justus Beck, a full-stack engineer and mobile engineer. Here's my portfolio where you can see all my projects, and achievements.",
  authors: [{ name: "Justus Beck", url: "https://justus-beck.org/" }],
  creator: "Justus Beck",
  publisher: "Justus Beck",
  keywords: [
    "Justus Beck",
    "Justus Beck portfolio",
    "full-stack engineer",
    "mobile engineer",
    "software developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "full-stack developer",
    "frontend engineer",
    "backend engineer",
    "mobile developer",
    "JavaScript developer",
    "TypeScript developer",
    "best portfolio websites",
    "personal website for developers",
    "programming blogs",
    "tech blog",
    "coding projects",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  alternates: {
    canonical: "https://justus-beck.org/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
      </Script>
    </html>
  );
}
