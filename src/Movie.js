import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return(
      <div>
        <MoviePoster />
        <h1>hello this is a movie</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return(
      <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg" />
    );
  }
}

export default Movie;
