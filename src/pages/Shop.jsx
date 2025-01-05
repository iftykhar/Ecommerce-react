// import React from 'react'
// import PageHeading from '../components/PageHeading'

// const Shop = () => {
//   return (
//     <>
//       <PageHeading headline="Shop Grid Default" page="Shop Grid Default"/>
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          
//         </div>
//       </div>
//     </>
//   )
// }

// export default Shop

import React, { useContext } from 'react';
import PageHeading from '../components/PageHeading';
import { apidata } from '../components/ContextApi';

const Shop = () => {
  let data = useContext(apidata)

  return (
    <>
      <PageHeading headline="Shop Grid Default" page="Shop Grid Default" />
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          {/* Left Section */}
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-2">
              Ecommerce Accesories & Fashion item
            </h2>
            <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mt-4 lg:mt-0">
            {/* Per Page */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Per Page:</span>
              <input
                type="number"
                className="w-16 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="10"
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Sort By:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="default">Best Match</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>

            {/* View */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex space-x-1">
                <button className="border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-primary">
                  <span className="material-icons text-sm">grid_view</span>
                </button>
                <button className="border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-primary">
                  <span className="material-icons text-sm">view_list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between py-2">
      {data.map((item) => (
         <div className="!w-[24%] shadow-lg group" key={item.id}>
             <div className="flex justify-center bg-[#F6F7FB] pt-12 pb-4 px-6 relative overflow-hidden">
                 <img src={item.thumbnail} alt="" />
                 <button className='text-base rounded-md absolute left-1/2 -translate-x-1/2 px-10 py-2 bg-green-500 -bottom-16 duration-300 ease-in-out group-hover:bottom-2'>View Details</button>
                 <div className="flex gap-3 absolute -left-40 top-0 group-hover:left-2 duration-300 ease-in-out">
                     <i>icon</i>
                     <i>icon</i>
                     <i>icon</i>
                 </div>
             </div>
             <div className="text-center pt-4 pb-10 group-hover:bg-[#2F1AC4]">
                 <h2 className='text-[#FB2E86] text-[18px] group-hover:text-white'>{item.title}</h2>
                 <h4 className='group-hover:text-white'>Code - Y523201</h4>
                 <p className='group-hover:text-white'>${item.price}</p>
             </div>
         </div>
      ))}
      </div>
    </>
  );
};

export default Shop;
