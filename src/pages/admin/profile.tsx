import { ChangeEvent, useState } from 'react'
import { NextPage } from 'next'
import { useUserData } from '@nhost/react'
import { useMutation } from '@apollo/client'

import nhost from '../../nhost'
import withAuth from '../../../withAuth'
import { CREATE_PROFILE } from '../../graphql/mutation'
import { ProfileProps } from '../../types/types'
import Header from '../../components/common/header'
import Input from '../../components/common/input'
import Textarea from '../../components/common/textarea'
import AdminLayout from '../../components/layout/admin-layout'
import Spinner from '../../components/common/spinner'

const initialStateProfile = {
  title: '',
  description: '',
  image: '',
  facts: [
    {
      fact: '',
    }
  ]
}

const Profile: NextPage = () => {
  const [data, setData] = useState<ProfileProps>(initialStateProfile)
  const [createProfile, { data: profileData, loading, error }] = useMutation(CREATE_PROFILE);

  const user = useUserData()

   const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>):void => {
    setData((data: ProfileProps) => {
      return { ...data, [e.target.name]: e.target.value }
    })
  }

  const handleUpload = async(e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if(file) {
      const {error, fileMetadata } = await nhost.storage.upload({ file })
      setData((data: ProfileProps) => {
        return { ...data, [e.target.name]: fileMetadata?.id }
      })
    }
  }

  const handleClick = () => {
    if (!user) return

    return createProfile({
      variables: {
        object: data
      }
    })
  }


  return (
    <AdminLayout>
      <div className="flex justify-center flex-col w-full pt-4 max-w-[1200px] mx-auto">
        <Header title="Sea Horse" />
        <div>
          <div className="w-1/2">
            <Input
              type="file"
              name="image"
              className="profile-input mx-auto mr-0 relative top-[25px] mt-[-20px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] rounded-full flex bg-[#45576f] hover:cursor-pointer"
              accept="image/*"
              onChange={handleUpload}
            />
            <img
              src={
                data.image === ''
                  ? "/img/placeholder-image.png"
                  : data.image
              }
              className="w-full md:w-[600px] h-auto rounded-3xl mb-5"
            />
            <Input
              type="text"
              name="title"
              required
              onChange={handleChange}
              placeholder="@Title"
            />
            <Textarea
              name="description"
              rows={4}
              placeholder="@your description"
              onChange={handleChange}
            />
            <button disabled={loading} className="max-w-1/3 inline-flex justify-center items-center rounded-md py-3 px-5 text-white bg-[#f99839] hover:bg-[#ee851c] focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed my-2" onClick={handleClick}>
              {loading ? <Spinner loading={loading} type="clip" /> : 'Create Profile'}
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default withAuth(Profile)