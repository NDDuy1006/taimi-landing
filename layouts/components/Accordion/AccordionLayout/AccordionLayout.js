import React from 'react';
import Image from 'next/image';

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

  return (
    <div className='p-4 cursor-pointer' onClick={() => handleSetIndex(index)}>
      <div className='flex w-full justify-between cursor-pointer'>
        <div className='flex'>
          <h3 className={`transition-all ${activeIndex === index ? 'text-primary' : 'text-dark'}`}>
            {title}
          </h3>
        </div>
        <div className={`flex items-center justify-center transition-transform duration-200 ease-in-out ${activeIndex === index && "rotate-[-180deg]"}`}>
          <Image
            src={activeIndex === index ?  "/images/VectorUp.svg" : "/images/VectorDown.svg"}
            width={16}
            height={16}
            alt="btn-icon"
            />
        </div>
      </div>

      <div className={`h-0 text-left text-light leading-6 font-body ${activeIndex === index && "h-28 pt-4"} overflow-hidden transition-[height]`}>
        {children}
      </div>
      {/* {(activeIndex === index) && (
      )} */}
    </div>
  );
};

export default AccordionLayout;

//  h-0 overflow-hidden