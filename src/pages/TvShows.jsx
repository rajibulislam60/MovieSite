import React, { useEffect, useState } from "react";

const TvShows = () => {
    let [tvSeries, setTvSeries] = useState([])
  const getTvShows = async () => {
    try {
      await fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=23cf808c614383d83cc32bec99a11a97"
      )
        .then((res) => res.json())
        .then((json) => setTvSeries(json.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTvShows();
  }, []);
  return (
    <div className="container">
      <div>
        <h2 className="text-[24px] font-bold leading-7 text-blue-950 mt-10">
          Tv Series
        </h2>
      </div>
      <div className="grid grid-cols-5 mt-6">
        {tvSeries.map((data) => (
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
    </div>
  );
};

export default TvShows;
