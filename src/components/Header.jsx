import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="bg-headerImg bg-no-repeat bg-cover relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative px-6 py-[100px] ">
          <h1 className="text-[48px] font-bold leading-[40px] text-blue-900">Welcome</h1>
          <h3 className="text-[30px] font-semibold leading-9 text-white mt-3">
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
    </div>
  );
};

export default Header;
