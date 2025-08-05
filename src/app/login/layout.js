import { Inter } from "next/font/google";
import Meta from "../../component/Meta";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Login",
  description:
    "User login page for secure authentication.",
  keywords: "login, authentication, user sign-in",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
