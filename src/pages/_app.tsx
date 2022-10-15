import type { AppProps } from 'next/app'
import { NhostNextProvider, NhostClient } from '@nhost/nextjs'
import { useRouter } from 'next/router'

import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'
import '../styles/globals.css'

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router
  
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <Navbar />
      <Component {...pageProps} />
      {pathname === '/' ? '' : <Footer />}
    </NhostNextProvider>
  )
}

export default MyApp
