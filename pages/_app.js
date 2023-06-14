import Head from 'next/head';
import { useRouter } from 'next/router'; // Moved this import up
import { CartProvider } from '../context/CartContext';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <CartProvider>
      <>
        <Head>
          <title>شركة سنابل</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 "
          />
          <link rel="icon" href="/logo.png" />
          <link rel="preconnect" href="https://stijndv.com" />
          <link
            rel="stylesheet"
            href="https://stijndv.com/fonts/Eudoxus-Sans.css"
          />
        </Head>

        <Component {...pageProps} />

        {currentRoute !== '/' && currentRoute !== '/cart' && (
          <ShoppingCartIcon />
        )}
      </>
    </CartProvider>
  );
};

export default MyApp;