import "~/styles/globals.css";

// import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopHeader from "./components/Topheader";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const openSans = Inter({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.className}`}>
      
      <body className="max-w-[1440px] min-w-[700px] bg-white p-2 text-black">
      <TopHeader/>
        {children}
        </body>
    </html>
  );
}
