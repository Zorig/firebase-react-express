import { AppProps } from "next/app";
import initAuth from "utils/initAuth";
import "../styles/globals.css";

initAuth();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
