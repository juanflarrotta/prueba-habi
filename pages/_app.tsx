import React from 'react';
import Head from 'next/head';
import '@styles/globals.scss';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { NextPageWithLayout } from 'types';
import { AppProps } from 'next/app';

type CustomAppProps = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Quiero trabajar en Habi</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
