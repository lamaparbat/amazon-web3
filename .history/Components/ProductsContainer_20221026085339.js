import React from 'react';
import ItemCard from './ItemCard';
import { nftsCollections } from '../constants';

const ProductsContainer = () => {
 return (
  <div className='py-3 w-100 h-screen bg-slate-100 flex justify-center'>
   <div className='w-[1000px]'>
    <h4><b>NFT Marketplaces</b></h4>
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
  </div>
 )
}

export default ProductsContainer;
