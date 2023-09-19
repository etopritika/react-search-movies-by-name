import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import { ListLink } from './Movies.styled';
import { fetchMovies } from '../services/api-service';

export default function Movies() {
  const [movieName, setMovieName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const name = searchParams.get('query') ?? '';
  const moviesLocation = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      return Notiflix.Notify.failure('Enter the name of the movie');
    }
    setSearchParams({ query: movieName });
    setMovieName('');
  };

  const handleInputChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  useEffect(() => {
    if (!name) {
      return;
    }

    fetchMovies(name)
      .then(response => {
        setFetchedMovies(response);
      })
      .catch(error => alert(error));
  }, [name]);

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        movieName={movieName}
        handleInputChange={handleInputChange}
      />
      {fetchedMovies && (
        <ul>
          {fetchedMovies.map(({ id, title }) => (
            <ListLink key={id}>
              <Link to={`${id}`} state={moviesLocation}>
                {title}
              </Link>
            </ListLink>
          ))}
        </ul>
      )}
    </>
  );
}
