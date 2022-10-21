import type { AppProps } from 'next/app'
import { NhostNextProvider } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'

import nhost from '../nhost'
import { UserProvider } from '../../UserProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </NhostApolloProvider>
    </NhostNextProvider>
  )
}

export default MyApp
