import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ContextProvider from "../Context/ContextProvider";
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  return (
      <Provider session={session}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </Provider>
      )
}
export default MyApp;
