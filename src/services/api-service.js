import { toast } from 'react-toastify';
export const API_KEY = '7ff6f850bf4946413e131c5d8a361284';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p';

export const fetchTrending = () => {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(`Sorry, but we can't find any trending movies`)
      );
    })
    .then(data => data.results);
};

export const fetchSearch = query => {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(
          `Sorry, but we can't find any movies by your request "${query}"`
        )
      );
    })
    .then(data => {
      if (data.results.length === 0) {
        toast.error(`No movies found for your query "${query}"`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
      return data.results;
    })
    .catch(error => {
      toast.error(`Error loading movies: ${error.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      throw error;
    });
};

export const fetchMovieDetails = id => {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(response =>
    response.ok ? response.json() : Promise.reject(new Error('Not found'))
  );
};

export const fetchMovieCast = id => {
  return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Sorry, but we can't find any cast`));
    })

    .then(data => data.cast);
};

export const fetchMovieReviews = id => {
  return fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Sorry, but we can't find any reviews`));
    })
    .then(data => data.results);
};
