import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/css/global.css";
import Topbar from "@/components/Topbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sniffer",
    description: "Token validation and fraud detection",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="app-layout">
                    <div className="app-topbar">
                        <Topbar />
                    </div>
                    <div className="app-content">{children}</div>
                </div>
            </body>
        </html>
    );
}
