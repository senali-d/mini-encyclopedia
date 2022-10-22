import { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { useUserData } from '@nhost/react'
import { useMutation, useQuery } from '@apollo/client'

import nhost from '../../nhost'
import withAuth from '../../../withAuth'
import { CREATE_PROFILE } from '../../graphql/mutation'
import { GET_PROFILE } from '../../graphql/queries'
import { ProfileProps } from '../../types/types'
import Header from '../../components/common/header'
import Input from '../../components/common/input'
import Textarea from '../../components/common/textarea'
import AdminLayout from '../../components/layout/admin-layout'
import Spinner from '../../components/common/spinner'
import { getImage } from '../../util/image-util'

const initialStateProfile = {
  title: '',
  description: '',
  image: '',
  // facts: [
  //   {
  //     fact: '',
  //   }
  // ]
}

const AddProfileForm = ({onChange}: any) => {
  const user = useUserData()
  
  const [data, setData] = useState<ProfileProps>(initialStateProfile)
  const [key, setKey] = useState<number>(0)

  const [createProfile, { data: profileData, loading, error }] = useMutation(CREATE_PROFILE)

  useEffect(() =>{
    if (onChange) {
      onChange(key)
    }
  })

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
    setKey(Math.random())
    return createProfile({
      variables: {
        object: data
      }
    })
  }

  return (
    <div className="w-full md:w-1/2">
      <Input
        type="file"
        name="image"
        className="profile-input mx-auto mr-0 relative top-[25px] mt-[-20px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] rounded-full flex bg-[#45576f] hover:cursor-pointer z-10"
        accept="image/*"
        onChange={handleUpload}
      />
      <Image
        width="600px"
        height="230px"
        src={data.image === "" ? "/img/placeholder-image.png" : getImage(data.image)}
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
      <button
        disabled={loading}
        className="max-w-1/3 inline-flex justify-center items-center rounded-md py-3 px-5 text-white bg-[#f99839] hover:bg-[#ee851c] focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed my-2"
        onClick={handleClick}
      >
        {loading ? <Spinner loading={loading} type="clip" /> : "Create Profile"}
      </button>
    </div>
  )
}

const ProfileTable = ({refetchData}: any) => {
  const { loading: isLoadingProfiles, error, data, refetch, fetchMore } = useQuery(GET_PROFILE, {
    variables: { 
      limit: 3,
      offset:0
     }
  })
  let profile = data?.profile ?? []

  const profileTable = [
    {"label": "Title"},
    {"label": "Description"},
    {"label": "Image"},
    {"label": ""},
  ]

  useEffect(() => {
    refetch()
  }, [refetchData])

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        limit: 3,
        offset: profile.length,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.profile = [
          ...prevResult.profile,
          ...fetchMoreResult.profile,
        ];
        return fetchMoreResult;
      },
    });
  };

  return (
    <div className="w-full md:w-1/2">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {profileTable.map((profile) => (
                <th scope="col" className="py-3 px-6">
                  {profile.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {profile.map((p: any) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {p.title}
                </th>
                <td className="py-4 px-6">{p.description}</td>
                <td className="py-4 px-6">
                  <Image src={getImage(p.image)} width="50" height="50" />
                </td>
                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="max-w-1/3 inline-flex justify-center items-center rounded-md py-3 px-5 text-white bg-[#f99839] hover:bg-[#ee851c] focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed my-2"
        onClick={handleLoadMore}
      >
        Load More
      </button>
    </div>
  )
}

const Profile: NextPage = () => {
  const [key, setKey] = useState<number>(0)
  const eventhandler = (key: number) => {
    setKey(key)
  }

  return (
    <AdminLayout>
      <div className="flex justify-center flex-col w-full pt-4 max-w-[1200px] mx-auto">
        <Header title="Sea Horse" />
        <div className="flex space-x-2 pb-5">
          <AddProfileForm onChange={eventhandler} />
          <ProfileTable refetchData={key} />
        </div>
      </div>
    </AdminLayout>
  )
}

export default withAuth(Profile)