import React from 'react';
import Image from 'next/image';

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className='flex w-full justify-between p-4 cursor-pointer'>
        <div className='flex'>
          <div className={`font-medium text-xl transition-all ${activeIndex === index ? 'text-theme-light' : 'text-primary'}`}>
            {title}
          </div>
        </div>
        <div className={`flex items-center justify-center transition-transform duration-200 ease-in-out ${activeIndex === index && "rotate-[-180deg]"}`}>
          <Image
            src={"/images/VectorDown.svg"}
            width={16}
            height={16}
            alt="btn-icon"
            />
        </div>
      </div>

        <div className={`h-0 text-left shadow-3xl rounded-2xl text-primary leading-6 ${activeIndex === index && "h-28 px-4"} overflow-hidden transition-all`}>
          {children}
        </div>
      {/* {(activeIndex === index) && (
      )} */}
    </>
  );
};

export default AccordionLayout;

//  h-0 overflow-hidden