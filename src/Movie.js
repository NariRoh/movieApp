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

function Movie({poster, title}) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
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

function MoviePoster({poster, title}) {
  return (
    <img src={poster} alt={title} />
  );
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;
