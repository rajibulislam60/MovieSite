import React from "react";
import Home from "./pages/Home";
import RootLayOut from "./layOut/RootLayOut";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tvshows" element={<TvShows />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
