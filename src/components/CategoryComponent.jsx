import React, { useEffect, useState } from 'react'
import ProductsService from '../services/productsService'
import { useDispatch, useSelector } from 'react-redux';
import { saveAllCategoryAction, setCategoryAction } from '../store/productsSlice';



function CategoryComponent() {

    const {allCategory, selectCategory} = useSelector(state => state.productStore)


    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(false);
    //const [currenCategory, setCurrentCategory] = useState('');

   
    
useEffect(() => {
    ProductsService.getAllCategory()
            .then(res => dispatch(saveAllCategoryAction(res.data)))
            .catch(err => console.log(err))
    
}, [])

function handleActiveCategory() {
    setIsActive(!isActive);
}

function handleCategory(category) {
    dispatch(setCategoryAction(category))
     

}


  return (
    <div className='bg-[#f4f4f4] py-[20px]  h-auto lg:h-[400px] xl:h-[300px] flex items-center'>
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-[20px] ">
            <button onClick={handleActiveCategory} className='bg-mainBlue text-textWhite px-[15px] py-[7px] rounded-[10px]
             hover:bg-mainOrange transition-all duration-300 ease-in-out'>Show Category</button>

            <ul className='grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[10px]'>

                { isActive ? allCategory.map((cat, index) => {
                    return <li 
                    onClick={() => handleCategory(cat)}
                    key={index} 
                    className={cat === selectCategory ? 'bg-mainOrange text-textWhite px-[16px] py-[8px] text-center rounded-[10px] rounded-[10px] cursor-pointer' : 
                    'bg-mainBlue text-textWhite px-[15px] py-[7px] rounded-[10px] cursor-pointer text-center rounded-[10px]'}>{cat}
                     </li>
                }) : null }
            </ul>
        </div>
    </div>
  )
}

export default CategoryComponent