import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children = null }: any) => {
  return (
    <>
      <Navbar isAdmin={false} />
      <main className="min-h-[calc(100vh-78px)]">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
