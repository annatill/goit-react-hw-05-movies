import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearch } from '../../services/api-service';
import { List, ListItem, Text, Forma, Input, Button } from './Movies.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import propTypes from 'prop-types';
import samplePlaceholder from '../../image/sample_placeholder.jpg';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchParamValue, setSearchParamValue] = useState('');
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    const value = searchParamValue.trim();
    if (value === '') {
      toast.error('Please enter your movie!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';
    if (searchQuery === '') {
      return;
    }
    setSearchParamValue(searchQuery);
    fetchSearch(searchQuery).then(setMovies);
  }, [searchParams]);

  const handleSearchQueryChange = event => {
    setSearchParamValue(event.target.value);
  };
  const maxCharactersPerMovieTitle = 20;

  return (
    <>
      <Forma onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchParamValue}
          onChange={handleSearchQueryChange}
          placeholder="Search movies"
        />
        <Button type="submit">Search</Button>
      </Forma>
      <ToastContainer autoClose={3000} />
      <List>
        {movies.map(movie => {
          let movieName = movie.title || movie.name;
          movieName =
            movieName.length > maxCharactersPerMovieTitle
              ? movieName.slice(0, maxCharactersPerMovieTitle) + '...'
              : movieName;
          return (
            <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
              <ListItem>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : samplePlaceholder
                  }
                  alt={movie.title}
                  width="200"
                  height={300}
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
    </>
  );
};

export default Movies;

Movies.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string,
      name: propTypes.string,
      poster_path: propTypes.string,
    })
  ),
};
