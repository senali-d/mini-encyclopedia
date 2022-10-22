import Header from '../components/common/header'
import Layout from '../components/layout/layout'

const About = () => {
  return (
    <Layout>
      <div className="flex pt-[72px] justify-center items-center w-full bg-[url('/img/jellyfish.png')] bg-cover bg-fixed">
        <div className="mx-2 max-w-[1200px] flex w-full">
          <div
            className={`min-h-[calc(100vh-150px)] pt-4`}
          >
            <Header title="About" />
            <div className="flex">
              <div className="w-1/2 mt-5"></div>
              <div className="md:w-1/2 mt-5">
                <p className="text-white text-xl font-medium">
                  Mini Encyclopedia is a web site that provides knowledge of sea animals. It provide small introduction about sea animals along with some facts about them. Other than the informative information provide by the site it has introduce new sea animal data into the site. So any one can publish information about any sea animal other than the already in the site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
