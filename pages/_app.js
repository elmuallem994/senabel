import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CartProvider } from '../context/CartContext';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import Topsesh from '../sections/Topsesh';
import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Script from 'next/script';
import CookieConsent from 'react-cookie-consent';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-PPM6WPDFLW', {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <CartProvider>
      <>
        <Head>
          <title>مجموعة سنابل التجارية</title>
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
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PPM6WPDFLW"
        />
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PPM6WPDFLW');
          `}
        </Script>
        {/* Facebook Pixel Code */}
        <Script strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '208502561679128');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=208502561679128&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel Code */}

        <div className="bg-primary-black hidden md:flex " dir="rtl">
          <Topsesh />
        </div>
        <Component {...pageProps} />
        {currentRoute !== '/' && currentRoute !== '/cart' && (
          <ShoppingCartIcon />
        )}
        <CookieConsent
          location="bottom"
          buttonText="نعم، موافق"
          cookieName="myWebsiteCookieConsent"
          style={{ background: '#2B373B', direction: 'rtl' }}
          buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
          expires={150}
        >
          نطلب إذنك للحصول على تجربة أفضل، تجربة تسوق خاصة بك نحن نستخدم ملفات
          تعريف الارتباط على موقعنا الإلكتروني لنمنحك أفضل تجربة تسوق ممكنة.
        </CookieConsent>
      </>
    </CartProvider>
  );
};

export default MyApp;
