// import React from 'react'
// import Slider from "react-slick";
// import promotional from "../assets/promotional.png"



// const Banner = () => {
//   return (
//     <section>
//         <div className="container mx-auto   ">
//             <div className="">
//                 <img src="{promotional}" alt="promotional image" />
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Banner
// import React from 'react';
// import promotional from "../assets/promotional.png";

// const Banner = () => {
//   return (
//     <section>
//         <div className="">
//             <div>
//                 <img src={promotional} alt="promotional image" />
//             </div>
//         </div>
//     </section>
//   );
// }

// export default Banner;
import React from 'react';
import Slider from 'react-slick';
import promotional from "../assets/promotional.png";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: false, // Disable infinite loop (images will stop after the last one)
    speed: 500, // Transition speed between slides
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
  };

  return (
    <section className="w-full">
      <div className=" mx-auto">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <img src={promotional} alt="promotional image 1" className="w-full h-auto" />
          </div>
          {/* Slide 2 (Uncomment to add more slides) */}
          <div>
            <img src={promotional} alt="promotional image 2" className="w-full h-auto" />
          </div>
          {/* Slide 3 */}
          <div>
            <img src={promotional} alt="promotional image 3" className="w-full h-auto" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </section>
  );
}

export default Banner;
