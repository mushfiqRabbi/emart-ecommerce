import "./globals.css";
import { Inter } from "next/font/google";
import "/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";
import RootLayoutHeader from "../components/RootLayoutHeader";
import Footer from "../components/Footer";
import AuthProvider from "../components/AuthProvider";
import AllContext from "../contexts/AllContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eMart | E-commerce website",
  description: "Online shopping platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={true}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <AuthProvider>
          <RootLayoutHeader />
          <AllContext>
            {children}
            <Footer />
          </AllContext>
        </AuthProvider>
        <Script
          defer
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.3.1/mdb.min.js"
        ></Script>
      </body>
    </html>
  );
}
