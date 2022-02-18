import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Pokédex</title>
				<link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
