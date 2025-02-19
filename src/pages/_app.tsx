import 'react-modal-video/scss/modal-video.scss';
import "@/styles/globals.css";

import { Poppins } from "next/font/google"; // Import Poppins font
import type { AppProps } from "next/app";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Ubuntu",
    "Fira Sans",
    "Arial",
    "sans-serif",
  ],
});
  export default function App({ Component, pageProps }: AppProps) {
    return (
      <main className={`${poppins.variable} website-main`}> 
       
          <Component {...pageProps} />
        </main>
    )
}
