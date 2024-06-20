import { MovieAPI } from "../api/axios";

interface MovieProps {
  title: string;
  overview: string;
  poster_path: string;
  movie: MovieAPI;
  onMovieClick: (movie: MovieAPI) => void;
}

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

const MovieCard = ({
  title,
  overview,
  poster_path,
  movie,
  onMovieClick,
}: MovieProps) => {
  return (
    <article
      onClick={() => onMovieClick(movie)}
      className="grayscale cursor-pointer hover:-translate-y-1 transition-transform duration-300 hover:grayscale-0 flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-96 mx-auto"
    >
      <img
        src={`${IMAGE_URL}${poster_path}`}
        alt={`Poster of ${title}`}
        className="absolute inset-0 h-full w-full object-cover "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <div className="z-10 w-full">
        <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
        <div className="text-sm leading-6 text-gray-300">{overview}</div>
      </div>
    </article>
  );
};

export default MovieCard;
