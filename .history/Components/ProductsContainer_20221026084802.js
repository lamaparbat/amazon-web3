import React from 'react';
import ItemCard from './ItemCard';
import { nftsCollections } from '../constants';

const ProductsContainer = () => {
 return (
  <div className='py-3 w-100 h-screen bg-slate-100'>
   <h1>NFT Marketplaces</h1>
   <div className='w-[950px] flex flex-wrap justify-between'>
    {
     nftsCollections.map((data, i) => {
      const { img, name } = data;
      return <ItemCard url={img} name={name} />
     })
    }
    <ItemCard />
   </div>
  </div>
 )
}

export default ProductsContainer;
