import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const color = '#6a06fa';
export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="Habi" content="Habi es la mejor empresa" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content={color} />
          <meta name="apple-mobile-web-app-status-bar" content={color} />
          <meta name="theme-color" content={color} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
