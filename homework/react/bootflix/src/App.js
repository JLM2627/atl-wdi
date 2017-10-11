import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: []
      
    };
  } 
 /*  componentWillMount() {
    axios.get("http://www.omdbapi.com/apikey") 
  } */
  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = () => {
      axios.get('http://www.omdbapi.com/?apikey=[yourkey]&t=[title]', {
          params: {
            apikey: "",
            t: "title"
          }

          })
          .then((response)=>{
            const movie = response.data.films;
            this.setState({movie: movie});
            
          })
          .catch((error)=>{
            console.log("error", error);
          });
      
    } 
      
        
  
   
   

 /*  searchById = () => {
    console.log("Search by ID");
  } */

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    const movie = rthis.state.movies.map(())
    return (
      <div className="App">
        <Header />
        <Search />
        <Movie />
      </div>
    )
  }
  
}

export default App;
