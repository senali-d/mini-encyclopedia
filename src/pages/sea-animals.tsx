import { CardHorizontal } from "../components/common/card"
import Header from "../components/common/header"

const SeaAnimals = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[url('/img/sea-banner.jpg')] bg-cover bg-fixed">
      <div className="mx-2 max-w-[1200px]">
        <div className="mt-[100px] min-h-[calc(100vh-100px)]">
          <Header title="Sea Animals" />
          <div className="flex flex-wrap justify-center lg:justify-between space-x-4">
            <CardHorizontal image="/img/encyclopedia.jpg" title="Seahorse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
            <CardHorizontal image="/img/encyclopedia.jpg" title="Seahorse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
            <CardHorizontal image="/img/encyclopedia.jpg" title="Seahorse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
            <CardHorizontal image="/img/encyclopedia.jpg" title="Seahorse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeaAnimals
