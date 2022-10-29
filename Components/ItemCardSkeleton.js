import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ItemCardSkeleton = () => {
 return (
  <SkeletonTheme baseColor="#f8f9fa" highlightColor="#e9edf1">
   <div className='w-fit pb-3 h-fit bg-white rounded-sm overflow-hidden mb-3 cursor-pointer hover:drop-shadow-lg'>
    <Skeleton count={1} height={200} width={200} className="relative -top-1" />
    <div className='px-3'>
     <Skeleton count={1} height={25} width={150} />
     <div className='d-flex justify-content-between mt-2'>
      <Skeleton count={1} height={25} width={90} />
      <Skeleton count={1} height={25} width={25} className="rounded-circle" />
     </div>
    </div>
   </div>
  </SkeletonTheme>
 )
}

export default ItemCardSkeleton;
