import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Mini Encyclopedia</title>
        <meta name="description" content="mini mncyclopedia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
    </div>
  )
}

export default Home
