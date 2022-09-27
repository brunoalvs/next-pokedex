import { useState } from 'react';
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/components/globalStyles'
import { lightTheme, darkTheme } from '../theme'

function App({ Component, pageProps }: AppProps) {
  const [theme] = useState('light');
  return (
    <>
      <ThemeProvider
        theme={theme === 'light' ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <Head>
          <title>Pokédex</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel='shortcut icon'
            href='/favicon.svg'
            type='image/svg'
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
