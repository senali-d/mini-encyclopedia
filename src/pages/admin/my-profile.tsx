// import { useMutation } from '@apollo/client'
import { NextPage } from 'next'

import withAuth from '../../../withAuth'
// import { UPDATE_USER_MUTATION } from '../../graphql/mutation'
import Header from '../../components/common/header'
import AdminLayout from '../../components/layout/admin-layout'
import Input from '../../components/common/input'
import { useUserContext } from '../../../UserProvider'
import { ChangeEvent, useState } from 'react'
// import Spinner from '../../components/common/spinner'

const MyProfile: NextPage = () => {
  const { user } = useUserContext()
  const [data, setData] = useState(user)

  // const [mutateUser, { loading: updatingProfile }] = useMutation(UPDATE_USER_MUTATION)

  const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setData((data: any) => {
      return { ...data, [e.target.name]: e.target.value }
    })
  }

  {/* TODO: Update profile */}
  const handleUpdate = () => {
    console.log(data)
  }

  return (
    <AdminLayout>
      <div className="flex justify-center items-center flex-col w-full pt-4 max-w-[1200px] mx-auto">
        <Header title="My Profile" />
        <div className="flex pb-5 flex-col w-full max-w-[800px] mx-auto">
          <Input
            type="text"
            name="firstName"
            required
            onChange={handleChange}
            placeholder="@first name"
            value={data?.metadata?.firstName}
          />
          <Input
            type="text"
            name="lastName"
            required
            onChange={handleChange}
            placeholder="@last name"
            value={data.metadata.lastName}
          />
          <Input
            type="text"
            name="email"
            required
            onChange={handleChange}
            placeholder="@email"
            value={data.email}
            readOnly
          />
          {/* TODO: Update profile */}
          {/* <button
            disabled={updatingProfile}
            className="w-full inline-flex justify-center items-center rounded-md py-3 px-5 text-white bg-[#f99839] hover:bg-[#ee851c] focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed my-2"
            onClick={handleUpdate}
          >
            {updatingProfile ? <Spinner loading={updatingProfile} type="clip" /> : "Update Profile"}
          </button> */}
        </div>
      </div>
    </AdminLayout>
  )
}

export default withAuth(MyProfile)