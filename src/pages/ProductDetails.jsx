import React, { useContext } from 'react'
import PageHeading from '../components/PageHeading'
import { useParams } from 'react-router-dom'
import { apidata } from '../components/ContextApi'
import { FaStar } from "react-icons/fa";


const ProductDetails = () => {

    let productId = useParams()

    let data = useContext(apidata)

    let singleProduct = data.filter((item)=> item.id == productId.id)

    return (
    <section>

      <PageHeading headline="Shop Grid Default" page="Product Details" />
      <div className="container mx-auto">
            {singleProduct.map((item)=>(
                <div className="">
                    {/* <div className="flex ">
                        {singleProduct[0]?.images?.map((images)=>(
                            <div className="w-[25%]">
                                <img src={images} alt="image" />
                            </div>
                        ))}
                            <div className=" px-3 py-10 text-start items-center">
                                <h2 className='font-bold text-3xl font-josef'>{item.title}</h2>
                                <div className="flex items-center mt-4" >
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    
                                </div>
                                <div className="w-[45%] py-4">
                                    <p className="font-semibold">Description</p>
                                    <p className="py-6">{item.description}</p>
                                </div>
                                <div className="w-[45%] py-2">
                                    <p className="font-semibold">Category</p>
                                    <p className="py-4">{item.category}</p>
                                </div>
                                
                            </div>
                    </div> */}
                        <div className="flex flex-wrap md:flex-nowrap gap-4 py-4">
                            {/* Image Gallery */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full md:w-[50%]">
                                {singleProduct[0]?.images?.map((image, index) => (
                                <div
                                    key={index}
                                    className="h-32 md:h-48 overflow-hidden rounded-md border border-gray-200"
                                >
                                    <img
                                    src={image}
                                    alt={`product-image-${index}`}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                ))}
                            </div>

                            {/* Product Description */}
                            <div className="flex-1 px-4 py-6 text-start">
                                {/* Product Title */}
                                <h2 className="font-bold text-3xl font-josef text-gray-800">
                                {item.title}
                                </h2>

                                {/* Ratings */}
                                <div className="flex items-center mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-300" />
                                ))}
                                </div>

                                {/* Product Details */}
                                <div className="mt-6">
                                {/* Description */}
                                <div className="mb-6">
                                    <p className="font-semibold text-lg text-gray-700">Description</p>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>

                                {/* Category */}
                                <div className="mb-6">
                                    <p className="font-semibold text-lg text-gray-700">Category</p>
                                    <p className="text-gray-600">{item.category}</p>
                                </div>
                                </div>
                            </div>
                        </div>

                    
                    <div className="text-justify py-4 mb-4 px-4 border-2 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200">
                        {/* Product Title */}
                        <h3 className="font-sans font-semibold text-lg text-gray-800 mb-2">
                            {item.title}
                        </h3>

                        {/* Price and Discount */}
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-sans font-bold text-primary text-xl">
                            ${item.price}
                            </p>
                            <p className="font-sans text-sm text-red-500 font-semibold bg-red-100 px-2 py-1 rounded">
                            -{item.discountPercentage}%
                            </p>
                        </div>

                        {/* Description */}
                        <p className="font-sans text-sm text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                </div>
                
            ))}
      </div>
    </section>
  )
}

export default ProductDetails
