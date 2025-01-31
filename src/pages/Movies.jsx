import React, { useEffect, useState } from "react";

const Movies = () => {
  let [movies, setMovies] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalPages] = useState(1);

  const getMovies = async (page) => {
    try {
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=23cf808c614383d83cc32bec99a11a97&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  let handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  let handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <div className="container">
      <div>
        <h2 className="text-[24px] font-bold leading-7 text-blue-950 mt-10">
          All Movie
        </h2>
      </div>
      <div className="grid grid-cols-5 mt-6">
        {movies.map((data) => (
          <div
            key={data.id}
            className="w-[200px] h-[400px] flex-shrink-0 overflow-hidden"
          >
            <img
              className="w-full h-[80%] object-cover"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title || data.name || "Trending Show"}
            />
            <div>
              <h3 className="text-[16px] font-semibold">
                {data.title || data.name || "No Title"}
              </h3>
              <h4 className="text-[14px] font-normal">
                {data.release_date || data.first_air_date || "Unknown Date"}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6 mb-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 mr-4 rounded text-white ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 ml-4 rounded text-white ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
