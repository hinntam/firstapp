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
  title: "John's profile",
  description: "Software developer - Web Dev",
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
