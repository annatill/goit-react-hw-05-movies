import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/api-service';
import { List, ListItem, Text } from './Cast.styled';
import propTypes from 'prop-types';
import noPhoto from '../../image/1681549835_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-6.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <List>
          {cast.map(actor => (
            <ListItem key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : noPhoto
                }
                alt={actor.name}
                width="200"
                height={300}
              />
              <p>{actor.name}</p>
              <p>
                <Text>Character:</Text> {actor.character}
              </p>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

Cast.propTypes = {
  cast: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      profile_path: propTypes.string,
      name: propTypes.string.isRequired,
      character: propTypes.string.isRequired,
    })
  ),
};
