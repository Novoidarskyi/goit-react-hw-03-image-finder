import React, { Component } from 'react'
import css from './ImageGalleryItem.module.css'
import Modal from "components/Modal"


export default class ImageGalleryItem extends Component {
  state = {
    id: this.props.id,
    url: this.props.url,
    largeImageURL: this.props.largeImageURL,
    pictureName: this.props.pictureName,
    modal: false
  }

   componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPressESC);
  }

  openModal = () => {
    this.setState({modal: true})
  }

onClickModal = () => { 
    this.setState({modal: false})
  }


  handleKeyPressESC = e => {    
    if (e.key === "Escape") { this.setState({modal: false}) }
  };


  render() {
    const {id, url, largeImageURL, pictureName } = this.state
    return (
      <>
     <li key = {id} className={css.imageGalleryItem}>
          <img src={url} alt={pictureName} className={css.imageGalleryItemImage} onClick={ this.openModal} />
        </li>
        {this.state.modal && <Modal largeImageURL={largeImageURL} pictureName={ pictureName} onClickModal={this.onClickModal} onChange={this.handleKeyPressESC } /> }
        </>
    )
  }
}






// const ImageGalleryItem = ({ id, url, pictureName, onChange }) => {
 
//   return (
//     <li key = {id} className={css.imageGalleryItem}>
//       <img src={url} alt={pictureName} className={css.imageGalleryItemImage} onClick={onChange}/>
// </li>
//   )
// }

// export default ImageGalleryItem


