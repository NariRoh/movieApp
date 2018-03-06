import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

  static propTypes = {
    // title: PropTypes.string,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}


class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    return(
      <img src={this.props.poster} />
      // <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg" />
    );
  }
}

export default Movie;
