import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import BgImage from "../public/bg.jpg";

const poppins = Poppins({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bauhausStdMedium = localFont({
  src: "../assets/fonts/BauhausStdMedium.otf",
  display: "swap",
  weight: "600",
  variable: "--font-bauhaus-std-medium",
});

export const metadata: Metadata = {
  title: "Indigo flight live status",
  description:
    "Stay informed! Track your flight instantly using the PNR, flight number, date, or location.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative h-full overflow-hidden ${poppins.variable} ${bauhausStdMedium.variable}`}
      >
        <Image
          src={BgImage}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          className="absolute -z-50 opacity-45 blur-sm"
          placeholder="blur"
          quality={100}
        />
        <div className="h-full overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
