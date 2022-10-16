import type { AppProps } from 'next/app'
import { NhostNextProvider, NhostClient, NhostSession } from '@nhost/nextjs'

import '../styles/globals.css'
import { UserProvider } from '../../UserProvider'

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
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </NhostNextProvider>
  )
}

export default MyApp
