import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ContextProvider from "../Context/ContextProvider";

function MyApp({ Component, pageProps }) {
  return (
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
      )
}

export default MyApp;
