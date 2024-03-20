import React from 'react';

interface PlanItem {
  text: string;
  isActive: boolean;
}

interface cardProps {
  heading: string;
  btn: string;
  initial: PlanItem[];
  setup: PlanItem[];
  technical: PlanItem[];
  offPageSEOContent: PlanItem[];
  localSEOContent: PlanItem[];
  monthlyReportContent: PlanItem[];
}

const SeoPackageCard: React.FC<cardProps> = ({
  heading,
  btn,
  initial,
  setup,
  technical,
  offPageSEOContent,
  localSEOContent,
  monthlyReportContent,
}) => {
  return (
    <div className="w-full p-4 m-auto mt-4 text-black border-2 rounded-md shadow-xl h-fit border-gray-50">
      <div>
        <h1 className="pt-6 text-2xl font-medium text-center">{heading}</h1>
      </div>
      <div className="w-[80%] m-auto mt-4 border-2 rounded-sm border-dashed pl-2 pr-2"></div>
      <div className="pb-4 pl-2 mt-8">
        <h3 className="font-bold text-[0.8rem] sm:text-[1rem] mt-1 mb-1">
          Initail website Analysis
        </h3>
        <ul className="mb-4">
          {initial.map((item, index) => {
            return (
              <div key={index} className="flex gap-2 ">
                {item.isActive ? (
                  <img
                    src="/SeoPackage/check.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                ) : (
                  <img
                    src="/SeoPackage/cross.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                )}
                <li>{item.text}</li>
              </div>
            );
          })}
        </ul>

        <h3 className="font-bold text-[0.8rem] sm:text-[1rem] mt-1 mb-1">
          On page setup
        </h3>
        <ul className="mb-4">
          {setup.map((item, index) => {
            return (
              <div key={index} className="flex items-start gap-2">
                {item.isActive ? (
                  <img
                    src="/SeoPackage/check.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                ) : (
                  <img
                    src="/SeoPackage/cross.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                )}
                <li>{item.text}</li>
              </div>
            );
          })}
        </ul>

        <h3 className="font-bold text-[0.8rem] sm:text-[1rem] mt-1 mb-1">
          Technical Seo
        </h3>
        <ul className="mb-4">
          {technical.map((item, index) => {
            return (
              <div key={index} className="flex items-start gap-2">
                {item.isActive ? (
                  <img
                    src="/SeoPackage/check.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                ) : (
                  <img
                    src="/SeoPackage/cross.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                )}
                <li>{item.text}</li>
              </div>
            );
          })}
        </ul>

        <h3 className="font-bold text-[0.8rem] sm:text-[1rem] mt-1 mb-1">
          Off Page Seo
        </h3>
        <ul className="mb-4">
          {offPageSEOContent.map((item, index) => {
            return (
              <div key={index} className="flex items-start gap-2">
                {item.isActive ? (
                  <img
                    src="/SeoPackage/check.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                ) : (
                  <img
                    src="/SeoPackage/cross.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                )}
                <li>{item.text}</li>
              </div>
            );
          })}
        </ul>

        <h3 className="font-bold text-[0.8rem] sm:text-[1rem] mt-1 mb-1">
          Local seo
        </h3>
        <ul className="mb-4">
          {localSEOContent.map((item, index) => {
            return (
              <div key={index} className="flex items-start gap-2">
                {item.isActive ? (
                  <img
                    src="/SeoPackage/check.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                ) : (
                  <img
                    src="/SeoPackage/cross.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                )}
                <li>{item.text}</li>
              </div>
            );
          })}
        </ul>

        <h3 className="font-bold text-[0.8rem] sm:text-[1rem] mt-1 mb-1">
          Monthly Report
        </h3>
        <ul className="mb-4">
          {monthlyReportContent.map((item, index) => {
            return (
              <div key={index} className="flex items-start gap-2">
                {item.isActive ? (
                  <img
                    src="/SeoPackage/check.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                ) : (
                  <img
                    src="/SeoPackage/cross.png"
                    alt=""
                    className="relative w-3 h-3 top-2"
                  />
                )}
                <li>{item.text}</li>
              </div>
            );
          })}
        </ul>
      </div>

      <h1 className="pl-4 text-sm font-bold">Dedicated Project Manager</h1>

      <h1 className="pl-4 mt-4 text-sm font-bold">
        Contract : <span className="font-medium">MiniMum 6 months</span>
      </h1>

      <div className="flex justify-center w-full mt-8">
        <button className="w-full bg-[#004AAD] hover:bg-[rgb(0,50,120)]  pt-3 pb-3 text-gray-50 font-semibold  mb-2 rounded-lg mt-3 ease-in duration-900]">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default SeoPackageCard;
