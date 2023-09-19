import { Suspense, useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import BackLink from '../components/BackLink';
import { HiArrowLeft } from 'react-icons/hi';
import Loader from '../components/Loader';
import {
  Container,
  ListItem,
  GenresList,
  GenresItem,
  InfoList,
} from './MoviesDetails.styled';
import { fetchDetails } from '../services/api-service';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const location = useLocation();
  const refLocation = useRef(location);

  useEffect(() => {
    setStatus('pending');
    fetchDetails(movieId)
      .then(response => {
        setStatus('resolved');
        setMovie(response);
      })
      .catch(error => alert(error));
  }, [movieId]);

  const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;
  const date = new Date(release_date);
  const year = date.getFullYear();

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'resolved') {
    return (
      <>
        <BackLink to={refLocation.current.state}>
          <HiArrowLeft size="24" />
          Back to movies
        </BackLink>
        <Container>
          <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
          <ul>
            <ListItem>
              <b>
                {original_title} ({year})
              </b>
            </ListItem>
            <ListItem>User score: {(vote_average * 10).toFixed(0)}%</ListItem>
            <ListItem>
              <b>Overview</b>
              <br /> {overview}
            </ListItem>
            <ListItem>
              <b>Genres:</b>
              <GenresList>
                {genres.map(({ name }) => {
                  return <GenresItem key={name}>{name}</GenresItem>;
                })}
              </GenresList>
            </ListItem>
          </ul>
        </Container>
        <p>Additional informationk</p>
        <InfoList>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </InfoList>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    );
  }
}
