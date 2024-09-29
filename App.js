import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your TMDB API Key

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (err) {
      console.error("Error fetching data from API:", err);
    }
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-list">
        {movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
