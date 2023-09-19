import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from './Cast.styled';
import { fetchCast } from '../services/api-service';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchCast(movieId)
      .then(response => setActors(response))
      .catch(error => alert(error));
  }, [movieId]);
  return (
    <ul>
      {actors.map(({ profile_path, name, character }) => {
        return (
          <CastItem key={name}>
            <ul>
              <li>
                <img
                  src={
                    profile_path === null
                      ? 'http://dummyimage.com/200'
                      : `https://image.tmdb.org/t/p/w200/${profile_path}`
                  }
                  alt=""
                />
              </li>
              <li>{name}</li>
              <li>Character: {character}</li>
            </ul>
          </CastItem>
        );
      })}
    </ul>
  );
}
