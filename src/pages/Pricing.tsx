import { useState } from 'react';
import { NavBar } from '../components';
import SeoPackagesVector from '../components/Pricing/SeoPackagesVector';
import SocialMediaPackages from '../components/Pricing/SocialMediaPackages';
import SeoPackages from '../components/Pricing/SeoPackages';
import Container from '../components/Container';
import WebPackages from '../components/Pricing/WebPackages';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('WEB');

  return (
    <>
      <div>
        <div className="relative overflow-hidden overflow-x-hidden">
          <SeoPackagesVector />
          <NavBar />

          <Container>
            <div className="relative flex flex-col items-center w-full gap-4 mt-12">
              <div className="flex items-center justify-center w-full gap-2 p-2">
                <div className="w-[3rem] border-b-2 border-blue-500"></div>
                <h2 className="text-black text-[0.8rem] sm:text-[1rem] font-semibold z-10">
                  SUBSCRIPTION PLANS
                </h2>
                <div className="w-[3rem] border-b-2 border-blue-500"></div>
              </div>

              {/* <div className="relative flex flex-col items-center w-full gap-4 mt-12">
                <button className="py-3 px-6 bg-[#004AAD] hover:bg-[rgb(0,50,120)] rounded-md text-gray-50 font-semibold lg:absolute -top-24 right-0">
                  Download Brouchure
                </button>
              </div> */}

              <div>
                <p className="text-[1.2rem] sm:text-[2rem] font-bold z-10 ">
                  {selectedCategory === 'SOCIALMEDIA' && (
                    <>
                      Social Media{' '}
                      <span className="z-10 text-blue-700">Packages</span>
                    </>
                  )}
                  {selectedCategory === 'SEO' && (
                    <>
                      Seo <span className="z-10 text-blue-700">Packages</span>
                    </>
                  )}
                  {selectedCategory === 'WEB' && (
                    <>
                      Web <span className="z-10 text-blue-700">Packages</span>
                    </>
                  )}
                </p>{' '}
              </div>

              <div className="text-[#5a5a5a] pl-4">
                <p className="z-10 m-5 text-sm sm:text-md">
                  Choose plans from our simple, transparent pricing. &nbsp;
                  <Link to="https://drive.google.com/drive/folders/1p35CxvmnisR7KGSu6nMDNi0ZUr3vyhav?usp=sharing" className="underline hover:text-[rgb(0,50,120)]">
                    Download Brouchure
                  </Link>
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:gap-4">
                <button
                  className={`w-48 py-3 md:px-6 hover:bg-[rgb(0,50,120)]   rounded-md h text-gray-50 font-semibold  ${
                    selectedCategory === 'SOCIALMEDIA'
                      ? 'bg-[rgb(0,50,120)]'
                      : 'bg-[#004AAD]'
                  }`}
                  onClick={() => setSelectedCategory('SOCIALMEDIA')}
                >
                  Social Media Package
                </button>

                <button
                  className={`w-48 py-3 md:px-6 hover:bg-[rgb(0,50,120)] rounded-md h text-gray-50 font-semibold ${
                    selectedCategory === 'WEB'
                      ? 'bg-[rgb(0,50,120)]'
                      : 'bg-[#004AAD]'
                  }`}
                  onClick={() => setSelectedCategory('WEB')}
                >
                  Web Package
                </button>

                <button
                  className={`w-48 py-3 md:px-6  hover:bg-[rgb(0,50,120)] rounded-md h text-gray-50 font-semibold  ${
                    selectedCategory === 'SEO'
                      ? 'bg-[rgb(0,50,120)]'
                      : 'bg-[#004AAD]'
                  }`}
                  onClick={() => setSelectedCategory('SEO')}
                >
                  Seo Package
                </button>
              </div>
            </div>
          </Container>

          <div className="mb-40 md:py-20 md:mt-20 bg-gray-50">
            <Container className="px-0 md:px-4">
              {selectedCategory === 'SEO' && <SeoPackages />}
              {selectedCategory === 'SOCIALMEDIA' && <SocialMediaPackages />}
              {selectedCategory === 'WEB' && <WebPackages />}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
