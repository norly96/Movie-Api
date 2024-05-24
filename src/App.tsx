import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import { clientAxios } from "./api/axios";
import { MovieAPI } from "./api/axios";

function App() {
  const [movies, setmovies] = useState<MovieAPI[]>([]);
  const [loading, setloading] = useState(false);

  const fetchMovies = async () => {
    setloading(true);
    try {
      const response = await clientAxios.get("/discover/movie");
      setloading(false);
      setmovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setloading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <Search />
      {loading ? "Esta cargando" : <MovieList movies={movies} />}
    </>
  );
}

export default App;
