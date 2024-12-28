import { Assistant } from "next/font/google";
import { Navbar } from "./shared/components/Navbar/Navbar";
import "./globals.scss";

const assistant = Assistant({
  subsets: ["latin"], // Specify the character subsets
  weight: ["200", "800"], // Specify font weights to include
  display: "swap", // Use "swap" to reduce layout shift
  fallback: ["sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={`main-layout ${assistant.className}`}>{children}</div>
      </body>
    </html>
  );
}
