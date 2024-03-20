import Slider from 'react-slick';

import WhyChooseUsVetcor from './WhyChooseUsVetcor';
import Container from '../Container';

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

// const settings = {
//   dots: true,
//   speed: 500,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   responsive: [
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 320,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
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

export default function WhyChooseUs() {
  return (
    <div
      className="relative mt-20"
      style={{ minHeight: '-webkit-fill-available' }}
    >
      <WhyChooseUsVetcor />

      {/* why to chose us components  */}
      <Container>
        <div className="py-8 mt-4 text-center md:mt-2 ">
          <h2 className="text-2xl mb-5 font-bold sm:text-3xl md:text-4xl lg:text-5xl ">
            Why to <span className="text-blue-700">Choose US?</span>
          </h2>
          <h1 className="font-light text-xl sm:text-2xl text-center px-3 sm:w-1/2 sm:m-auto">
            We Achieve Our Client's Satisfaction Through Our Good Works
          </h1>
          <Slider {...settings}>
            {CARDS.map((card, index) => {
              return (
                <li
                  key={index}
                  className="w-full lg:w-auto bg-white mt-5 md:px-5"
                >
                  <div className="flex flex-col items-center md:mt-20 text-center border border-gray-100 rounded-md shadow-md w-full md:h-[30rem]">
                    <div className="w-full h-52  lg:h-96 overflow-hidden">
                      <img
                        src={card.image}
                        alt="gem"
                        className="inline-block w-full h-full md:h-60 lg:h-96 bg-contain object-cover rounded"
                      />
                    </div>

                    <div className="flex flex-col items-start justify-start w-full gap-4 px-4 py-8 text-left border-t border-gray-100">
                      <h3 className="font-bold text-[1.2rem] sm:text-[2rem]">
                        {card.title}
                        <span className="text-blue-700">{card.spanTitle}</span>
                      </h3>
                      <p className="text-[0.8rem] sm:text-[1rem]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
}
