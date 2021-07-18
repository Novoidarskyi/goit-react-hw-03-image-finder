import css from './Button.module.css';

const Button = ({ onClickImage }) => {


  return (
    <button type = "button" className={css.button} onClick={onClickImage}> Load more </button>
  )
}

export default Button

