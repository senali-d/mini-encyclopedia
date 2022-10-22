import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import { GET_PROFILE_WITH_FACTS } from '../../graphql/queries'
import { CardVertical } from '../../components/common/card'
import Header from '../../components/common/header'
import Layout from '../../components/layout/layout'
import Spinner from '../../components/common/spinner'

const Profile = () => {
  const router = useRouter();
  const { slug } = router.query

  const { loading: isLoadingProfile, error, data } = useQuery(GET_PROFILE_WITH_FACTS, {
    variables: {
      id: slug
    }
  })
  let profile = data?.profile_by_pk ?? ""

  return (
    <Layout>
      <div className="flex pt-[72px] items-center justify-center bg-[url('/img/sea-banner.jpg')] bg-cover bg-fixed">
        <div className="mx-2 max-w-[1200px] w-full">
          <div className="min-h-[calc(100vh-150px)] pt-4 pb-10 space-y-5 w-full">
            {isLoadingProfile ? (
              <div className="flex h-[calc(100%-150px)] justify-center items-center">
                <Spinner loading={isLoadingProfile} />
              </div>
            ) : error ? (
              <p className="my-6 text-red-500">
                Something went wrong. Try to refresh the page.
              </p>
            ) : profile !== null ? (
              <>
                <Header title={`Facts about ${profile.title}`} />
                <div className="text-white text-xl font-medium">{profile.description}</div>
                <div className="flex flex-wrap justify-center lg:justify-between">
                  {profile.facts.map((fact: {id: string, fact: string;}, index: number) => (
                    <CardVertical 
                      key={fact.id}
                      image={profile.image}
                      description={fact.fact}
                      index={index}
                    />
                  ))}
                </div>
              </>
            ) : (
              <p className="my-6 text-white">No profile facts yet.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
