import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/footer/footer";
import { Navbar } from "./components/nav";
import { metaData } from "./config";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cx(geistSans.variable, geistMono.variable)}>
      <body
        className={`antialiased flex flex-col items-center justify-center mx-auto
           mt-2 lg:mt-4 mb-12 lg:mb-16`}
      >
        <main
          className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 
        md:px-0 max-w-[640px] w-full"
        >
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
