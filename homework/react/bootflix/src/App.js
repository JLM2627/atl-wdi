import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      year: '',
      director: '',
      genre: '',
      plot: ''
      
    }
  } 



  _searchByTitle =(event) =>{
    event.preventDefault()
    console.log('this is searchByTitle')
    const title = event.target.title.value
    axios.get(`http://www.omdbapi.com/apikey=d31f1a94&t=${title}`, {
    }) .then((response)=>{
      console.log(response)
        this.setState ({
          title: response.data.title,
         year: response.data.year,
         director: response.data.director,
          genre: response.data.genre,
          plot: response.data.plot
      })
    }).catch((error)=>{
      console.log(error)
    })

  }
  _searchById = (event) => {
    event.preventDefault()
   const id = event.target.id.value
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${id}`, {
   }).then((response) => {
         console.log(response)
           this.setState({ 
             id: response.data.imdbID,
             title: response.data.Title,
             year: response.data.Year, 
             director: response.data.Director,
             genre: response.data.Genre,
             plot: response.data.plot
           })
       }).catch((error) => {
           console.log(error)
       })
     
   }







 /*  componentWillMount() {
    axios.get("http://www.omdbapi.com/apikey") 
  } */
  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
 /*  _searchByTitle = () => {
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
      
    }  */
      
        
  
   
   

 /*  searchById = () => {
    console.log("Search by ID");
  } */

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    console.log(this.state.title)
    console.log(this.state.year)

    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this._searchByTitle} searchById={this._searchById}/>
        <Movie id={this.state.id} title={this.state.title} year={this.state.year} director={this.state.director} genre={this.state.genre} plot={this.state.plot}/>
      </div>
    );
  }
  
}

export default App;
