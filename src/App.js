import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()

  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() ->
  // when component gets new props / when component(old and new one) is different, it's true /

  // componentWillMount() {
  //   console.log('will mount');
  //   // when componentWillMount, we'll request API
  // }
  //
  // componentDidMount() {
  //   console.log('did mount');
  //   // means coponent is successfully rendered
  // }

  // state is an object which is inside every React components. whenever the state inside a component changes, the component renders agian

  state = {
    // greeting: 'Hello!',
  }

  // After the component renders
  // add one more movie
  componentDidMount() {
    // setTimeout(() => {
    //   // this.state.greeting = 'something' (X) Do not write state directly!! Use setState()
    //   this.setState({
    //     greeting: 'Hello agian!'
    //   })
    // }, 5000)
    setTimeout(() => {
      this.setState({
        movies: [
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
          }
        ]
        // movies: [
        //   ...this.state.movies,
        //   // 👆 set the state of movies array like this: leave the array as it is (leave the list of the movies) and add one more movie.
        //   // without this line, it will replace the list
        //   {
        //     title: "Trainspotting",
        //     poster: "https://resizing.flixster.com/NCi30AewMxJnsjlAHJLaENLECLU=/206x305/v1.bTsxMTE3NjEwNztqOzE3Njc5OzEyMDA7ODAwOzEyMDA"
        //   }
        //   // ...this.state.movies
        //   // 👆 when this line is here, it adds the new one on the top
        // ]
      })
    }, 5000)
  }

  // 👇 _underscore for function name: to make React fn and your own fn different since React has lots of functions
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    /*
      👆 same as,
      const movies = [<Movie props />, <Movie props />]
    */
    return movies;
  }

  render() {
    // console.log('did render');
    return (
      <div className="App">
        {/* {this.state.greeting} */}
        {/* {this.state.movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })} */}
        {/* whenever the movies are not in the state, we'll show 'Loading' or the list of movies */}
        {/* When you use API, data won't be saved in the state so we used this ternary statement to ask wether we have the data saved or not */}
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
