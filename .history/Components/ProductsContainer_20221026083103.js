import React from 'react';
import ItemCard from './ItemCard';

const ProductsContainer = () => {
 return (
  <div className='py-3 w-50 h-screen bg-slate-100 flex flex-wrap justify-between'>
   <ItemCard />
   <ItemCard />
   <ItemCard />
  </div>
 )
}

export default ProductsContainer;
