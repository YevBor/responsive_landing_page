import { useState } from 'react';
import dashboardImage1 from '../assets/dashboards/dashboard-1.png';
import dashboardImage2 from '../assets/dashboards/dashboard-2.png';
import dashboardImage3 from '../assets/dashboards/dashboard-3.png';
import '../styles/sliderStyles.css';

const ImageSlider = () => {
  const slides = [dashboardImage1, dashboardImage2, dashboardImage3];

  const [currentIndex, setCurrentIndex] = useState(0);



  return (
    <div className="slider-container">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt="Dashboard"
            className="slide-image"
          />
        ))}
      </div>
      <div className="dots">
        {slides.map((_slide, index) => (
          <div key={index} onClick={()=>{setCurrentIndex(index)}}>
            <span
              className={`${
                currentIndex === index ? 'dot dot__active' : 'dot'
              }`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
