import { useEffect, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false)
  const [isTop, setIsTop] = useState<boolean>(false)

  const handleClick = () => {
    setShow(!show)
  }

  const changeNavBg = () => {
    window.scrollY >= 10 ? setIsTop(true) : setIsTop(false)
   }
 
   useEffect(() => {
     window.addEventListener('scroll', changeNavBg);
     return () => {
       window.removeEventListener('scroll', changeNavBg);
     }
   }, [])

  return (
    <nav className={`px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 ${isTop ? 'bg-white' : 'transparent'}`}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" className="flex items-center">
        <img src="/me-logo.png" className="mr-3 h-6 sm:h-9" alt="Mini Encyclopedia Logo" />
        <span className={`self-center text-[14px] uppercase font-semibold whitespace-nowrap ${isTop ? 'text-black' : 'text-white' }`}>Mini Encyclopedia</span>
      </a>
      <div className="flex md:order-2">
          <a target="_blank" href="https://github.com/senali-d/mini-encyclopedia">
            <button type="button" className="text-white bg-[#f99839] hover:bg-[#f3810f] focus:ring-4 focus:outline-none focus:ring-[#f99839] font-semibold rounded-lg text-sm px-2 py-2.5 text-center mr-3 md:mr-0"><AiFillGithub size={20} /></button>
          </a>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg bg-gray-100 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={handleClick}>
            <GiHamburgerMenu size={20} />
        </button>
      </div>
      <div className={`${show ? 'block' : 'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
          <li>
            <a href="/" className="block py-2 pr-4 pl-3 md:text-white rounded md:bg-transparent md:p-0">Home</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar



