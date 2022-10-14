import type { NextPage } from 'next'
import Head from 'next/head'
import { GradientButton } from '../components/common/button'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Mini Encyclopedia</title>
        <meta name="description" content="mini mncyclopedia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh] w-full">
        <div className="h-[100vh] w-full absolute bg-[#6d86a8] opacity-70">
        </div>
        <div className="flex justify-center items-center h-[100vh] w-full bg-[url('/img/encyclopedia.jpg')] bg-cover">
          <div className="text-center relative z-10 max-w-[800px]">
            <h1 className="text-4xl md:text-5xl mb-5 leading-12 uppercase font-medium text-white px-2">
              Welcome to <br/> Mini Encyclopedia!
            </h1>
            <h2 className="text-md mb-5 uppercase font-medium text-white px-3">
              Mini Encyclopedia is a web site that provides knowledge of sea animals.
            </h2>
            <GradientButton title="Explore" link="/" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
