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
    <div className="flex flex-col sm:flex-row w-full">
      <div className={`w-full sm:w-1/3 flex ${index%2 === 0 ? 'sm:order-2' : 'sm:order-1'}`}>
        <img src={image} alt="image" className="w-[100%] sm:auto max-w-[300px] mx-auto" />
      </div>
      <div className={`w-full sm:w-2/3 flex ${index%2 === 0 ? 'sm:order-1' : 'sm:order-2'} items-center`}>
        <p className="px-5 text-white text-center sm:text-left">{description}</p>
      </div>
    </div>
  )
}

export { CardHorizontal, CardVertical };

