import '@ibm/plex/css/ibm-plex.min.css'
import type { AppProps } from 'next/app'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

	
  body {
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
  }
`

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
