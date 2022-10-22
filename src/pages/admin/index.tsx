import { useQuery } from '@apollo/client'
import { NextPage } from 'next'
import Link from 'next/link'

import withAuth from '../../../withAuth'
import Header from '../../components/common/header'
import AdminLayout from '../../components/layout/admin-layout'
import { GET_PROFILE } from '../../graphql/queries'

const Dashboard: NextPage = () => {
  const { loading, error, data} = useQuery(GET_PROFILE)
  let profile = data?.profile ?? []
  
  return (
    <AdminLayout>
      <div className="flex justify-center flex-col w-full pt-4 max-w-[1200px] mx-auto">
        <Header title="Dashboard" />
        <div>
          <Link href="/admin/profile">
            <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Total Sea Animals Profiles
              </div>  
              <div className="mb-2 text-2xl text-center font-bold tracking-tight text-orange-500">
                {profile?.length ? profile?.length : 0 }
              </div>
            </a>
          </Link>
        </div>
      </div>
    </AdminLayout>
  )
}

export default withAuth(Dashboard)