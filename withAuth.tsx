import { useRouter } from 'next/router'
import { useAuthenticationStatus } from '@nhost/nextjs'

import Spinner from './src/components/common/spinner'

export default function withAuth(Component: React.FunctionComponent) {
  return function AuthProtected(props: JSX.IntrinsicAttributes) {
    const router = useRouter()
    const { isLoading, isAuthenticated } = useAuthenticationStatus()

    if (isLoading) {
      return (
        <div className="h-[100vh] flex items-center justify-center">
          <Spinner loading={isLoading} color="#6d86a8" />
        </div>
      )
    }

    if (!isAuthenticated) {
      router.push('/signin')
      return null
    }

    return <Component {...props} />
  }
}