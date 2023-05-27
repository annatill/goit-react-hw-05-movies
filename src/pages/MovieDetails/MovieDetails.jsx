import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { fetchMovieDetails } from '../../services/api-service';
import {
  Title,
  Container,
  ContainerInfo,
  ContainerDescription,
  MovieTitle,
  ListGenres,
  ListItem,
  ListInfo,
  StyledLink,
} from './MovieDetails.styled';
import propTypes from 'prop-types';
import samplePlaceholder from '../../image/sample_placeholder.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <Title>Movie Details</Title>
      <Container>
        <StyledLink to={backLinkLocation.current}>Go back</StyledLink>
        {movie && (
          <>
            <ContainerInfo>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : samplePlaceholder
                }
                alt={movie.title}
                width="200"
              />
              <ContainerDescription>
                <MovieTitle>{movie.title}</MovieTitle>
                <p>User Score: {movie.vote_average * 10}%</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ListGenres>
                  {movie.genres.map(genre => (
                    <ListItem key={genre.id}>{genre.name}</ListItem>
                  ))}
                </ListGenres>
              </ContainerDescription>
            </ContainerInfo>
            <h3>Additional information</h3>
            <ListInfo>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ListInfo>
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </>
        )}
      </Container>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number.isRequired,
    poster_path: propTypes.string,
    title: propTypes.string.isRequired,
    vote_average: propTypes.number.isRequired,
    overview: propTypes.string.isRequired,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
      })
    ),
  }),
};
