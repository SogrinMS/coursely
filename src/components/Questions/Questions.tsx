import React from 'react';

import Item from './Item/Item';

const items = [
  {
    title: 'How long is the course?',
  },
  {
    title: 'When does the next intake start?',
  },
  {
    title: "I'm not sure if this course is suitable for me?",
  },
  {
    title: 'How long do I have to complete the course?',
  },
];

const Questions = () => {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 h-[59px] w-[59px] bg-[#E48D8B]"></div>

      <div className="container relative mx-auto px-4 py-[122px] text-center">
        <h2 className="text-[38px] font-normal leading-[46px] text-[#0F0F0F]">Any Questions?</h2>

        <div className="mx-auto mt-10 w-[800px]">
          {items.map(({ title }) => (
            <Item key={title} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
