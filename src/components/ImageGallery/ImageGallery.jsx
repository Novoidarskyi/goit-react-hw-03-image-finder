import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';

  

const ImageGallery = ({ images, pictureName }) => {
 
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem id={id} url={webformatURL} largeImageURL = {largeImageURL} pictureName ={pictureName} />
             ))}
    </ul>
  );
};

export default ImageGallery;

