import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import { clientAxios } from "./api/axios";
import { MovieAPI } from "./api/axios";
import MovieCard from "./components/MovieCard";

const skeletonMovies: MovieAPI[] = [
  {
    id: 1,
    title: "1",
    overview: "324",
    poster_path: "324",
  },
  {
    id: 2,
    title: "1",
    overview: "324",
    poster_path: "324",
  },
  {
    id: 3,
    title: "1",
    overview: "324",
    poster_path: "324",
  },
  {
    id: 4,
    title: "1",
    overview: "324",
    poster_path: "324",
  },
];

function App() {
  const [movies, setmovies] = useState<MovieAPI[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await clientAxios.get("/discover/movie");
      setLoading(false);
      setmovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <Search setmovies={setmovies} />

      <MovieList movies={movies} loading={loading} />
    </>
  );
}

export default App;
