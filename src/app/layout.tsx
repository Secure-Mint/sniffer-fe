import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/css/global.css";
import Topbar from "@/components/Topbar";
import { APP_NAME, APP_TAGLINE } from "@/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_TAGLINE
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='app-layout'>
          <div className='app-topbar'>
            <Topbar />
          </div>
          <div className='app-content'>{children}</div>
        </div>
      </body>
    </html>
  );
}
