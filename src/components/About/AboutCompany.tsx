import React from 'react';
import { Link } from 'react-router-dom';
import { BiCommand, BiGroup, BiSolidGroup, BiTerminal } from 'react-icons/bi';

import './about.css';
import Container from '../Container';
import AboutVector from './AboutVector';
import Company from '../../assets/company.svg';
import { Button, NavBar, WhyChooseUs } from '..';

const WHAT_SET_US_APART = [
  {
    icon: BiCommand,
    title: 'Expertise Across Industries',
    description: `Whether you're a startup navigating the digital landscape or an established enterprise seeking to elevate your online presence, we have the expertise to cater to your unique requirements. From e-commerce solutions to robust enterprise applications, our portfolio spans diverse industries.`,
  },
  {
    icon: BiSolidGroup,
    title: 'Client-Centric Approach',
    description: `Your success is at the core of what we do. We approach every project with a client-centric mindset, tailoring our solutions to align with your business objectives. Your challenges are our challenges, and your victories are our victories.`,
  },
  {
    icon: BiTerminal,
    title: 'Innovation at Every Step',
    description: `Innovation is not just a buzzword for us; it's a way of life. We stay ahead of the curve, incorporating the latest technologies and trends into our solutions. This commitment to innovation ensures that your digital presence is always at the forefront.`,
  },
  {
    icon: BiGroup,
    title: 'Meet the Team',
    description: `Our team is the driving force behind KSW TechZone's success. Comprising talented individuals with diverse expertise, our team is united by a shared passion for technology and a commitment to delivering excellence. Meet the faces behind our success on our Team.`,
  },
];

