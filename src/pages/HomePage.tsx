import {
  FirstTestTube,
  NavBar,
  VectorAnimatedImage,
  WeProvides,
  Testimonial,
  Our,
} from '../components';
import OurPartner from '../components/HomeComponent/OurPartner';

function HomePage() {
  return (
    <>
      <div
        className="h-screen relative overflow-hidden bg-[#dff0f2]"
        style={{ minHeight: '-webkit-fill-available' }}
      >
        <VectorAnimatedImage />
        {/* <Logo className="absolute lg:h-36 lg:w-36 h-[5rem] w-[8rem] cursor-pointer lg:top-[6rem] lg:left-[4.8rem] md:top-[5.4rem] md:left-[5rem] top-[5.5rem] left-[3rem]" /> */}
        <NavBar />

        <FirstTestTube />
        <div className="w-4/5 m-auto sm:w-1/2 lg:w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-1/3 xl:top-1/3 lg:-translate-x-0 lg:translate-y-0 lg:left-48">
          <h3 className="font-semibold text-base sm:text-lg lg:text-2xl xl:text-4xl text-center md:text-left">
            <span className="font-bold">KSW TechZone</span>
            <br />
            <span className="font-light text-2xl">Empowering Your Digital Presence</span>
          </h3>
          <br />
          <p className="font-light text-xs sm:text-sm lg:text-base xl:text-lg text-justify leading-relaxed">
            At KSW TechZone, we transcend boundaries, turning your digital
            dreams into reality. As a leading IT Services and Software
            Development company based in Nepal, we specialize in a diverse range
            of services that elevate your online presence.
          </p>
        </div>
      </div>
      <WeProvides />
      <Testimonial />
      <OurPartner />
      <Our />
    </>
  );
}

export default HomePage;
