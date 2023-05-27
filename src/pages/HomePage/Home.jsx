import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/api-service';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, Text, Title } from './Home.styled';
import propTypes from 'prop-types';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const maxCharactersPerMovieTitle = 20;

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => {
          let movieName = movie.title || movie.name;
          movieName =
            movieName.length > maxCharactersPerMovieTitle
              ? movieName.slice(0, maxCharactersPerMovieTitle) + '...'
              : movieName;

          return (
            <Link
              key={movie.id}
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <ListItem>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="200"
                />
                {movie.title ? (
                  <Text>{movieName}</Text>
                ) : (
                  <Text>{movieName}</Text>
                )}
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );
};

export default Home;

Home.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      poster_path: propTypes.string,
      title: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
};
