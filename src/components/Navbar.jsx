import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className="container">
        <div className="flex gap-10 items-center py-5">
          <h2 className="text-[24px] font-bold leading-7">Secret Movie</h2>
          <div>
            <ul className="flex gap-3">
              <li>Movies</li>
              <li>TV Shows</li>
              <li>People</li>
              <li>More</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
