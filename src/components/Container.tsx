import { ReactNode } from 'react';

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`max-w-[1600px] mx-auto xl:px-20 md:px-10 sm:px-6 px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
