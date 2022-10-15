interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <h1 className="font-semibold text-5xl pb-5 tracking-tight text-white">{title}</h1>
  )
}

export default Header