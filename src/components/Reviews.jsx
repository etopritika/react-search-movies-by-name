import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from './Reviews.styled';
import { fetchReviews } from '../services/api-service';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchReviews(movieId)
      .then(response => setReviews(response))
      .catch(error => alert(error));
  }, [movieId]);
  return (
    <>
      {reviews.length !== 0 && (
        <ul>
          {reviews.map(({ author, content }) => {
            return (
              <ReviewItem key={author}>
                <span>
                  <b>{author}</b>
                </span>
                <br />
                {content}
              </ReviewItem>
            );
          })}
        </ul>
      )}
    </>
  );
}