const AboutCompany: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: '-webkit-fill-available' }}
    >
      <AboutVector />
      <NavBar />

      <div className="bg-[#e5f8fb] sm:rounded-t-full my-10 p-2">
        <Container>
          <div className="grid lg:grid-cols-2 min-h-screen">
            <div className="z-0 flex flex-col justify-center p-2 sm:p-10">
              {/* About Description */}
              <div className="pb-2">
                <p className="text-[1.2rem] sm:text-[2rem] font-bold my-4">
                  Welcome to <span className="text-blue-700">KSW TechZone</span>
                </p>

                <p className="text-sm leading-loose text-justify">
                  At KSW TechZone, we don't just build software; we craft
                  digital experiences that empower businesses to thrive in the
                  ever-evolving digital landscape. Founded in the heart of
                  Nepal, we are a dynamic team of passionate individuals
                  dedicated to delivering innovative solutions and unparalleled
                  service.
                </p>
              </div>

              {/* Our Values */}
              <div>
                <p className="text-[1.2rem] sm:text-[2rem] font-bold my-4">
                  Our <span className="text-blue-700"> Values</span>
                </p>

                <p className="text-sm leading-loose text-justify">
                  In the dynamic digital landscape, we{' '}
                  <span className="font-bold text-[0.8rem] sm:text-[1rem] pr-2">
                    innovate
                  </span>{' '}
                  boldly, crafting solutions that truly stand out.{' '}
                  <span className="font-bold text-[0.8rem] sm:text-[1rem] pr-2">
                    Excellence
                  </span>{' '}
                  is our standard, evident in every line of code and strategy we
                  deploy. Yet, our success is entwined with yours. Through close{' '}
                  <span className="font-bold text-[0.8rem] sm:text-[1rem] pr-2">
                    collaboration
                  </span>
                  , we tailor our approach to meet your unique needs and goals.{' '}
                  <span className="font-bold text-[0.8rem] sm:text-[1rem] pr-2">
                    Transparency
                  </span>{' '}
                  and{' '}
                  <span className="font-bold text-[0.8rem] sm:text-[1rem] pr-2">
                    integrity
                  </span>{' '}
                  underpin every interaction, fostering trust and openness. We
                  believe in clear communication and ethical practices, ensuring
                  our partnerships thrive on a foundation of mutual respect.
                </p>
              </div>
            </div>
            <div className="z-0 flex items-center justify-center p-1 sm:p-2">
              <img src={Company} className="w-full max-w-[500px]" alt="svg" />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* What sees us apart */}
        <div className="mb-10 ">
          <h2 className="mb-10 text-[1.2rem] sm:text-[2rem] font-bold text-center">
            What Sets Us <span className="text-blue-700">Apart</span>
          </h2>
          <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {WHAT_SET_US_APART.map((w) => {
              return (
                <li className="rounded-md bg-gray-50">
                  <div className="flex flex-col gap-4 p-5">
                    <div className="flex items-center gap-4">
                      <w.icon className="text-blue-700 size-10" />
                      <p className="text-xl font-semibold">{w.title}</p>
                    </div>
                    <p className="text-sm leading-loose text-justify text-gray-500">
                      {w.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <WhyChooseUs />

      {/* See our teams */}
      <div className="flex items-center justify-center w-full my-0 text-white md:my-20">
        <Link
          to="/ourteam"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <Button
            width="w-56"
            textColor="white"
            hoverEffect=""
            buttonName="See our Teams"
            props="font-bold w-[195px] rounded-lg md:text-lg "
          />
        </Link>
      </div>

      {/* Our Story and mission */}
      <div className="px-12 text-center">
        <p className="text-[1.2rem] sm:text-[2rem] font-bold my-4">
          Our <span className="text-blue-700">Story</span> &{' '}
          <span className="text-blue-700">Mission</span>
        </p>
        <p className="leading-loose text-center">
          The journey of KSW TechZone began with a{' '}
          <span className="font-medium">simple</span> yet{' '}
          <span className="font-medium">ambitious</span> vision to{' '}
          <span className="font-medium">redefine</span> the possibilities of
          technology for businesses of all sizes. Established in 2022, our
          founder set out on a <span className="font-medium">mission</span> to
          <span className="font-medium">bridge</span> the gap between{' '}
          <span className="font-medium">cutting-edge</span> technology and
          practical,
          <span className="font-medium">results-driven</span> solutions,
          bringing different platforms for ease of mankind. Over the years, our
          commitment to this <span className="font-medium">vision</span> has
          propelled us to become a <span className="font-medium">trusted</span>{' '}
          name in the world of IT Services and Software Development. At KSW
          TechZone, our <span className="font-medium">mission</span> is{' '}
          <span className="font-medium">clear</span>: to empower businesses
          through technology. We believe that technology should not be a{' '}
          <span className="font-medium">barrier</span> but a{' '}
          <span className="font-medium">catalyst</span> for{' '}
          <span className="font-medium">growth</span>. Through{' '}
          <span className="font-medium">bespoke</span> solutions and a{' '}
          <span className="font-medium">client-centric</span> approach, we aim
          to be the <span className="font-medium">driving force</span> behind
          your digital <span className="font-medium">success</span>.
        </p>
      </div>

      {/* Our Vision */}
      {/* <div className="px-12 text-center">
          <p className="text-[1.2rem] sm:text-[2rem] font-bold my-4">
            Our <span className="text-blue-700">vision</span>
          </p>
          <p className="leading-loose text-center">
            To be a trailblazer in the global tech landscape, setting new
            standards for group of platforms, excellence and innovation.
          </p>
        </div> */}

      {/* Join us today */}
      <div className="py-20 bg-gray-50">
        <div className="mb-4">
          <p className="text-[1.2rem] sm:text-[2rem] font-bold text-center">
            Join Us on the
            <span className="text-blue-700"> Digital Journey</span>
          </p>
        </div>
        <div className="w-full sm:w-[50%] m-auto">
          <p className="px-2 mb-5 leading-loose text-justify text-md sm:text-center sm:px-0">
            Whether you're looking for web development, digital marketing, IT
            consulting, or a combination of these services, KSW TechZone is your
            dedicated partner. Join us on the digital journey, and let's
            transform your aspirations into digital reality.
          </p>

          <div className="flex items-center justify-center w-full my-20">
            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Button
                width="w-56"
                textColor="text-gray-50"
                hoverEffect=""
                buttonName="Get in Touch"
                props="font-bold w-[195px] rounded-lg md:text-lg "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
