interface CardHorizontal {
  image: string;
  title: string;
  description: string;
}

const CardHorizontal = ({ image, title, description }: CardHorizontal) => {
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

export { CardHorizontal }
