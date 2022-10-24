import { useEffect, useState } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { FiEdit, FiDelete } from 'react-icons/fi'

import withAuth from '../../../../withAuth'
import { GET_PROFILE } from '../../../graphql/queries'
import Header from '../../../components/common/header'
import AdminLayout from '../../../components/layout/admin-layout'
import Spinner from '../../../components/common/spinner'
import { getImage } from '../../../util/image-util'

const ProfileTable = () => {
  const [isLoadToMore, setIsLoadToMore] = useState(true)
  const { loading, error, data, fetchMore } = useQuery(GET_PROFILE, {
    variables: { 
      limit: 10,
      offset: 0
     }
  })

  let profile = data?.profile ?? []

  const profileTable = [
    {"label": "Title"},
    {"label": "Description"},
    {"label": "Image"},
    {"label": ""},
  ]

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: profile.length,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        setIsLoadToMore(fetchMoreResult.profile.length === 0 ? false : true)
        fetchMoreResult.profile = [
          ...prevResult.profile,
          ...fetchMoreResult.profile,
        ];
        return fetchMoreResult
      },
    })
  }

  const handleUpdate = () => {

  }
  const handleDelete = () => {

  }  

  return (
    <div className="w-full text-center">
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {profileTable.map((profile, index) => (
                    <th scope="col" className="py-3 px-6" key={index}>
                      {profile.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {profile.map((p: any) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={p.id}
                  >
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
                    <td className="w-[100px] space-x-1 py-4 px-5 text-center align-middle">
                      <button
                        onClick={handleUpdate}
                        className="font-medium text-green-600"
                      >
                        <FiEdit size="20" />
                      </button>
                      <button
                        onClick={handleDelete}
                        className="font-medium text-red-600"
                      >
                        <FiDelete size="20" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isLoadToMore ? (
            <button
              className="max-w-1/3 inline-flex justify-center items-center rounded-md py-3 px-5 text-white bg-[#f99839] hover:bg-[#ee851c] focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed my-2"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  )
}

const Profile: NextPage = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col w-full pt-4 max-w-[1200px] mx-auto">
        <Header title="Sea Horse" />
        <ProfileTable />
      </div>
    </AdminLayout>
  )
}

export default withAuth(Profile)