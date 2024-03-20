import React from 'react';
import { Link } from 'react-router-dom';
import contactSvg from '../../assets/contact.svg';
import Container from '../Container';

const ContactMain: React.FC = () => {
  return (
    <Container>
      <div className="h-screen flex flex-col md:flex-row items-center justify-center">
        <div className=" lg:max-w-xl">
          <h2 className="py-5 text-[1.2rem] sm:text-[2rem] font-bold">
            Let's <span className='text-[#004AAD]'>Connect</span>
          </h2>
          <p className="text-[0.8rem] sm:text-[1rem] text-justify py-2 text-gray-700">
            Whether you have a project in mind or just want to explore how KSW
            TechZone can elevate your digital presence, we're here to help.
            Reach out to us, and let's start a conversation.
          </p>

          <div className="h-auto my-3 contact-information">
            {/* <h2 className="text-[1.6rem]">Contact Information</h2> */}
            <div className="text-[0.8rem] sm:text-[1rem] text-gray-700 py-3">
              <h2 className="py-1">
                Imadol,Lalitpur<br></br>
              </h2>
              <h2 className="py-1">
                +977-9863198323<br></br>
              </h2>
              <h2 className="py-1">
                <Link to="mailto:">
                  kswtechzone@gmail.com
                  <br />
                </Link>
                <span className="">contact@kswtechzone.com</span>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <img src={contactSvg} alt="" className="h-full" />
        </div>
      </div>
      <div className="">
        <div className="sm:pt-3 lg:h-[700px] w-full rounded-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8741294666534!2d85.34508437632786!3d27.65936577621009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb173bf68b2d87%3A0x22a42fe8a2872c8a!2sKSW%20TECHZONE!5e0!3m2!1sen!2snp!4v1710143276574!5m2!1sen!2snp"
            loading="lazy"
            className="h-full w-full rounded-3xl"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default ContactMain;
