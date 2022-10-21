import type { AppProps } from 'next/app'
import { NhostNextProvider, NhostSession } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'

import nhost from '../nhost'
import { UserProvider } from '../../UserProvider'
import '../styles/globals.css'

interface CustomAppProps {
  nhostSession: NhostSession
}

function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {
  
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
