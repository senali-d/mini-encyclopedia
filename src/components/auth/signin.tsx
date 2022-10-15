import { SetStateAction, useState } from 'react'
import { useRouter } from 'next/router'
import { useSignInEmailPassword } from '@nhost/nextjs'
import Link from 'next/link'

import Input from '../common/input'
import Spinner from '../common/spinner'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const { signInEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } =
    useSignInEmailPassword()

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    await signInEmailPassword(email, password)
  }

  if (isSuccess) {
    router.push('/dashboard')
    return null
  }

  const disableForm = isLoading || needsEmailVerification

  return (
    <div className="w-full mx-auto max-w-lg min-h-[calc(100vh-126px)] pt-[72px] flex items-center">
      <div className="w-full flex flex-col items-center px-4 py-5 sm:px-8 sm:bg-white sm:rounded-md sm:shadow">
        {needsEmailVerification ? (
          <p className="text-center text-gray-500">
            Please check your mailbox and follow the verification link to verify your email.
          </p>
        ) : (
          <>
            <form onSubmit={handleOnSubmit} className="w-full mt-2">
              <h1 className="font-semibold mb-3 text-3xl tracking-tight text-gray-500 text-center">Sign In</h1>
              <Input
                type="email"
                label="Email address"
                value={email}
                onChange={(e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)}
                disabled={disableForm}
                required
              />
              <Input
                type="password"
                label="Password"
                value={password}
                onChange={(e: { target: { value: SetStateAction<string> } }) => setPassword(e.target.value)}
                disabled={disableForm}
                required
              />
              <button type="submit" disabled={disableForm} className="w-full inline-flex justify-center items-center rounded-md p-3 text-white bg-[#f99839] hover:bg-[#ee851c] focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed mt-4">
                {isLoading ? <Spinner loading={isLoading} type="clip" /> : 'Sign in'}
              </button>

              {isError ? <p className="mt-4 text-center text-red-600">{error?.message}</p> : null}
            </form>
          </>
        )}
        <p className="text-[#6B7280] text-center mt-2">
          No account yet?{' '}
          <Link href="/signup">
            <a className="text-[#f99839] hover:tex-[#a85706] hover:underline">Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn