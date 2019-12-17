import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Movies from "./component/movies";
import "./App.css";

class App extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
