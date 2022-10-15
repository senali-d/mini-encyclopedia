import { FaTwitter, FaGithub } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="p-4 bg-[#45576f] sm:p-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-white sm:text-center">
          {`© ${new Date().getFullYear()} `}
          <a href="/" className="hover:underline">
            Mini Encyclopedia™
          </a>
          . All Rights Reserved.
          Design & Developed by @Senali
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://twitter.com/senali_d"
            target="_blank"
            className="text-white hover:text-gray-300"
          >
            <FaTwitter size={30} />
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="https://github.com/senali-d"
            target="_blank"
            className="text-white hover:text-gray-300"
          >
            <FaGithub size={30} />
            <span className="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
