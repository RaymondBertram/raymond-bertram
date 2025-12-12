import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Providers } from "@/contexts/Providers";

import "../app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
