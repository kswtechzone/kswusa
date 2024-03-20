import React from 'react';
// import { BiDownArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

type Data = {
  title: string;
  link: string;
}[];

interface DropDownProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: Data;
}
const DropDown: React.FC<DropDownProps> = ({ show, data }) => {
  return (
    <>
      <div
        className={`mt-2  ${
          show ? 'absolute right-0 top-5  md:top-5 md:-left-16' : 'hidden'
        } bg-slate-100 rounded-md p-2 w-[120px] z-50 duration-300`}
      >
        {data.map((ele, index: number) => {
          return (
            <Link to={`/${ele.link}`}>
              <div
                className="max-w-[120px] my-1 rounded-[40px] p-1 text-left hover:font-semibold font-medium text-[0.8rem]"
                key={index}
              >
                {ele.title}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
