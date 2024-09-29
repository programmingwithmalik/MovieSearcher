import React from 'react';

function MovieCard({ movie }) {
  const moviePosterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className="movie-card">
      {movie.poster_path && (
        <img src={moviePosterUrl} alt={movie.title + " poster"} />
      )}
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}/10</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieCard;
