import { CardVertical } from "../../components/common/card"
import Header from "../../components/common/header"

const Profile = () => {
  return (
    <div className="flex items-center justify-center bg-[url('/img/sea-banner.jpg')] bg-cover bg-fixed">
    <div className="mx-2 mb-10 max-w-[1200px] w-full">
      <div className="mt-[100px] min-h-[calc(100vh-100px)] space-y-5 w-full">
        <Header title="Facts about Seahorse" />
        <CardVertical image="/img/encyclopedia.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." index={1} />
        <CardVertical image="/img/encyclopedia.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." index={2} />
        <CardVertical image="/img/encyclopedia.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." index={3} />
      </div>
    </div>
  </div>
  )
}

export default Profile
