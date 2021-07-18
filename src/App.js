import React, { Component } from 'react';
import './App.css';
import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';
import Loader from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';
import Button from 'components/Button';

const BASE_URL = 'https://pixabay.com/api';
const KEY_API = '21851432-4720cbd8c8a1bfa0aa0ff2c82&';

export default class App extends Component {
  state = {
    images: [],
    pictureName: '',
    page: 1,
    loading: false,
    error: null,
  };

  // componentDidMount() {
  //   const url = `${BASE_URL}/?q=${this.state.pictureName}&page=${this.state.page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(images => this.setState({ images: images.hits }));
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pictureName !== this.state.pictureName) {
      this.setState({ loading: true, images: [], page: 1 });
      const url = `${BASE_URL}/?q=${this.state.pictureName}&page=${this.state.page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`;
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Нет изображений с запросом ${this.state.pictureName}`),
          );
        })
        .then(images => this.setState({ images: images.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
    if (prevState.page !== this.state.page) {
      const url = `${BASE_URL}/?q=${this.state.pictureName}&page=${this.state.page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`;
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Нет изображений с запросом ${this.state.pictureName}`),
          );
        })
        .then(images =>
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
          })),
        )
        .catch(error => this.setState({ error }));
    }
  }

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  imageTotalList = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    return (
      <div className="App">
        {this.state.error && <h1>{this.state.error.message}</h1>}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={this.state.images}
          pictureName={this.state.pictureName}
        />
        {this.state.images.length > 0 && (
          <Button onClickImage={this.imageTotalList} />
        )}
        {this.state.loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={150}
            width={150}
            className={css.loader}
          />
        )}
      </div>
    );
  }
}
