import { useEffect, useState } from 'react'
import { useSignOut } from '@nhost/nextjs'
import { AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

import { useUserContext } from '../../../UserProvider'

interface NavbarProps {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [show, setShow] = useState<boolean>(false)
  const [isTop, setIsTop] = useState<boolean>(false)
  
  const { user }: any = useUserContext();
  const { signOut } = useSignOut()

  const mainMenuItems = [
    {
      label: "Sea Animals",
      href: "/sea-animals",
    },
  ]

  const adminMenuItems = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Logout",
      onClick: signOut,
    },
  ]

  const handleClick = () => {
    setShow(!show)
  }

  const changeNavBg = () => {
    window.scrollY >= 10 ? setIsTop(true) : setIsTop(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg)
    return () => {
      window.removeEventListener("scroll", changeNavBg)
    }
  }, [])

  return (
    <nav
      className={`px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 shadow-2xl ${
        isTop || isAdmin ? "bg-[#6d85a7]" : "transparent"
      }`}
    >
      <div className="max-w-[1200px] flex flex-wrap items-center mx-auto">
        <a href="/" className="flex items-center flex-1">
          <img
            src="/me-logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Mini Encyclopedia Logo"
          />
          <span className="self-center text-[14px] uppercase font-semibold whitespace-nowrap text-white">
            Mini Encyclopedia
          </span>
        </a>
        <div className="flex md:order-2">
          <a
            target="_blank"
            href="https://github.com/senali-d/mini-encyclopedia"
          >
            <button
              type="button"
              className="text-white bg-[#f99839] hover:bg-[#f3810f] focus:ring-4 focus:outline-none focus:ring-[#f99839] font-semibold rounded-lg text-sm px-2 py-2.5 text-center mr-3 md:mr-0"
            >
              <AiFillGithub size={20} />
            </button>
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg bg-gray-100 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={handleClick}
          >
            <GiHamburgerMenu size={20} />
          </button>
        </div>
        <div
          className={`${
            show ? "block" : "hidden"
          } justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
            {isAdmin ? (
              adminMenuItems.map((item) => (
                <li>
                  {item.href ? (
                    <Link href={item.href}>
                      <a className="block py-2 pr-4 pl-3 md:text-white rounded md:bg-transparent md:p-0">
                        {item.label === "Profile" ? <span>{user.displayName}</span> : <span>{item.label}</span> }
                      </a>
                    </Link>
                  ) : (
                    <button onClick={item.onClick}>
                      <span className="block py-2 pr-4 pl-3 md:text-white rounded md:bg-transparent md:p-0">
                        {item.label}
                      </span>
                    </button>
                  )}
                </li>
              ))
            ) : (
              mainMenuItems.map(item => (
                <li>
                  <Link href={item.href}>
                      <a className="block py-2 pr-4 pl-3 md:text-white rounded md:bg-transparent md:p-0">
                        <span>{item.label}</span>
                      </a>
                    </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
