import Header from '../components/common/header'
import Layout from '../components/layout/layout'

const About = () => {
  return (
    <Layout>
      <div className="flex pt-[72px] justify-center items-center w-full bg-[url('/img/sea-banner.jpg')] bg-cover bg-fixed">
        <div className="mx-2 max-w-[1200px] flex w-full">
          <div
            className={`min-h-[calc(100vh-150px)] pt-4`}
          >
            <Header title="About" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
