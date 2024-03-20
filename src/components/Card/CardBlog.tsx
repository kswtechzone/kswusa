import React from 'react';
import { Button } from '..';
import { Link } from 'react-router-dom';

interface CardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const CardBlog: React.FC<CardProps> = ({ image, date, title, description }) => {
  return (
    <div className="w-full lg:my-10 flex flex-col pt-10 md:flex-row justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 flex sm:px-6">
        <img
          className=" object-contain rounded-lg"
          src={image}
          alt="People Working in Office"
        />
      </div>
      <div className="w-full md:w-1/2 md:items-start sm:my-auto">
        <div className="text-sm md:text-base font-bold text-center md:text-left">
          {date}
        </div>
        <div className="mb-1 text-base md:text-xl lg:text-2xl font-bold text-center md:text-left">
          <p>{title}</p>
        </div>
        <div className="mb-1 text-xs font-medium text-center md:text-justify md:text-base lg:text-lg lg: md:mb-2">
          <p className="md:text-[1.1rem]">{description}</p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Link to="/#">
            <Button
              width="w-56"
              textColor="text-white"
              buttonName="READ MORE"
              props="md:text-base md:font-bold text-sm w-[195px] rounded-md "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
