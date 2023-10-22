import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/recipeSlice/addRemove";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const RecipeCard = ({recipe}) => {

    const addRemoveList = useSelector((state)=>state.addRemoveReducer.setAddRemova)
    const dispatch = useDispatch();
    const addTo = () => {
        dispatch(add(recipe));
        toast.success("added");
      };
    
      const removeTo = () => {
        dispatch(remove(recipe.id));
        toast.success("removed");
      };

  return (
    <div>
      <div className="flex flex-col justify-center bg-violet-500 rounded-md">
        <div className="p-3">
          <img
            className="rounded-md w-[220px] h-[200px]"
            src={recipe.image_url}
            alt={recipe.title}
          />
        </div>
        <div className="flex justify-center text-sm mt-1">
          <p className="font-bold text-gray-800">{recipe.title}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="">
            <Link to={`/recipe-details/${recipe.id}`}>
              <button className="text-white bg-sky-500 flex justify-center rounded-md p-1 mt-1 w-[100px] m-2">
                Details
              </button>
            </Link>
          </div>
          <div>
            {addRemoveList?.some((p) => p.id === recipe.id) ? (
              <button
              className="text-white bg-sky-500 flex justify-center rounded-md p-1 mt-1 w-[100px] m-2"
                onClick={removeTo}
              >
                Remove
              </button>
            ) : (
              <button
              className="text-white bg-sky-500 flex justify-center rounded-md p-1 mt-1 w-[100px] m-2"
                onClick={addTo}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
