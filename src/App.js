import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { Route, Routes } from "react-router-dom";
import Recipedetails from "./components/Recipedetails";
import FavItem from "./components/FavItem";

const App = () => {
  return (
    <div className="bg-violet-400 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Searchbar />}></Route>
        <Route path="/recipe-details/:id" element={<Recipedetails />} />
        <Route path="/fav-item" element={<FavItem/>}/>
      </Routes>
    </div>
  );
};

export default App;
