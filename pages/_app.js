import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Layout>
  );
}
