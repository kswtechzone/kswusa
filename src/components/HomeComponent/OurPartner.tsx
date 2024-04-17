import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Logo1 from '../../assets/AS Consultency.jpg';
import Logo2 from '../../assets/AS.jpg';
import Logo3 from '../../assets/Logo.png';
import Logo4 from '../../assets/Nepal Dreams.png';
import Logo5 from '../../assets/SPS.jpg';
import Logo6 from '../../assets/Tryinn7.jpeg';
import Logo7 from '../../assets/bernhardt.jpeg';
import Logo8 from '../../assets/fashion plaza.jpg';
import Logo9 from '../../assets/mallika.png';
import Logo10 from '../../assets/tapashya.jpg';

const OurPartner: React.FC = () => {
  // Sample partner logos
  const partnerLogos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500, // Faster slide transition
    slidesToShow: 5, // Display 5 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Faster autoplay speed
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-4/5 m-auto mt-10 sm:mt-20">
      <div>
        <h2 className="text-[1.2rem] sm:text-[2rem] font-bold text-center mb-5 md:mb-10 lg:mb-20">
          Our Partners
        </h2>
      </div>
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner Logo ${index}`}
            style={{
              // maxWidth: '100%',
              aspectRatio: '3/2',
              objectFit: 'contain',
              mixBlendMode: 'color-burn',
            }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default OurPartner;
