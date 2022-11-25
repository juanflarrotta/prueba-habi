import Head from "next/head";
import '@styles/globals.scss';
import { store } from "redux/store";
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Quiero trabajar en Habi</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp