import React from "react";

const Header = () => {
  return (
    <div className="bg-headerImg bg-no-repeat bg-cover">
      <div className="container py-[100px] text-blue-950">
        <h1 className="text-[48px] font-bold leading-[40px]">Welcome</h1>
        <h3 className="text-[30px] font-semibold leading-9 mt-3">
          Millions of Movies, TV Shows and people to discover. Explore now.
        </h3>
        <div>
          <input
            className="w-full text-[18px] px-5 py-3 rounded-full mt-[80px]"
            type="text"
            placeholder="Search for a movies, tv show, person..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
