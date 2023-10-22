import React from "react";
import logo from "../assest/image.jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const addRemoveList = useSelector((state)=>state.addRemoveReducer.setAddRemova)

  return (
    <div className="bg-violet-500 h-[60px] flex justify-around items-center">
      <div className="flex gap-2 p-1 items-center">
        <img className="w-[50px] rounded-lg" src={logo} alt="not found" />
        <h1 className="text-white font-semibold text-[18px] md:text-2xl">
          Recipe Finder
        </h1>
      </div>
      <div className="font-bold text-white">
        <Link to="/fav-item">
          <button>Favorite <span>{`(${addRemoveList.length})`}</span></button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
