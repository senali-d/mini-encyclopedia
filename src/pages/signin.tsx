import Head from 'next/head'
import SignIn from '../components/auth/signin'

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>

      <div className="flex items-center justify-center bg-[#6d85a7]">
        <SignIn />
      </div>
    </>
  )
}

export default SignInPage