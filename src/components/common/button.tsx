import Link from 'next/link'

interface GradientButton {
  title: string;
  link: string;
}

const GradientButton = ({ title, link }: GradientButton) => {
  return (
    <Link href={link}>
      <a className="relative inline-flex items-center justify-center px-16 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-yellow-500 hover:cursor-pointer">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-yellow-600 to-orange-700"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-orange-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">{title}</span>
      </a>
    </Link>
  )
}

export { GradientButton }
