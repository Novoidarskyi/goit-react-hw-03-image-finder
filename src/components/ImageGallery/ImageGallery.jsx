import css from './ImageGallery.module.css';

const ImageGallery = ({ images, pictureName }) => {

  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL }) => (
        <li key={id}>
          <img src={webformatURL} alt={ pictureName} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
