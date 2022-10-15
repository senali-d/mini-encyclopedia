interface CardHorizontalProps {
  image: string;
  title: string;
  description: string;
}

const CardHorizontal = ({ image, title, description }: CardHorizontalProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

interface CardVerticalProps {
  image: string;
  description: string;
  index: number;
}

const CardVertical = ({ image, description, index }: CardVerticalProps) => {
  return (
    <div className="flex flex-row w-full">
      <div className={`w-1/3 flex order-${index%2 === 0 ? '2' : '1'}`}>
        <img src={image} alt="image" />
      </div>
      <div className={`w-2/3 flex order-${index%2 === 0 ? '1' : '2'} items-center`}>
        <p className="px-5 text-white">{description}</p>
      </div>
    </div>
  )
}

export { CardHorizontal, CardVertical };

