import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AdminLayout from "./admin/admin.layout";

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith("/admin")) {
    return <AdminLayout><Component {...pageProps} /></AdminLayout>;
  }
  return <Component {...pageProps} />;
}
