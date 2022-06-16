import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Script from "next/script";
import Head from 'next/head';
import type { AppProps } from "next/app";
import { pageview } from '../lib/gtag.client';
import config from '../lib/config';

const APP_TITLE = 'Dominic New App';
const APP_DESCRIPTION = 'Dominic New App';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Dominic Nguyen</title>
        <meta name="title" content={APP_TITLE} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://domng.net" />
        <meta property="og:title" content={APP_TITLE} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:image" content="https://domng.net/images/seo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property='twitter:name' content='domnguyen5653' />
        <meta property="twitter:url" content="https://twitter.com/domnguyen5653" />
        <meta property="twitter:title" content={APP_TITLE} />
        <meta property="twitter:description" content={APP_DESCRIPTION} />
        <meta property="twitter:image" content="https://domng.net/images/seo.png" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main className="">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;