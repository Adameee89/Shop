import React from 'react'
import { useSelector } from 'react-redux'
import CardProuductComponent from '../components/CardProuductComponent'

function FavoritePage() {
  const {allFavorite} = useSelector(state => state.favoriteStore)



  return (
    <div className='container mx-auto mt-[50px] mb-[50px]'>
      <div className='flex flex-wrap  gap-[20px] items-center justify-center'>
      {allFavorite.map((favorite) =>{
         return <CardProuductComponent key={favorite.id} product={favorite} />

      })}
      </div>
    </div>
  )
}

export default FavoritePage