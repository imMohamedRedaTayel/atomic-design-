import Layout from '@/components/templates/layout';
import { RouteGuard } from '@/config/routeGuard';
import '@/styles/globals.scss'
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title> Atomic Design </title>
      </Head>
      {router.pathname === '/login' ?
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
        :
        <Layout>
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </Layout>
      } 
    </>
  )
}
