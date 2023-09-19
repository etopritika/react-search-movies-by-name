import Notiflix from 'notiflix';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '604d147cd55c0bcd03b68a72549a64de';

export async function fetchMovies(searchMovie) {
  const response = await fetch(
    `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${searchMovie}&language=en-US&include_adult=false`
  );
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(
        Notiflix.Notify.failure('Search result not successful. Try again')
      );
    }
    return;
  }

  const { results } = await response.json();

  if (results.length === 0) {
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name.'
    );
    return;
  }

  return results;
}

export async function fetchTrending() {
  const response = await fetch(
    `${BASE_URL}3/trending/movie/week?api_key=${API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error(Notiflix.Notify.failure('Failed to fetch trending movies'));
  }

  const { results } = await response.json();
  return results;
}

export async function fetchDetails(MovieId) {
  const response = await fetch(
    `${BASE_URL}3/movie/${MovieId}?api_key=${API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error(Notiflix.Notify.failure('Failed to fetch movie details'));
  }

  const results = await response.json();
  return results;
}

export async function fetchCast(MovieId) {
  const response = await fetch(
    `${BASE_URL}3/movie/${MovieId}/credits?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(Notiflix.Notify.failure('Failed to fetch movie details'));
  }

  const { cast } = await response.json();
  return cast;
}

export async function fetchReviews(MovieId) {
  const response = await fetch(
    `${BASE_URL}3/movie/${MovieId}/reviews?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(Notiflix.Notify.failure('Failed to fetch movie details'));
  }

  const { results } = await response.json();
  return results;
}
