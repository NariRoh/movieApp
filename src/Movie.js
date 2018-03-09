// import React, { Component } from 'react';
// 👇 with functional component
import React from 'react';

import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
//
//   // static propTypes = {
//   //   // title: PropTypes.string,
//   //   title: PropTypes.string.isRequired,
//   //   poster: PropTypes.string.isRequired
//   // }
//
//   render() {
//     console.log(this.props);
//     return(
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

function Movie({poster, title, genres, synopsis}) {
  return (
    <div className="Movie">
      <div className="Movie__Colums">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Colums">
        <h1>{title}</h1>
        <div className="Movie__Colums">
          {genres.map((genre, index) => <MovieGenre genre={genre}  key={index} />)}
        </div>
        <p className="Movie__Synopsis">
          {synopsis}
        </p>
      </div>

    </div>
  );
}

function MovieGenre({genre}) {
  return (
    <span className="Movie_Genre">{genre}</span>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

/*
  * Samrt and Dumb Components
  when a component has a state, it's a smart one. When it only has props instead it's a Dumb one.
  For the dumb component(no state only props), instead of using a class component we can chain them into a function component(stateless functional component)
*/
// class MoviePoster extends Component {
//
//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   }
//
//   render() {
//     return(
//       <img src={this.props.poster} alt={this.props.title} />
//       // <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg" />
//     );
//   }
// }

/*
  Some components exist only to return something which don't need functions like componentWillMount, componentDidMount, update the state or render fn etc. All they need is just one props(like poster: needs one props and one HTML tag). All they need to do is to return somethign like a html
*/

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  );
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Movie;
