import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ItemCardSkeleton from './ItemCardSkeleton';
import { FaSort } from 'react-icons/fa';
import { HiStatusOffline } from 'react-icons/hi';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import _ from 'lodash';
import { nftsCollections } from '../constants';
import { getAllNFTs } from '../helpers/index';
import { toast, ToastContainer } from 'react-toastify';

const ProductsContainer = () => {
  const [defaultCollection, setDefaultCollections] = useState(nftsCollections);
  const [nftCollections, setNftCollections] = useState([]);
  const [isOffline, setOfflineStatus] = useState(false);
  const [offlineView, setOfflineView] = useState(false);

  useEffect(() => {
    if (!window?.web3) {
      toast.warning("Please install metamask wallet.", { toastId: 1 });
      return setOfflineStatus(true);
    }
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
    if (!nftCollections && !offlineView) return;
    let filter = _.sortBy((nftCollections), ["price"]);
    setNftCollections(filter);
  }

  return (
    <div className='py-3 w-100 height-screen bg-slate-100 flex justify-center'>
      <div className='px-2 lg:h-[1000px] md:w-[800px] sm:w-[500px]'>
        <div className='pe-1 flex justify-between items-center w-[920px]'>
          <div className='py-2 flex items-center'>
            <h4 data-tip="React-tooltip">NFT Marketplaces {isOffline}</h4>
            {
              isOffline &&
              <div className='flex items-center'>
                <HiStatusOffline className='mx-4 -mt-1 text-danger text-xl animate-pulse' />
                {
                  offlineView ? <BsEye className='-mt-1 text-2xl cursor-pointer' onClick={() => setOfflineView(!offlineView)} />
                    : <BsEyeSlash className='-mt-1 text-2xl cursor-pointer' onClick={() => setOfflineView(!offlineView)} />
                }
              </div>
            }
          </div>
          <button
            onClick={filterCollections}
            className={`btn btn-warning w-fit px-3 py-1 rounded-1 d-flex justify-around items-center`}>
            SORT <FaSort className='text-lg ml-4' />
          </button>
        </div>
        <div className='mt-2 grid lg:w-[950px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
          {
            !isOffline && nftCollections ? nftCollections.map((d, i) => {
              return d.value?.image && d.value?.name && d.value?.price &&
                <ItemCard url={d.value?.image} name={d.value?.name} price={d.value?.price} key={i} />
            })
              :
              !offlineView ? defaultCollection.map((d, i) => {
                return <ItemCardSkeleton key={i} />
              }) : defaultCollection.map((d, i) => {
                return <ItemCard url={d.image} name={d.name} price={d.price} key={i} />
              })
          }

        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  )
}

export default ProductsContainer;
