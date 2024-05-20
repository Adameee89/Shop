import React, { useEffect } from 'react'

//products
import ProductsService from '../services/productsService'
import { useDispatch, useSelector } from 'react-redux';
import { saveAllProductsAction } from '../store/productsSlice';
import LoadingComponent from '../components/LoadingComponent';
import CardProuductComponent from '../components/CardProuductComponent';




 
function HomePage() {

  const {allProducts, isLoading} = useSelector(state => state.productStore)

  const dispatch = useDispatch();

  useEffect(() => {
    ProductsService.getAllProducts()
            .then(res => dispatch(saveAllProductsAction(res.data.products)))
            .catch(err => console.log(err))
            
  }, [])
  return (
    <div>
      {isLoading ? allProducts.map(product => <CardProuductComponent key={product.id} product={product} />) : <LoadingComponent />}
    </div>
  )
}

export default HomePage