import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../services/tmdb-api";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  const userScore = Math.round(movie.vote_average * 10);
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <div className={styles.container}>
      <Link to="/">Go back</Link>
      <div className={styles.movieDetails}>
        <img
          className={styles.movieImage}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.movieInfo}>
          <h1 className={styles.movieTitle}>
            {movie.title} ({releaseYear})
          </h1>
          <p className={styles.userScore}>User Score: {userScore}%</p>
          <p className={styles.overview}>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p className={styles.genres}>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
