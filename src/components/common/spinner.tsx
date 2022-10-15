import CircleLoader from 'react-spinners/CircleLoader'
import ClipLoader from 'react-spinners/ClipLoader'

interface SpinnerProps {
  loading: boolean;
  color: string;
  type: string;
}


const Spinner = ({ loading, color, type }: SpinnerProps) => {
  switch (type) {
    case 'circle':
      return <CircleLoader color={color} loading={loading} />
    case 'clip':
      return <ClipLoader color={color} loading={loading} />
    default:
      return <CircleLoader color={color} loading={loading} />
  }
}

export default Spinner

Spinner.defaultProps = {
  loading: false,
  color: 'white',
  type: 'clip',
}