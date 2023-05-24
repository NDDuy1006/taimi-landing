import Head from "next/head";
import { Roboto } from '@next/font/google';
import "styles/style.scss";

const roboto = Roboto({
  weight: '400',
  subsets: ['sans-serif'],
});

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>
      <Component {...pageProps} className={roboto.className} />
    </>
  );
};

export default App;
