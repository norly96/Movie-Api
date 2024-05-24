import { MovieAPI } from "../api/axios";

interface Props {
  movies: MovieAPI[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <div className="flex flex-col gap-3 text-sm text-white">
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default MovieList;
