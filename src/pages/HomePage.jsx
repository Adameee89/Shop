import React, { useEffect, useState } from 'react'

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

  const {allProducts, isLoading, searchTitle, selectCategory} = useSelector(state => state.productStore)
  const [activeView, setActiveView] = useState('gridView')

  const dispatch = useDispatch();

  useEffect(() => {
    ProductsService.getAllProducts()
            .then(res => dispatch(saveAllProductsAction(res.data.products)))
            .catch(err => console.log(err))
            
  }, [])


  useEffect(() => {
    ProductsService.getSearchProducts(searchTitle)
            .then(res => dispatch (saveAllProductsAction(res.data.products)))
            .catch(err => console.log(err))
    
  }, [searchTitle])


  useEffect(() => {
    if(selectCategory){
      ProductsService.getProductsByCategory(selectCategory)
              .then(res => dispatch (saveAllProductsAction(res.data.products)))
              .catch(err => console.log(err))
              
    }
            
  }, [selectCategory])



  return (
    <main className='mt-[50px] container mx-auto'>
      {/* List grid view */}
      <div className='flex justify-end gap-[20px] mb-[30px] mr-[30px]'>
        <FaList 
        size={42} 
        className={activeView === 'listView' ? 'bg-mainOrange cursor-pointer p-[5px] rounded-lg': 'cursor-pointer bg-white p-[5px] rounded-lg'}
        onClick={() => setActiveView('listView')}/>
        <CiGrid41 
        size={42} 
        className={activeView === 'gridView' ? 'bg-mainOrange cursor-pointer p-[5px] rounded-lg' : 'cursor-pointer bg-white p-[5px] rounded-lg'}
        onClick={() => setActiveView('gridView')}/>
      </div>



      {/* over products */}

      <div className={activeView === 'gridView' ? 'flex  flex-wrap items-center justify-center gap-[20px]' : 
      'flex flex-col  flex-wrap items-center justify-center gap-[20px] '}>
      {isLoading ? allProducts.map(product => <CardProuductComponent key={product.id} product={product}  activeView={activeView}/>) : <LoadingComponent />}
    </div>
    </main>
  )
}

export default HomePage