import React, { useEffect, useState } from "react";

const People = () => {
  let [people, setPeople] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalPages] = useState(1);

  const getPeople = async (page) => {
    try {
      await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=23cf808c614383d83cc32bec99a11a97&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPeople(data.results);
          setTotalPages(data.total_pages);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPeople(currentPage);
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
          Popular People
        </h2>
      </div>
      <div className="grid grid-cols-5 mt-6">
        {people.map((data) => (
          <div
            key={data.id}
            className="w-[200px] h-[400px] flex-shrink-0 overflow-hidden"
          >
            <img
              className="w-full h-[80%] object-cover"
              src={
                data.profile_path
                  ? `https://image.tmdb.org/t/p/w500${data.profile_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={data.title || data.name || "Trending Show"}
            />
            <div>
              <h3 className="text-[16px] font-semibold">
                {data.title || data.name || "No Title"}
              </h3>
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

export default People;
