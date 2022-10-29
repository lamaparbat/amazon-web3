import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ItemCardSkeleton from './ItemCardSkeleton';
import { FaSort } from 'react-icons/fa';
import { HiStatusOffline } from 'react-icons/hi';
import _ from 'lodash';
import { nftsCollections } from '../constants';
import { getAllNFTs } from '../helpers/index';

const ProductsContainer = () => {
  const [defaultCollection, setDefaultCollections] = useState(nftsCollections);
  const [nftCollections, setNftCollections] = useState([]);
  const [isOffline, setOfflineStatus] = useState(true);

  useEffect(() => {
    (async () => {
      let collections = await getAllNFTs();

      // remove first 4 
      collections = collections.slice(4);

      setNftCollections(collections);
    })();

    setOfflineStatus(!window.navigator.onLine);
    window.addEventListener("online", () => setOfflineStatus(false));
    window.addEventListener("offline", () => setOfflineStatus(true));
  }, []);

  const filterCollections = () => {
    if (!nftCollections) return;
    let filter = _.sortBy(nftCollections, ["price"]);
    setNftCollections(filter);
  }

  return (
    <div className='py-3 w-100 h-screen bg-slate-100 flex justify-center'>
      <div className='px-2 lg:w-[1000px] md:w-[800px] sm:w-[500px] '>
        <div className='pe-4 flex justify-between items-center w-[914px]'>
          <div className='flex items-center'>
            <h4>NFT Marketplaces {isOffline}</h4>
            {
              isOffline && <HiStatusOffline className='mx-4 -mt-1 text-danger text-xl animate-pulse' />
            }
          </div>
          <div
            onClick={filterCollections}
            className={`px-3 flex items-center border border-1 border-grey cursor-pointer bg-light ${nftCollections && 'disabled'}`}>
            SORT &nbsp;<FaSort className='text-lg' />
          </div>
        </div>
        <div className='mt-2 grid lg:w-[950px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
          {
            !isOffline && nftCollections ? nftCollections.map((data, index) => {
              return data.value?.image && data.value?.name && data.value?.price &&
                <ItemCard url={data.value?.image} name={data.value?.name} price={data.value?.price} key={index} />
            })
              :
              defaultCollection.map((d, i) => {
                return <ItemCardSkeleton key={i} />
              })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsContainer;
