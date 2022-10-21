import Link from 'next/link'

import { getImage } from '../../util/image-util'

interface CardHorizontalProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

const CardHorizontal = ({ id, image, title, description }: CardHorizontalProps) => {
  return (
    <Link href={`profile/${id}`}>
      <a className="max-w-sm mx-1 rounded overflow-hidden shadow-lg mb-10 bg-white">
          <img className="w-full" src={getImage(image)} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
      </a>
    </Link>
  )
}

interface CardVerticalProps {
  image: string;
  description: string;
  index: number;
}

const CardVertical = ({ image, description, index }: CardVerticalProps) => {
  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className={`w-full sm:w-1/3 flex ${index%2 === 0 ? 'sm:order-1' : 'sm:order-2'}`}>
        <img src={getImage(image)} alt="image" className="w-[100%] sm:auto max-w-[300px] mx-auto" />
      </div>
      <div className={`w-full sm:w-2/3 flex ${index%2 === 0 ? 'sm:order-2 justify-start' : 'sm:order-1 justify-end'} items-center`}>
        <p className="px-5 text-3xl font-semibold text-white text-center sm:text-left">{description}</p>
      </div>
    </div>
  )
}

export { CardHorizontal, CardVertical };

