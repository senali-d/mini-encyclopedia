import { useState } from "react"
import { AiFillGithub } from "react-icons/ai"

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" className="flex items-center">
          <img src="/me-logo.png" className="mr-3 h-6 sm:h-9" alt="Mini Encyclopedia Logo" />
          <span className="self-center text-[14px] uppercase font-semibold whitespace-nowrap text-white">Mini Encyclopedia</span>
      </a>
      <div className="flex md:order-2">
          <button type="button" className="text-white bg-[#f99839] hover:bg-[#f3810f] focus:ring-4 focus:outline-none focus:ring-[#f99839] font-semibold rounded-lg text-sm px-2.5 py-2.5 text-center mr-3 md:mr-0"><AiFillGithub size={20} /></button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg bg-gray-100 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={handleClick}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
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



