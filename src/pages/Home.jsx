import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Title, ListLink } from './Home.styled';
import { fetchTrending } from '../services/api-service';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const homeLocation = useLocation();

  useEffect(() => {
    fetchTrending()
      .then(response => setMovies(response))
      .catch(error => alert(error));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <ListLink key={id}>
              <Link to={`movies/${id}`} state={homeLocation}>
                {title}
              </Link>
            </ListLink>
          );
        })}
      </ul>
    </>
  );
}
