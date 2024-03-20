import React from 'react';
import './pricing.css';

interface PricingPlan {
  name: string;
  currency: string;
  number: number;
  sep: string;
  month: string;
  description: string;
  details: string[];
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    currency: 'Rs',
    number: 10000,
    sep: '/',
    month: 'mon',
    description: 'For marketing newbies and small house teams',
    details: [
      'Social Media Management*1500',
      '6 Graphical Banners*500=3000',
      '1 GIF/Video (10 Secs Or Less)*800',
      'Platforms: Facebook, Instagram*1000',
      '1 Free Festive Post*500=500',
      'Direct Advertisement*500',
    ],
  },
  {
    name: 'Basic',
    currency: 'Rs',
    number: 20000,
    sep: '/',
    month: 'mon',
    description: 'For new but established companies seeking to grow',
    details: [
      'Social Media Management',
      'Planning And Strategy',
      'Profile / Cover Image Creation [Included]',
      '10 Graphical Banners',
      '2 GIFs (10 Secs) Or 1 Video (20 Secs Or Less)',
      'Platforms: Facebook, Instagram',
      '1 Free Festive Post',
      'Content Calendar',
      'Organic Promotion',
      'Monthly Reporting',
      'Keyword Based Content',
      'Direct Advertisement + Ads Manager',
    ],
  },
  {
    name: 'Standard',
    currency: 'Rs',
    number: 28000,
    sep: '/',
    month: 'mon',
    description: 'For those looking to grow their business/brand',
    details: [
      'Social Media Management',
      'Planning And Strategy',
      'Profile / Cover Image Creation [Included]',
      '15 Graphical Banners',
      '3 GIFs (10 Secs) / 2 Video (15 Secs Or Less)',
      'Platforms: Facebook, Instagram, Tiktok',
      'Competitor Analysis',
      '2 Free Festive Post',
      'Content Calendar',
      'Organic Promotion',
      'Lead Generation',
      'Customer Review',
      'Weekly Meeting',
      'Advertisement Management',
      'Monthly Reporting',
      'Keyword Based Content',
      'Direct Advertisement + Ads Manager',
    ],
  },
  {
    name: 'Premium',
    currency: 'Rs',
    number: 40000,
    sep: '/',
    month: 'mon',
    description: 'For those looking to sell products or build a brand',
    details: [
      'Social Media Management',
      'Planning And Strategy',
      'Profile / Cover Image Creation [Included]',
      '20 Graphical Banners',
      '4 GIFs (10 Secs) / 3 Video (15 Secs Or Less)',
      'Platforms: Facebook, Instagram, Tiktok And LinkedIn',
      'Competitor Analysis',
      '3 Free Festive Post',
      'Content Calendar',
      'Organic Promotion',
      'Lead Generation',
      'Customer Review',
      'Weekly Meeting',
      'Advertisement Management',
      'A/B Testing',
      'Pixels For Remarketing',
      'Conversation Management',
      'Monthly Reporting',
      'Keyword Based Content',
      'Direct Advertisement + Ads Manager',
    ],
  },
];

const SocialMediaPackages: React.FC = () => {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="mb:10 md:mb-20">
          <div className="h-auto w-full lg:w-[80%] m-auto  z-10">
            <div className="z-10 flex flex-col justify-around p-4 sm:flex-row sm:p-0">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="z-10 flex flex-col justify-between h-auto bg-white rounded-md p-4 w-full md:w-[25%] mb-4 sm:m-1 lg:m-4"
                >
                  <div>
                    <p className="text-xl font-bold text-center">{plan.name}</p>
                    <p className="text-xl font-bold text-center text-blue-700">
                      <span className="text-sm font-extrabold align-top ">
                        {plan.currency}{' '}
                      </span>
                      {plan.number}
                      {plan.sep} {plan.month}
                    </p>
                    <p className="text-[12x] sm:text-[12px] lg:text-sm text-center">
                      {plan.description}
                    </p>
                    <div className="border-t-4 border-dashed border-[#828282] mt-4 mb-6"></div>
                    <ul className="pl-4 list-disc">
                      {plan.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center w-full mt-8">
                    <button className="w-full bg-[#004AAD] hover:bg-[rgb(0,50,120)] pt-3 pb-3 text-white font-semibold  mb-2 rounded-lg mt-3 ease-in duration-900]">
                      Select Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaPackages;
