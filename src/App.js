import React, { Component } from 'react';
import './App.css';
import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';

const BASE_URL = 'https://pixabay.com/api';
const KEY_API = '21851432-4720cbd8c8a1bfa0aa0ff2c82&';

export default class App extends Component {
  state = {
    images: [],
    pictureName: 'dog',
    page: 1,
  };

  componentDidMount() {
    const url = `${BASE_URL}/?q=${this.state.pictureName}&page=${this.state.page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`;
    fetch(url)
      .then(res => res.json())
      .then(images => this.setState({ images: images.hits }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pictureName !== this.state.pictureName) {
      const url = `${BASE_URL}/?q=${this.state.pictureName}&page=${this.state.page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`;
      fetch(url)
        .then(res => res.json())
        .then(images => this.setState({ images: images.hits }));
    }
  }

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={this.state.images}
          pictureName={this.state.pictureName}
        />
      </div>
    );
  }
}
