'use client'
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import LoadMap from './Map/LoadMap';

<link
  href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
  rel="stylesheet"
/>;

const theme = extendTheme({
  fonts: {
    body: "'Nanum Gothic', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: '#F7F7F7',
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
