import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children = null }: any) => {
  return (
    <>
      <Navbar isAdmin={false} />
      <main className="min-h-[calc(100vh-78px)] pt-[72px] bg-[#6d86a8] opacity-75">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
