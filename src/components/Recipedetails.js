import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { saveApiData } from '../redux/recipeApiSlice/saveApi';
import { Link } from 'react-router-dom';

const Recipedetails = () => {
  const dispatch = useDispatch();
  const saveRecipe = useSelector((state)=>state.saveApiReducer.saveRecipe)
  const {id} = useParams();

  
  useEffect(()=>{
    dispatch(saveApiData(id));
  },[dispatch,id])
  
  console.log(saveRecipe);

  return (
    <div className='flex flex-col md:flex-row justify-center gap-4 m-3 p-3'>
    <div className='flex flex-col gap-3'>
    <img className='rounded-md shadow-md md:w-[500px] md:h-[380px]' src={saveRecipe.image_url} alt='' />
    <h2 className='bg-emerald-200 text-[15px] md:text-[20px] text-black/60 font-semibold p-4 rounded-md outline-none shadow-md'>{saveRecipe.title}</h2>
    <span className='bg-blue-300/75 text-sm md:text-md text-blue-600 font-semibold p-3 rounded-md outline-none shadow-md'>Publisher:{saveRecipe.publisher}</span>
    <Link to={saveRecipe.source_url} target='_blank'>
        <div className='flex items-center gap-2 bg-yellow-300/70 text-sm md:text-md text-yellow-600 font-semibold p-3 rounded-md outline-none shadow-md'>
            <span>For Cooking Instructions Click Here</span>
        </div>
    </Link>
</div>
<div>
    <h2 className='text-xl text-black/75 font-bold '>Ingredients :</h2>
    {
        saveRecipe.ingredients?.map((item, id) => (
            <div className='bg-white/70 flex item-center gap-3 mt-2 p-2 rounded-md outline-none shadow-md break-all leading-8' key={id}>
                <span className='text-black/70'>{item.description}</span>
                <div>
                    <span className='text-green-500'>{item.quantity}</span>
                    <span className='text-yellow-500'>{item.unit}</span>
                </div>
            </div>
        ))
    }

</div>
    </div>
  )
}

export default Recipedetails
