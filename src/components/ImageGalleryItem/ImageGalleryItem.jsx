import React, { Component } from 'react'
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'
import Modal from "components/Modal"


export default class ImageGalleryItem extends Component {
  state = {
    id: this.props.id,
    url: this.props.url,
    largeImageURL: this.props.largeImageURL,
    pictureName: this.props.pictureName,
    status: 'idle'
  }

  // Метод добавления слушателя keydown на window

  componentDidMount() {   
    window.addEventListener('keydown', this.handleKeyPressESC);
  }

  // Метод снятия слушателя keydown с window

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPressESC);
  }

  // Метод для открытия модального окна

  openModal = () => {
    this.setState({ status: 'resolved' })
  }

   // Метод для закрытия модального окна по клику мышки
  
onClickCloseModal = () => { 
    this.setState({status: 'idle'})
  }

// Метод для закрытия модального окна по нажатию клавиши Escape
  
  handleKeyPressESC = e => {    
    if (e.key === "Escape") { this.setState({status: 'idle'}) }
  };


  render() {
    const {id, url, largeImageURL, pictureName, status } = this.state

    if (status === 'idle') {
      return  <>
     <li key = {id} className={css.imageGalleryItem}>
          <img src={url} alt={pictureName} className={css.imageGalleryItemImage} onClick={ this.openModal} />
        </li>       
        </>
    }

    if (status === 'resolved') {
      return  <Modal largeImageURL={largeImageURL} pictureName={ pictureName} onClickModal={this.onClickCloseModal} onChange={this.handleKeyPressESC } />
    }    
  }
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    pictureName: PropTypes.string.isRequired,

}







