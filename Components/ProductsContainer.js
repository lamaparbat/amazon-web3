import React from 'react';
import ItemCard from './ItemCard';
import { nftsCollections } from '../constants';

const ProductsContainer = () => {
 return (
  <div className='py-3 w-100 h-full bg-slate-100 flex justify-center'>
   <div className='px-2 lg:w-[1000px] md:w-[800px] sm:w-[500px] '>
    <h4 className='mb-4'>NFT Marketplaces</h4>
    <div className='grid lg:w-[950px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
     {
      nftsCollections.map((data, i) => {
       const { img, name } = data;
       return <ItemCard url={img} name={name} />
      })
     }
    </div>
   </div>
  </div>
 )
}

export default ProductsContainer;
