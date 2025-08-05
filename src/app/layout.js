import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import Meta from "./components/meta";
import { ToastContainer } from 'react-toastify';
import DiwaliOffSlider from "./components/coursetopofferslider";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body className={inter.className}>
        {/* ✅ DiwaliOffSlider should go inside <body> */}

        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
