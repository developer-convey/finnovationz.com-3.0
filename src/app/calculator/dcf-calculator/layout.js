import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discover Free DCF Calculator | Discounted Cash Flow Calculator",
  description:
    " Our DCF Calculator is designed to simplify complex financial analysis, empowering you to make informed decisions confidently. Try it now!",
  keywords: "DCF Calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
