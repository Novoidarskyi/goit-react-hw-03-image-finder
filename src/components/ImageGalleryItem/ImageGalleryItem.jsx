import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ id, url, pictureName }) => {
 
  return (
    <li key = {id} className={css.imageGalleryItem}>
  <img src={url} alt={pictureName} className={css.imageGalleryItemImage} />
</li>
  )
}

export default ImageGalleryItem


