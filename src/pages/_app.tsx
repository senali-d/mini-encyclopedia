import type { AppProps } from 'next/app'
import { NhostNextProvider, NhostClient } from '@nhost/nextjs'

import '../styles/globals.css'

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <Component {...pageProps} />
    </NhostNextProvider>
  )
}

export default MyApp
