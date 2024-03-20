import { Link } from 'react-router-dom';

interface CardsProps {
  props?: string;
  title?: string;
  desc?: string;
  imgSrc?: string;
  link?: string;
}

const PlartformCard: React.FC<CardsProps> = ({
  title,
  desc,
  props,
  imgSrc,
  link,
}) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center w-auto h-auto ">
        <article
          className={`group relative aspect-video md:h-96  h-[15rem] md:w-[36rem] w-[15rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl my-6 ${props}`}
        >
          <img
            className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ease-out opacity-90 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
            src={imgSrc}
            alt=""
          />
          <div className="absolute inset-0 text-white transition-all duration-300 bg-gradient-to-t from-transparent group-hover:bg-gradient-to-t group-hover:from-transparent group-hover:to-purple-900/100 group-hover:transition-all group-hover:duration-500">
            <p className="absolute md:left-8 md:top-1/2 left-8 top-10 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300 text-gray-300">
              <h1 className="text-2xl font-bold text-slate-200">{title}</h1>
              {desc}
            </p>
            <Link
              className="absolute bottom-8 left-8 max-w-[80%] rounded-lg   uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300 "
              to={`${link}`}
              target="_blank"
            >
              <button
                type="button"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-50 bg-[#004AAD] hover:bg-[#004AAD]/70 
                 uppercase"
              >
                Live Preview
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default PlartformCard;
