import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/tmdb-api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      const results = await searchMovies(query);
      setMovies(results);
    };
    fetchData();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.query.value.trim();
    if (value) {
      setSearchParams({ query: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
