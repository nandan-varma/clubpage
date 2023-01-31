import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Layout from '../components/Layout';
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import initFontAwesome from '../utils/initFontAwesome';

initFontAwesome();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
