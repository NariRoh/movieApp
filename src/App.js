import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster:   "https://upload.wikimedia.org/wikipedia/en/0/06/Ultimate_Matrix_Collection_poster.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster:   "https://resizing.flixster.com/LtoVIF3TxiP3c9wtzPscteMXqG4=/206x305/v1.bTsxMTE2ODAyOTtqOzE3Njc5OzEyMDA7ODAwOzEyMDA"
  },
  {
    title: "Oldboy",
    poster:   "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  {
    title: "Star Wars",
    poster:   "http://img.moviepostershop.com/star-wars-movie-poster-1977-1010460445.jpg"
  },

]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
