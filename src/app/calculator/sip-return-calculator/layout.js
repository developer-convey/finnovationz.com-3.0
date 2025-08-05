import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best SIP Return Calculator for Calculate Your SIP Returns",
  description:
    "SIP Return Calculator helps calculate potential returns on your investments, providing accurate insights into how your SIP investment can grow",
  keywords: "SIP Return Calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
