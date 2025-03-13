import { Poppins, Inter } from "next/font/google";
import Nav from "./_components/nav/Nav";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased font-poppins bg-body text-white`}
      >
        <Toaster position="top-left" reverseOrder={false} />

        <Nav />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
