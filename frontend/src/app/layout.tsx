import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, Montserrat } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.scss";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: {
    default: "The Century Law Offices | Prestigious Law Firm in Monrovia, Liberia",
    template: "%s | The Century Law Offices"
  },
  description: "Century Law is a premier full-service law firm in Liberia, providing expert legal counsel in Corporate, Maritime, Mining, and Litigation.",
  keywords: ["Law Firm Liberia", "Monrovia Lawyers", "Corporate Law Liberia", "Maritime Law Liberia", "Mining Law Liberia"],
  openGraph: {
    title: "The Century Law Offices | Excellence in Legal Advocacy",
    description: "Leading legal experts in the Republic of Liberia. Technical precision. Relentless advocacy.",
    url: "https://centurylaw.lr",
    siteName: "The Century Law Offices",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_LR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${sourceSerif.variable} ${montserrat.variable} bg-stone bg-opacity-10`}>
        <AuthProvider>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
