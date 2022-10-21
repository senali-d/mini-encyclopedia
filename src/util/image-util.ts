import nhost  from '../nhost'

const getImage = (image: string) => {
  const imageUrl = nhost.storage.getPublicUrl({ fileId: image }) 
  if(imageUrl) {
    return imageUrl
  }
}

export { getImage }