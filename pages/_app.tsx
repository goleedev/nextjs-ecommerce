import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import store from 'state/store';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>NextJS</title>
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <div className="wrapper">
          <Header />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
