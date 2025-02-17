import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className="container">
        <div className="flex gap-10 items-center py-5">
          <h2 className="text-[24px] font-bold leading-7">Secret Movie</h2>
          <div>
            <ul className="flex gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/tvshows">TV Shows</Link>
              </li>
              <li>
                <Link to="/people">People</Link>
              </li>
              <li>More</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
