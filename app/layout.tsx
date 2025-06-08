import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./contexts/LanguageContext";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
});

export const metadata: Metadata = {
  title: "توهاتسو السعودية - محركات القوارب الخارجية",
  description: "اكتشف محركات القوارب الخارجية توهاتسو في السعودية. جودة يابانية، أداء استثنائي، وخدمة محلية موثوقة.",
  keywords: "توهاتسو, محركات قوارب, محركات بحرية, السعودية, Tohatsu",
  authors: [{ name: "توهاتسو السعودية" }],
  creator: "توهاتسو السعودية",
  publisher: "توهاتسو السعودية",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "توهاتسو السعودية - محركات القوارب الخارجية",
    description: "اكتشف محركات القوارب الخارجية توهاتسو في السعودية. جودة يابانية، أداء استثنائي، وخدمة محلية موثوقة.",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "توهاتسو السعودية - محركات القوارب الخارجية عالية الجودة",
    description: "اكتشف محركات القوارب الخارجية من توهاتسو في السعودية. جودة يابانية، أداء موثوق، وكفاءة عالية لمغامراتك البحرية.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tohatsu-saudi.com",
    languages: {
      "ar-SA": "https://tohatsu-saudi.com",
      "en-US": "https://tohatsu-saudi.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={notoKufiArabic.variable}>
      <body className={`${notoKufiArabic.className} antialiased`}>
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
