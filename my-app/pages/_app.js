import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "material-dashboard/assets/css/material-dashboard.css";
import { useEffect } from "react";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </MoralisProvider>
  );
}
