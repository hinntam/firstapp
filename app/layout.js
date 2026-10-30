import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "John Nguyen | IT Support & Help Desk",
  description: "Calgary IT support candidate and SAIT Software Development diploma graduate with Windows troubleshooting, network diagnostics, and help desk documentation practice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="auhC-Rti1E1DKXfcJXmOfKT5GQMETFWJ7ZkyE-TKMWE" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
