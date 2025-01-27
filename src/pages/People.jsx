import React, { useEffect, useState } from "react";

const People = () => {
  let [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      await fetch(
        "https://api.themoviedb.org/3/person/popular?api_key=23cf808c614383d83cc32bec99a11a97"
      )
        .then((res) => res.json())
        .then((json) => setPeople(json.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);
  return (
    <div className="container">
      <div>
        <h2 className="text-[24px] font-bold leading-7 text-blue-950 mt-10">
          Tv Series
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
              src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
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
    </div>
  );
};

export default People;
