import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery"
import Movie from "./Movie"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie:[]
    }

  }
  componentDidMount() {
    var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
    $.getJSON(url,(nowPlayingData)=>{
      this.setState({
        movies: nowPlayingData.results
      })
      console.log(nowPlayingData.results);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.movie.map(function(movie, index){

        })}
      </div>
    );
  }
}

export default App;
