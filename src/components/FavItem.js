import React from "react";
import {useSelector } from "react-redux";
import FavListCard from "./FavListCard";

const FavItem = () => {

    const addRemoveList = useSelector((state)=>state.addRemoveReducer.setAddRemova)

  return (
    <div>
      <div className="flex justify-center items-center gap-3 m-4 flex-wrap">
        {addRemoveList.length > 0 ? (
          addRemoveList.map((item, index) => (
            <div>
              <FavListCard item={item} key={index} />
            </div>
          ))
        ) : (
          <h2 className="text-[25px] p-8 font-semibold">
            Save Item is empty
          </h2>
        )}
      </div>
    </div>
  );
};

export default FavItem;
