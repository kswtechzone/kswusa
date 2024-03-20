interface ButtonProps {
  textColor?: string;
  hoverEffect?: string;
  buttonName?: string;
  props?: string;
  width?: string;
  svg?: boolean;
  transparent?: boolean;
}

function Button({
  textColor,
  hoverEffect,
  buttonName,
  props,
  width,
  svg,
  transparent,
}: ButtonProps) {
  return (
    <>
      <div
        className={`bg-[#014AAC] px-4 py-2 my-2 w-[100%] font-semibold text-gray-50 rounded-md hover:cursor-pointer hover:bg-[rgb(0,50,120)] ${width} ${transparent ? 'bg-transparent' : 'bg-[#014AAC] w-48 duration-300'}`}
      >
        <button
          type="button"
          className={`rounded-md ${props} font-semibold ${textColor} ${hoverEffect}`}
        >
          {buttonName}
        </button>
        {svg && (
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
            className="md:h-[29px] md:w-[29px]  h-[20px] w-[20px] text-white"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        )}
      </div>
    </>
  );
}

export default Button;
