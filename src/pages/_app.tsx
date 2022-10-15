import type { AppProps } from 'next/app'
import { NhostNextProvider, NhostClient, NhostSession } from '@nhost/nextjs'
import { useRouter } from 'next/router'

import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'
import '../styles/globals.css'

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
})

interface CustomAppProps {
  nhostSession: NhostSession
}

function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {
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
