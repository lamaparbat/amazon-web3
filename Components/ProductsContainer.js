import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { FaSort } from 'react-icons/fa';
import _ from 'lodash';
import { nftsCollections } from '../constants';

const ProductsContainer = () => {
 const [filteredCollection, setFilterCollections] = useState(nftsCollections);

 const filterCollections = () => {
  let filter = _.sortBy(filteredCollection, ["price"]);
  setFilterCollections(filter);
 }

 return (
  <div className='py-3 w-100 h-full bg-slate-100 flex justify-center'>
   <div className='px-2 lg:w-[1000px] md:w-[800px] sm:w-[500px] '>
    <div className='pe-4 flex justify-between items-center w-[914px]'>
     <h4>NFT Marketplaces</h4>
     <div
      onClick={filterCollections}
      className='px-3 flex items-center border border-1 border-grey cursor-pointer bg-light'>
      SORT &nbsp;<FaSort className='text-lg' />
     </div>
    </div>
    <div className='mt-2 grid lg:w-[950px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
     {
      filteredCollection && filteredCollection.map((data) => {
       const { img, name, price } = data;
       return <ItemCard url={img} name={name} price={price} />
      })
     }
    </div>
   </div>
  </div>
 )
}

export default ProductsContainer;
