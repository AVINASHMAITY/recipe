import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/recipeSlice/addRemove';
import toast from 'react-hot-toast';

const FavListCard = ({ item }) => {

    const dispatch = useDispatch();

    
    const deleteToFav=()=> {
        dispatch(remove(item.id));
        toast.success("delete from favourite");
      }



    return (
        <div className='flex flex-col items-center bg-violet-500 p-4 mb-3 rounded-md '>
            <div className='flex flex-col justify-center items-center gap-3'>
                <img className='h-[190px] w-[250px] rounded-md' src={item.image_url} alt='' />
                <h2 className='text-grey-500 font-semibold'>{item.title}</h2>
            </div>
            <div className='text-[25px] text-white cursor-pointer' onClick={deleteToFav}>
                Delect
            </div>
        </div>
    )
}

export default FavListCard;