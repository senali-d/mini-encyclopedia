import { useQuery } from '@apollo/client'

import { GET_PROFILE } from '../graphql/queries'
import { CardHorizontal } from '../components/common/card'
import Header from '../components/common/header'
import Layout from '../components/layout/layout'
import Spinner from '../components/common/spinner'

const SeaAnimals = () => {
  const { loading: isLoadingProfiles, error, data } = useQuery(GET_PROFILE)
  let profile = data?.profile ?? []
  return (
    <Layout>
      <div className="flex pt-[72px] justify-center items-center w-full bg-[url('/img/sea-banner.jpg')] bg-cover bg-fixed">
        <div className="mx-2 max-w-[1200px] flex w-full">
          <div
            className={`min-h-[calc(100vh-150px)] pt-4 ${
              profile.length > 0 ? "" : "w-full"
            }`}
          >
            <Header title="Sea Animals" />
            {isLoadingProfiles ? (
              <div className="flex h-[calc(100%-150px)] justify-center items-center">
                <Spinner loading={isLoadingProfiles} />
              </div>
            ) : error ? (
              <p className="my-6 text-red-500">
                Something went wrong. Try to refresh the page.
              </p>
            ) : profile.length > 0 ? (
              <div className="flex flex-wrap justify-center lg:justify-start">
                {profile.map((p: {id: string, title: string; description: string, image: string}) => (
                  <CardHorizontal
                    key={p.id}
                    id={p.id}
                    image={p.image}
                    title={p.title}
                    description={p.description}
                  />
                ))}
              </div>
            ) : (
              <p className="my-6 text-white">No profile yet.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SeaAnimals
