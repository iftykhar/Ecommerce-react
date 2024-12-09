import React from 'react';
import Slider from 'react-slick';
import promotional from "../assets/promotional.png"; 
import sofa from "../assets/sofa.png";

const Banner = () => {
  
  const images = [promotional, promotional, promotional]; 

  const settings = {
    dots: true,
    infinite: false, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
  };

  return (
    // <section className="w-full">
    //   <div className=" mx-auto">
    //     <Slider {...settings}>
    //       {images.map((image, index) => (
    //         <div key={index} className="flex justify-center">
    //           <img src={image} alt={`promotional image ${index + 1}`} className="w-full h-auto" />
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </section>
    <section>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="w-1/2">
                    <h4 className='text-[#FB2E86] font-bold'>Best Furniture For Your Castle....</h4>
                    <h2>New Furniture Collection Trends in 2020</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</p>
                </div>
                <div className="w-[40%] flex justify-end">
                    <img className="w-2/3" src={sofa} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner;

