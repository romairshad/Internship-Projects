import React from 'react';

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-6 py-3 text-lg font-semibold rounded ${className}`}
    {...props}
  >
    {children}
  </button>
);

const FreelancerManagement = () => {
  return (
    <div className="bg-gray-200 p-6 m-20 md:p-10 lg:p-12  flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-6 md:space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          THAT LOT
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
          Give your company a faster, more agile way to work with freelancers and contractors. Find contract and
          pay your external workforce in one click, with 100% compliance.
        </p>
        <div className="flex justify-end">
          <Button className="bg-black text-white hover:bg-gray-800">
            BOOK A DEMO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerManagement;