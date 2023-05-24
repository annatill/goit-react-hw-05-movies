import { useState, useEffect } from 'react';
import { fetchTrending } from '../services/api-service';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="200"
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
