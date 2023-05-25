import React from 'react';
import AccordionLayout from './AccordionLayout/AccordionLayout';

const Accordion = ({ activeIndex, setActiveIndex, title, index, content }) => {

  return (
    <div className={`mt-2 transition-all rounded-xl flex flex-col justify-center items-center border-solid border ${activeIndex === index ? "border-primary" : "border-border"}`}>
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
