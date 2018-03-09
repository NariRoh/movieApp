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
    // Fetch() returns a promise, A promise() gives you the abaility to do .then and .catch(to handle sinarios)

    // fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(err => console.log(err))

    // To avoid CALLBACK HELL we use async & await
    // spread your functions  which are inside componentDidMount
    this._getMovies();
  }

  // 👇 _underscore for function name: to make React fn and your own fn different since React has lots of functions
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      // console.log(movie);
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
      />
    })
    /*
      👆 same as,
      const movies = [<Movie props />, <Movie props />]
    */
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    //
    this.setState({
      // movies: movies
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    .then(json => json.data.movies)
    // .then(json => json.data.movie)
    // arrow function if there is no {}, no need to put 'return '
    .catch(err => console.log(err))
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
        {/* 👆 for that you need a state object whatever it's empty state = {} */}
      </div>
    );
  }
}

export default App;
