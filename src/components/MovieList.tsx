import { MovieAPI } from "../api/axios";
import MovieCard from "./MovieCard";

interface Props {
  movies: MovieAPI[];
  loading: boolean;
  onMovieClick: (movie: MovieAPI) => void;
}

const MovieList = ({ movies, loading, onMovieClick }: Props) => {
  return (
    <>
      {loading ? (
        <div className="mx-auto mt-32">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <div className="px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white mb-12 mt-10">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
                movie={movie}
                onMovieClick={onMovieClick}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default MovieList;
