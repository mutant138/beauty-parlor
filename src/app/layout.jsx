import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Yazhini Makeup Artist | Best Beauty Services",
  description:
    "Yazhini Makeup Artist offers the latest and highest quality beauty services including bridal, event, HD, fashion, and ad shoot makeup.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="grow pt-16 sm:pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
