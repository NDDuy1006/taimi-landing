import React from 'react';
import Image from 'next/image';

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className='flex w-full justify-between p-2 cursor-pointer'>
          <div className='flex'>
              <div className='text-primary font-bold text-xl'>{title}</div>
          </div>
          <div className="flex items-center justify-center">
              {
              (activeIndex === index) 
              ? <Image
                src={"/images/VectorUp.svg"}
                width={16}
                height={16}
                alt="btn-icon"
              />
              : <Image
                src={"/images/VectorDown.svg"}
                width={16}
                height={16}
                alt="btn-icon"
              />
              }
          </div>
      </div>

      {(activeIndex === index) && (
          <div className=" text-left shadow-3xl rounded-2xl p-2 text-primary">
            {children}
          </div>
      )}
    </>
  );
};

export default AccordionLayout;
