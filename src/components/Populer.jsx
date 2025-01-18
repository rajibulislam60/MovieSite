import React, { useEffect, useState } from "react";

const Populer = () => {
  let [popularShows, setPopulerShows] = useState([])


  const getPopulerShows = async()=>{
    try {
      await fetch("https://api.themoviedb.org/3/tv/popular?api_key=23cf808c614383d83cc32bec99a11a97")
      .then(res=>res.json())
      .then(json=> setPopulerShows(json.results))
    } catch (error) {
      console.error(error)
    }
    
  }

  useEffect(()=>{
    getPopulerShows()
  }, [])
  return (
    <div className="container mb-8">
      <div>
        <h2 className="text-[24px] font-bold leading-7 text-blue-950 mt-10">
          Popular Tv Series
        </h2>
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide mt-6">
        {popularShows.map((data) => (
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

export default Populer;
