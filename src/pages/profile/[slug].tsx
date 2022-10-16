import { CardVertical } from '../../components/common/card'
import Header from '../../components/common/header'
import Layout from '../../components/layout/layout'

const Profile = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center bg-[url('/img/sea-banner.jpg')] bg-cover bg-fixed">
        <div className="mx-2 max-w-[1200px] w-full">
          <div className="min-h-[calc(100vh-150px)] pt-4 pb-10 space-y-5 w-full">
            <Header title="Facts about Seahorse" />
            <CardVertical image="/img/encyclopedia.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." index={1} />
            <CardVertical image="/img/encyclopedia.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." index={2} />
            <CardVertical image="/img/encyclopedia.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." index={3} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
