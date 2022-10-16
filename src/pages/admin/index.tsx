import { NextPage } from 'next'

import withAuth from '../../../withAuth'
import Header from '../../components/common/header'
import AdminLayout from '../../components/layout/admin-layout'

const Dashboard: NextPage = () => {
  return (
    <AdminLayout>
      <div className="flex justify-center w-full pt-4 max-w-[1200px] mx-auto">
        <Header title="Dashboard" />
      </div>
    </AdminLayout>
  )
}

export default withAuth(Dashboard)