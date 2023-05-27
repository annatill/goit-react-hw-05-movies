import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/api-service';
import { Text } from './Reviews.styled';
import propTypes from 'prop-types';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Text>No reviews available</Text>
      )}
    </>
  );
};

Reviews.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      author: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
    })
  ),
};
