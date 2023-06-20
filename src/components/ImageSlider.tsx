// import { useState } from "react";
// import dashboardImage1 from "../assets/dashboards/dashboard-1.png";
// import dashboardImage2 from "../assets/dashboards/dashboard-2.png";
// import dashboardImage3 from "../assets/dashboards/dashboard-3.png";


// export const ImageSlider = () =>{
//     const slides = [
//         dashboardImage1,
//         dashboardImage2,
//         dashboardImage3,
//       ]; 

//     const handleClick = (index:number) => (event: React.MouseEvent<HTMLDivElement>)=>{
//         setCurrentIndex(index)

//     }
//     const [currentIndex, setCurrentIndex] = useState(0);
//     return(
//     <>
//         <div>
//             <img src={slides[currentIndex]} alt="Dashboard" className="w-full p-5 mt-12 " />
//         </div>
//         {slides.map((slide, index) => (
//             <div key={index} onClick={handleClick(index)}><span className={`${currentIndex === index ? 'text-gold' : 'text-grey'} text-2xl pr-2`}>●</span></div>))}
//      </>
//     )
// }

import { useState } from "react";
import dashboardImage1 from "../assets/dashboards/dashboard-1.png";
import dashboardImage2 from "../assets/dashboards/dashboard-2.png";
import dashboardImage3 from "../assets/dashboards/dashboard-3.png";
import "./sliderStyles.css";

export const ImageSlider = () => {
  const slides = [
    dashboardImage1,
    dashboardImage2,
    dashboardImage3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index:number) => (event: React.MouseEvent<HTMLDivElement>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt='Dashboard'
            className="slide-image"
          />
        ))}
      </div>
      <div className="dots">
        {slides.map((slide, index) => (
          <div key={index} onClick={handleClick(index)}>
            <span className={`${currentIndex === index ? 'dot dot__active' : 'dot'}`}></span>
          </div>
        ))}
      </div>
    </div>
  );
};
