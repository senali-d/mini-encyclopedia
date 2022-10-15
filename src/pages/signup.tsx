import Head from 'next/head'
import SignUp from '../components/auth/signup'

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <div className="bg-[#6d85a7]">
        <SignUp />
      </div>
    </>
  )
}

export default SignUpPage
