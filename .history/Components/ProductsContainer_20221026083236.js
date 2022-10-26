import React from 'react';
import ItemCard from './ItemCard';

const ProductsContainer = () => {
 return (
  <div className='py-3 w-100 h-screen bg-slate-100 flex flex-wrap justify-center'>
   <div className='w-[500px] bg-danger'>
    <ItemCard />
    <ItemCard />
    <ItemCard />
   </div>
  </div>
 )
}

export default ProductsContainer;
