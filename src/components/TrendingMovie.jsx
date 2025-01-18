import React, { useEffect, useState } from "react";

const TrendingMovie = () => {
  let [trendingShows, setTrendingShows] = useState([]);

  const getTrendingshows = async () => {
    try {
      await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=23cf808c614383d83cc32bec99a11a97"
      )
        .then((res) => res.json())
        .then((json) => setTrendingShows(json.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrendingshows();
  }, []);
  return (
    <div className="container">
      <div>
        <h2 className="text-[24px] font-bold leading-7 text-blue-950 mt-10">
          Trending
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-4">
      {trendingShows.map((data) => (
        <div className="w-full mt-6">
          <img
            className="w-full h-[80%] object-cover"
            src="/src/assets/images/headerImg.jpg"
            alt=""
          />
          <div>
            <h3 className="text-[16px] font-semibold">My tiny senpai</h3>
            <h4 className="text-[14px] font-normal">Dec 15, 2024</h4>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TrendingMovie;
