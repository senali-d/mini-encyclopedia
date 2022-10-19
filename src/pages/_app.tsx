import type { AppProps } from 'next/app'
import { NhostNextProvider, NhostClient, NhostSession } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'

import { UserProvider } from '../../UserProvider'
import '../styles/globals.css'

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
})

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
