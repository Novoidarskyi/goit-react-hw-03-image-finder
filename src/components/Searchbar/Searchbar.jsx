import css from './Searchbar.module.css';
import { Component } from 'react';


export default class Searchbar extends Component {
  state = {
    inputValue: ''
  };


handleNameChange= e => {
  this.setState({inputValue: e.target.value.toLowerCase()})
}

handleSubmit = e => {
  e.preventDefault();
  this.props.onSubmit(this.state.inputValue);
  this.setState({inputValue: ''});
}

  render() {
    return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"         
          autoComplete="off"
          autoFocus
          value={this.state.inputValue}
          placeholder="Search images and photos"
          onChange={this.handleNameChange}
        />
      </form>
    </header>)
  }
}
