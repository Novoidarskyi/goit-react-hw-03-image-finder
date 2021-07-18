import css from './Modal.module.css'



const Modal = ({ largeImageURL, pictureName, onClickModal, onChange }) => {
  return (
    <div className={css.overlay} onClick={onClickModal} onKeyDown={onChange}>
  <div className={ css.modal}>
        <img src={largeImageURL} alt={pictureName } />
  </div>
</div>
  )
}

export default Modal
