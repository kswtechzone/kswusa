import Expert from '../../assets/WhyChooseUsImage/Expert.png';
import Agility from '../../assets/WhyChooseUsImage/Agility.png';
import Collaboration from '../../assets/WhyChooseUsImage/Collaboration.png';
import Innovation from '../../assets/WhyChooseUsImage/Innovation.png';
import Versility from '../../assets/WhyChooseUsImage/Versility.png';
import Customer from '../../assets/WhyChooseUsImage/Customer.png';
import Strategic from '../../assets/WhyChooseUsImage/Strategic.png';
import Attention from '../../assets/WhyChooseUsImage/Attention.png';
import Global from '../../assets/WhyChooseUsImage/Global.png';
import Improvement from '../../assets/WhyChooseUsImage/Improvement.png';
import Driven from '../../assets/WhyChooseUsImage/Driven.png';
import Solution from '../../assets/WhyChooseUsImage/solution.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function WhyChooseUsSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CARDS = [
    {
      image: Expert,
      title: 'Expertise in ',
      spanTitle: 'Technical Field',
      description: 'Proven professionals delivering exceptional results.',
    },
    {
      image: Collaboration,
      title: 'Collabo',
      spanTitle: 'ration',
      description: 'Your vision shapes our customized strategies.',
    },
    {
      image: Innovation,
      title: 'Inno',
      spanTitle: 'vation',
      description: 'Proven professionals delivering exceptional results.',
    },
    {
      image: Customer,
      title: 'Customer-',
      spanTitle: 'Centric Focus',
      description: 'Open communication, transparency, and responsiveness.',
    },
    {
      image: Versility,
      title: 'Versa',
      spanTitle: 'tility',
      description: 'Comprehensive services tailored to diverse business needs',
    },
    {
      image: Agility,
      title: 'Agi',
      spanTitle: 'lity',
      description: 'Swift adaptability to changes for continued success',
    },
    {
      image: Strategic,
      title: 'Strategic ',
      spanTitle: 'Insight',
      description:
        'Beyond technical expertise, we offer valuable strategic recommendations.',
    },
    {
      image: Attention,
      title: 'Attention ',
      spanTitle: 'to Detail',
      description: 'Meticulous work ensuring precision and quality.',
    },
    {
      image: Global,
      title: 'Global Perspective, ',
      spanTitle: 'Local Understanding',
      description: 'Diverse experiences with a local touch.',
    },
    {
      image: Improvement,
      title: 'Continuous ',
      spanTitle: 'Improvement',
      description: 'A commitment to evolving with industry standards.',
    },
    {
      image: Driven,
      title: 'Results-Driven ',
      spanTitle: 'Approach',
      description:
        'Focused on delivering tangible outcomes that align with your goals.',
    },
    {
      image: Solution,
      title: 'Cost-Effective ',
      spanTitle: 'Solutions',
      description:
        'Optimal value with efficient use of resources for budget-conscious strategies.',
    },
  ];

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      arrows={true}
    >
      {CARDS.map((card, index) => {
        return (
          <div
            key={index}
            className="w-full lg:w-auto bg-white mt-5 md:px-5 lg:h-[600px] "
          >
            <div className="flex flex-col items-center md:mt-20 text-center border border-gray-100 rounded-md shadow-md w-full">
              <div className="w-full h-52 lg:h-96 overflow-hidden">
                <img
                  src={card.image}
                  alt="gem"
                  className="inline-block w-full h-full md:h-60 lg:h-96 bg-contain object-cover rounded"
                />
              </div>

              <div className="flex flex-col items-start justify-start w-full gap-4 px-4 py-8 text-left border-t border-gray-100 md:h-[250px] lg:h-[224px]">
                <h3 className="font-bold text-[1.2rem] sm:text-[2rem]">
                  {card.title}
                  <span className="text-blue-700">{card.spanTitle}</span>
                </h3>
                <p className="text-[0.8rem] sm:text-[1rem]">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
