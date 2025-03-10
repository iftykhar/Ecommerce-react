import React, { useContext } from 'react'
import chair from '../assets/chair.png';
import Slider from "react-slick";
// import { apidata } from './ContextApi';
import { apidata } from './ContextApi';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";




const Featured = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 20000,
        // autoplaySpeed: 20000,
      };

    
    let response = useContext(apidata);

    // Slice the response to only get the first 8 or 9 products
    let limitedResponse = response.slice(0, 10);

    return (
        <section>
            <div className="container mx-auto">
                <div className="text-center pt-8 pb-4">
                    <h2 className='text-[42px] font-josef font-bold'>Featured Products</h2>
                </div>
                <Slider {...settings}>
                    {limitedResponse.map((item) => (
                        <div className="!w-[95%] shadow-lg group" key={item.id}>
                            <div className="flex justify-center bg-[#F6F7FB] pt-12 pb-4 px-6 relative overflow-hidden">
                                <img src={item.thumbnail} alt="" />
                            
                                <div className="flex gap-3 absolute -left-10 top-3 group-hover:left-4 duration-300 ease-in-out p-2 text-2xl font-bold">

                                    <i className=""><IoCartOutline /></i>
                                    <i className=""><CiHeart /></i>
                                    <i className=""><HiMagnifyingGlassPlus /></i>
                                </div>
                            </div>
                            <div className="text-center pt-4 pb-10 group-hover:bg-[#2F1AC4]">
                                <h2 className='text-[#FB2E86] text-[18px] group-hover:text-white'>{item.title}</h2>
                                <h4 className='group-hover:text-white'>Code - Y523201</h4>
                                <p className='group-hover:text-white'>${item.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Featured
