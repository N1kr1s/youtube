import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar' style={{ marginBottom: '10px' }}>
        <form onSubmit={this.handleSubmit} className='ui fluid action input'>
          <input
            type='text'
            placeholder='Search...'
            value={this.state.term}
            onChange={this.handleChange}
          />
          <button className='ui button'>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
