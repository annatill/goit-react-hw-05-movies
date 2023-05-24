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
    .then(res => res.json())
    .then(data => data.results);
};

export const fetchMovieDetails = id => {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(res =>
    res.json()
  );
};

export const fetchMovieCredits = id => {
  return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => data.cast);
};

export const fetchMovieReviews = id => {
  return fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => data.results);
};
