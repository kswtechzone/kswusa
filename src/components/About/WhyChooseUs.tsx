import WhyChooseUsVetcor from './WhyChooseUsVetcor';
import Container from '../Container';

import WhyChooseUsSlider from './WhyChooseUsSlider';

export default function WhyChooseUs() {
  return (
    <div
      className="relative mt-20"
      style={{ minHeight: '-webkit-fill-available' }}
    >
      <WhyChooseUsVetcor />

      {/* why to chose us components  */}
      <Container className="md:h-[800px] lg:h-auto ">
        <div className="py-8 mt-4 text-center md:mt-2 ">
          <h2 className="text-2xl mb-5 font-bold sm:text-3xl md:text-4xl lg:text-5xl ">
            Why to <span className="text-blue-700">Choose US?</span>
          </h2>
          <h1 className="font-light text-xl sm:text-2xl text-center px-3 sm:w-1/2 sm:m-auto">
            We Achieve Our Client's Satisfaction Through Our Good Works
          </h1>

          <WhyChooseUsSlider />
        </div>
      </Container>
    </div>
  );
}
