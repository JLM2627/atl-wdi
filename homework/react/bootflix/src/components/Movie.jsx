import React from "react";
const Movie = (props) => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>Movie Title: {props.title}</h3>
        <p>
          <strong>Released: {props.year}</strong> 1984<br />
          <strong>Directed By: {props.director}</strong> Some director<br />
          <em>Genre:{props.genre}</em>
        </p>
        <p>Plotline should go inside of here</p>
      </div>
    </section>
  );
};

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
/* const Movie = () => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>Movie Title</h3>
        <p>
          <strong>Released:</strong> 1984<br />
          <strong>Directed By:</strong> Some director<br />
          <em>Genre:</em>
        </p>
        <p>Plotline should go inside of here</p>
      </div>
    </section>
  );
}; */

export default Movie;


