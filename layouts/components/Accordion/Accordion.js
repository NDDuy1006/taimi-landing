import React from 'react';
import AccordionLayout from './AccordionLayout/AccordionLayout';

const Accordion = ({ activeIndex, setActiveIndex, title, index, content }) => {

  return (
      <div className='flex flex-col justify-center items-center'>
          <AccordionLayout 
            title={title}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            {content}
          </AccordionLayout>
      </div>
  );
};

export default Accordion;
