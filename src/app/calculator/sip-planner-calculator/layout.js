import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Use Our SIP Planner to Create a Smart Investment Strategy",
  description:
    "A SIP Planner is a simple tool that helps individuals calculate the potential returns on mutual fund investments made through a Systematic Investment Plan",
  keywords: "SIP Planner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
