import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "SIE Rework",
  description: "Rework de la pagina del SIE del ITE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
