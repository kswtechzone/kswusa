import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

import 'react-multi-carousel/lib/styles.css';
import SmallerTestTube from './SmallerTestTube';
const Testimonial: React.FC = () => {
  const kBackground = `    <svg width="502" height="760" viewBox="0 0 502 760" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M490.555 198.4C484.155 210.4 474.555 222 461.755 233.2C449.755 243.6 438.555 250 428.155 252.4C417.755 254.8 411.355 252.8 408.955 246.4C395.355 209.6 373.355 178.4 342.955 152.8C313.355 126.4 282.155 110.8 249.355 106C216.555 101.2 190.955 104 172.555 114.4C156.555 148 160.955 183.6 185.755 221.2C207.355 254 250.555 283.2 315.355 308.8C359.355 326.4 388.555 339.2 402.955 347.2C466.955 386.4 498.155 436.8 496.555 498.4C494.955 547.2 471.755 594 426.955 638.8C345.355 719.6 252.955 734.8 149.755 684.4C91.3547 655.6 43.3547 611.2 5.75469 551.2C2.55469 545.6 3.75469 536.8 9.35469 524.8C15.7547 512.8 24.9547 501.2 36.9547 490C48.9547 478.8 60.5547 471.2 71.7547 467.2C82.9547 463.2 90.1547 464 93.3547 469.6C136.555 537.6 191.755 583.6 258.955 607.6C302.155 622.8 340.955 624.8 375.355 613.6C386.555 609.6 393.355 606 395.755 602.8C406.155 585.2 408.155 562.4 401.755 534.4C390.555 483.2 346.155 442 268.555 410.8C265.355 409.2 256.155 405.6 240.955 400C197.755 383.2 168.955 369.2 154.555 358C81.7547 305.2 57.7547 242 82.5547 168.4C92.1547 138.8 108.155 112.4 130.555 89.2C187.355 30 248.955 5.19997 315.355 14.8C356.955 20.4 394.155 37.6 426.955 66.4C459.755 94.4 483.355 128.8 497.755 169.6C500.155 176 497.755 185.6 490.555 198.4Z" fill="#FCB9B9" fill-opacity="0.1"/>
    </svg>
    `;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 200 },
      items: 1,
    },
  };
  const sliderImageUrl = [
    {
      url: '/testimonialPictures/Dolma.jpg',
      post: 'Founder - Tryinn7',
      testimonial:
        'Choosing KSW TechZone was a game-changer. Their digital marketing mojo is real! Grateful to have them on our side!',
      name: 'Dolma Lama',
    },
    {
      url: '/testimonialPictures/Bhupen.jpg',
      post: 'CEO – The Lady Hub, Dalima’s Collection',
      testimonial:
        "Our sales skyrocketed thanks to KSW TechZone! Grateful for the impact they've had on our bottom line!",
      name: 'Bhupen Kunwar',
    },
    {
      url: '/testimonialPictures/Dipak.jpg',
      post: 'Founder- Zaira’s Ethnic Ware, The Gears Wizard, Clocksy',
      testimonial:
        "KSW TechZone's digital marketing is like having a personal cheerleader for your brand. Big thanks to the team for making us stand out in the online crowd!",
      name: 'Dipak Rana',
    },
    {
      url: '/testimonialPictures/Jeff.jpg',
      post: 'CEO– Malika Wardrobe',
      testimonial:
        "KSW TechZone transformed our online game! They're our secret weapon for digital success!",
      name: 'Jeff Mahat',
    },
    {
      url: '/testimonialPictures/Khakendra.jpg',
      post: 'Founder- Maharani Trending Shop, Precious Collections',
      testimonial:
        "KSW TechZone = Digital Rockstars! It's like having a winning playbook for online success!",
      name: 'Khakendra Kunwar',
    },
  ];

  return (
    <>
      <div className="w-full pb-5 md:pb-10 mt-10 sm:mt-20">
        <h1 className=" text-[1.2rem] sm:text-[2rem] font-bold text-center">
          Client Testimonials
        </h1>
      </div>

      <div
        className="w-[95%] m-auto flex bg-blue-50 rounded-lg py-10 lg:py-36"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            kBackground,
          )}")`,

          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className="w-[100%] lg:w-[50%] m-auto">
          <div className="w-4/5 sm:w-[60%]  m-auto">
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {sliderImageUrl.map((imageUrl, index) => {
                return (
                  <div key={index}>
                    <img
                      src={imageUrl.url}
                      alt="image"
                      className="h-36 sm:h-44 lg:h-52 object-cover rounded-full aspect-square m-auto"
                    />
                    <div className="flex flex-col items-center justify-center p-4">
                      <h3 className="font-bold">{imageUrl.name}</h3>
                      <h5 className="font-semibold text-center">
                        {imageUrl.post}
                      </h5>
                      <p className="w-48 text-center text-xs">
                        {imageUrl.testimonial}
                      </p>
                      <Link to="/contact" className="mt-10">
                        <button className="py-2 px-3 bg-[#004AAD] rounded-md font-medium text-white hover:bg-[rgb(0,50,120)]">
                          Contact us
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className=" w-full lg:block lg:w-[50%]">
          <SmallerTestTube />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
