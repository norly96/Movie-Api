import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import { clientAxios, MovieAPI } from "./api/axios";
import MovieCard from "./components/MovieCard";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

function App() {
  const [movies, setmovies] = useState<MovieAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectMovie, setSelectMovie] = useState<MovieAPI | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (movie: MovieAPI) => {
    setSelectMovie(movie);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectMovie(null);
  };

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

      <MovieList movies={movies} loading={loading} onMovieClick={openModal} />

      {showModal && selectMovie && (
        <>
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-auto my-6 mx-auto max-w-3xl border-2 border-white rounded-lg">
              {/*content*/}
              <div className="border-0 border-white relative rounded-lg shadow-lg  flex flex-col w-full modal outline-none focus:outline-none">
                {/*header*/}

                <h3 className="text-2xl px-5 pt-5 font-bold text-white">
                  {selectMovie.title}
                </h3>

                {/*body*/}
                <div className="px-6 pt-6 flex flex-row">
                  <img
                    src={`${IMAGE_URL}${selectMovie.poster_path}`}
                    alt={`Poster of ${selectMovie.title}`}
                    className="rounded-lg h-60 w-60 object-cover "
                  />
                  <p className="my-3 ml-3 text-white text-lg leading-relaxed">
                    {selectMovie.overview}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2  rounded-b">
                  <button
                    className="bg-red-500 text-white border border-white hover:bg-red-700 duration-300 px-2 sm:px-6 rounded-xl m-0.5 font-bold uppercase py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}

export default App;
