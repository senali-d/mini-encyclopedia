import { CardHorizontal } from '../components/common/card'
import Header from '../components/common/header'
import Layout from '../components/layout/layout'

const SeaAnimals = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center w-full bg-[url('/img/sea-banner.jpg')] bg-cover bg-fixed">
        <div className="mx-2 max-w-[1200px]">
          <div className="min-h-[calc(100vh-150px)] pt-4">
            <Header title="Sea Animals" />
            <div className="flex flex-wrap justify-center lg:justify-between">
              <CardHorizontal image="/img/encyclopedia.jpg" title="Seahorse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
              <CardHorizontal image="/img/encyclopedia.jpg" title="Seahorse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
              <CardHorizontal image="/img/encyclopedia.jpg" title="Seahorse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
              <CardHorizontal image="/img/encyclopedia.jpg" title="Seahorse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SeaAnimals
