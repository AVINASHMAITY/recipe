import React, { useState } from "react";
import { fetchApi } from "../redux/recipeApiSlice/searchbarApi";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const recipeItems = useSelector((state) => state.searchbarApiReducer.recipes);

  
  console.log(recipeItems)
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchApi(input));
  };


  return (
    <div>
      <div className="flex justify-center mt-4">
        <form className="flex gap-3" onSubmit={onSubmit}>
          <input
            className="rounded-lg pl-3 md:w-[350px] md:h-[45px]"
            type="text"
            placeholder="Search Recipe"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="submit"
            value="Search"
            className="bg-sky-500 rounded-md p-2 text-white"
          />
        </form>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-3">
        {recipeItems.map((ele, index) => (
            <div><RecipeCard recipe={ele}/></div>  
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
