// import React, { useContext } from 'react';
// import { apidata } from './ContextApi';
import React from 'react';
import chair from '../assets/chair.png';

const LatestProduct = () => {
//   return (
//     <section className="pt-10">
//             <div className="container mx-auto">
//                 <div className="text-center pt-8 pb-4">
//                     <h2 className='text-[42px] font-josef font-bold'>Leatest Products</h2>
//                 </div>
//             </div>
//     </section>
//   )
// // }
// const LatestProduct = () => {


//     let response = useContext(apidata);

    // const products = Array(3).fill({
    //   id: 1,
    //   title: "Comfort Handy Craft",
    //   originalPrice: 6600,
    //   discountedPrice: 4200,
    //   discount: "50%",
    //   rating: 4.5,
    //   colors: ["bg-red-500", "bg-blue-500", "bg-green-500"],
    //   isNew: true
    // });
  
    return (
    //   <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
    //     {/* Section Header */}
    //     <div className="text-center mb-12">
    //       <h2 className="text-4xl font-bold mb-4 text-gray-900">
    //         Latest Products
    //       </h2>
    //       <div className="flex flex-wrap justify-center gap-3 mb-8">
    //         {["New Arrival", "Best Seller", "Featured", "Special Offer"].map(
    //           (filter) => (
    //             <button
    //               key={filter}
    //               className={`px-5 py-2 rounded-full transition-all ${
    //                 filter === "New Arrival"
    //                   ? "bg-indigo-600 text-white shadow-lg hover:bg-indigo-700"
    //                   : "bg-white text-gray-600 shadow-md hover:shadow-lg hover:text-indigo-600"
    //               }`}
    //             >
    //               {filter}
    //             </button>
    //           )
    //         )}
    //       </div>
    //     </div>
  
    //     {/* Product Grid */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    //       {products.map((product, index) => (
    //         <div
    //           key={index}
    //           className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    //         >
    //           {/* Badges */}
    //           <div className="absolute top-4 right-4 flex flex-col gap-2">
    //             {product.isNew && (
    //               <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
    //                 NEW
    //               </div>
    //             )}
    //             <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
    //               {product.discount} OFF
    //             </div>
    //           </div>
  
    //           {/* Product Image */}
    //           <div className="h-64 bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
    //             <img
    //               src="/latestproduct.jpeg"
    //               alt="Product"
    //               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    //             />
    //             <button className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100">
    //               Quick View
    //             </button>
    //           </div>
  
    //           {/* Product Details */}
    //           <div className="space-y-3">
    //             <h3 className="text-lg font-bold text-gray-900">
    //               {product.title}
    //             </h3>
                
    //             {/* Rating */}
    //             <div className="flex items-center space-x-1">
    //               {[...Array(5)].map((_, i) => (
    //                 <svg
    //                   key={i}
    //                   className={`w-4 h-4 ${
    //                     i < product.rating
    //                       ? "text-yellow-400"
    //                       : "text-gray-300"
    //                   }`}
    //                   fill="currentColor"
    //                   viewBox="0 0 20 20"
    //                 >
    //                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //                 </svg>
    //               ))}
    //               <span className="text-sm text-gray-500 ml-1">
    //                 ({product.rating})
    //               </span>
    //             </div>
  
    //             {/* Color Variants */}
    //             <div className="flex space-x-2">
    //               {product.colors.map((color, i) => (
    //                 <div
    //                   key={i}
    //                   className={`w-6 h-6 rounded-full border-2 border-white shadow-sm ${color} ${
    //                     i === 0 ? "ring-2 ring-indigo-500" : ""
    //                   }`}
    //                 />
    //               ))}
    //             </div>
  
    //             {/* Pricing */}
    //             <div className="flex items-baseline gap-3">
    //               <span className="text-2xl font-bold text-indigo-600">
    //                 ${product.discountedPrice}
    //               </span>
    //               <span className="text-gray-400 line-through">
    //                 ${product.originalPrice}
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
  
    //     {/* View More Button */}
    //     <div className="mt-12 text-center">
    //       <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
    //         View All Products
    //       </button>
    //     </div>
    //   </div>
    // <section>
    //    <div className="!w-[95%] shadow-lg group" key={item.id}>
    //                         <div className="flex justify-center bg-[#F6F7FB] pt-12 pb-4 px-6 relative overflow-hidden">
    //                             <img src={item.thumbnail} alt="" />
    //                             <button className='text-base rounded-md absolute left-1/2 -translate-x-1/2 px-10 py-2 bg-green-500 -bottom-16 duration-300 ease-in-out group-hover:bottom-2'>View Details</button>
    //                             <div className="flex gap-3 absolute -left-40 top-0 group-hover:left-2 duration-300 ease-in-out">
    //                                 <i>icon</i>
    //                                 <i>icon</i>
    //                                 <i>icon</i>
    //                             </div>
    //                         </div>
    //                         <div className="text-center pt-4 pb-10 group-hover:bg-[#2F1AC4]">
    //                             <h2 className='text-[#FB2E86] text-[18px] group-hover:text-white'>{item.title}</h2>
    //                             <h4 className='group-hover:text-white'>Code - Y523201</h4>
    //                             <p className='group-hover:text-white'>${item.price}</p>
    //                         </div>
    //                     </div> 
    // </section>
    <section>   
        <div className="container mx-auto">
                <div className="text-center pt-8 pb-4">
                    <h2 className='text-[42px] font-josef font-bold'>Leatest Products</h2>
                </div>
            
            <div className=" flex justify-between">
                <div className="">
                    <div className="">
                        <img className='' src={chair} alt="" />
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="">
                    <div className="">
                        <img className='' src={chair} alt="" />
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="">
                    <div className="">
                        <img className='' src={chair} alt="" />
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="">
                    <div className="">
                        <img className='' src={chair} alt="" />
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    </section>
    
    );
  }


export default LatestProduct
