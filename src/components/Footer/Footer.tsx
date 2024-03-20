import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logotext from '../../assets/KSW.png';
import './Footer.css';
const Footer: React.FC = () => {
  return (
    <>
      <footer className="mt-10 lg:mt-20">
        <div
          className="h-auto w-[85%] m-auto flex flex-col sm:m-auto"
          style={{ background: '#FFFFF9' }}
        >
          <div className="flex flex-col mb-4 md:flex-row justify-left">
            <div className="flex flex-col items-center justify-end mb-5 lg:mr-20 md:mr-14 md:items-start ">
              <div className="mb-6">
                <Link to="/">
                  <img className="w-80" src={Logotext} alt="Logo" />
                </Link>
              </div>
              <div className="mb-2">
                <p className="text-justify">
                  At <b>KSW Techzone</b>, we focus on moving fast and coming up
                  with new ideas. We use the best methods to create products and
                  make businesses better. We work in areas like Healthcare,
                  Design, and Data Science, using AI to do new things.
                </p>
              </div>
            </div>

            <div className="md:w-full sm:w-full ">
              <form action="">
                <div className="flex flex-col pb-2">
                  <input
                    type="text"
                    className="border border-gray-400 p-2 w-[100%] rounded-md focus:outline-none"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="flex flex-col pb-2">
                  <input
                    type="email"
                    className="border border-gray-400 p-2 w-[100%] rounded-md focus:outline-none"
                    placeholder="Email *"
                  />
                </div>
                <div className="flex flex-col pb-2">
                  <input
                    type="tel"
                    className="p-2 border border-gray-400 rounded-md focus:outline-none"
                    placeholder="Phone *"
                  />
                </div>
                <div className="flex flex-col pb-2">
                  <input
                    type="text"
                    className="p-2 border border-gray-400 rounded-md focus:outline-none"
                    placeholder="Subject"
                  />
                </div>
                <div className="">
                  <textarea
                    className="border border-gray-400 p-2 w-[100%] rounded-md focus:outline-none"
                    placeholder="Message"
                  />
                </div>
                <div className="">
                  <input
                    type="submit"
                    value={'Submit'}
                    className="bg-[#004AAD] p-2 my-2 w-[100%] font-semibold text-white rounded-md hover:cursor-pointer hover:bg-[rgb(0,50,120)]"
                    placeholder="Subject"
                  />
                </div>
              </form>
            </div>
          </div>
          <hr className="bg-black" />

          <div className="flex flex-row justify-center mt-10 space-x-2 sm:space-x-4">
            <Link to="https://www.facebook.com/profile.php?id=100093997620977">
              <FaFacebook
                className="changeBg"
                style={{ fontSize: '30px', color: '#004AAD' }}
              />
            </Link>
            <Link to="https://twitter.com/">
              <FaTwitter style={{ fontSize: '30px', color: '#004AAD' }} />
            </Link>
            <Link to="https://www.instagram.com/kswtechzone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FaInstagram style={{ fontSize: '30px', color: '#004AAD' }} />
            </Link>
            <Link to="https://www.linkedin.com/company/kswtechzone">
              <FaLinkedin style={{ fontSize: '30px', color: '#004AAD' }} />
            </Link>
          </div>
          <div className=" text-center md:flex flex-row justify-center md:mx-10 lg:mx-44 sm:space-x-4 text-sm my-4 pb-[30px]">
            <Link to="/" className="underline">
              Privacy Policy
            </Link>
            <p>
              Copyright 2024, <strong>KSW TechZone</strong>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
