import React, { useEffect } from 'react'

//products
import ProductsService from '../services/productsService'
import { useDispatch, useSelector } from 'react-redux';
import { saveAllProductsAction } from '../store/productsSlice';

//components
import LoadingComponent from '../components/LoadingComponent';
import CardProuductComponent from '../components/CardProuductComponent';

//icons
import { FaList } from 'react-icons/fa'
import {CiGrid41} from 'react-icons/ci'




 
function HomePage() {

  const {allProducts, isLoading} = useSelector(state => state.productStore)

  const dispatch = useDispatch();

  useEffect(() => {
    ProductsService.getAllProducts()
            .then(res => dispatch(saveAllProductsAction(res.data.products)))
            .catch(err => console.log(err))
            
  }, [])
  return (
    <main className='mt-[50px] container mx-auto'>
      {/* List grid view */}
      <div className='flex justify-end gap-[20px] mb-[30px] mr-[30px]'>
        <FaList size={32} className='cursor-pointer'/>
        <CiGrid41 size={32} className='cursor-pointer'/>
      </div>



      {/* over products */}

      <div className='flex  flex-wrap items-center justify-center gap-[20px]'>
      {isLoading ? allProducts.map(product => <CardProuductComponent key={product.id} product={product} />) : <LoadingComponent />}
    </div>
    </main>
  )
}

export default HomePage