import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CAGR Calculator: Calculate Annual Growth Rate Online",
  description:
    "CAGR Calculator accurately calculates your investment's compound annual growth rate, helping you track your portfolio growth",
  keywords: "CAGR Calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
