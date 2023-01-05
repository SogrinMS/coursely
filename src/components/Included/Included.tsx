import React from 'react';

import Item from './Item/Item';

const items = [
  {
    title: '6',
    text: 'Chapters',
  },
  {
    title: '56+',
    text: 'Podcast Ideas',
  },
  {
    title: '28',
    text: 'Videos',
  },
  {
    title: '4',
    text: 'Free Resources',
  },
  {
    title: '$8k',
    text: 'Worth of Value',
  },
];

const Included = () => {
  return (
    <section className="relative bg-[#017CFF]">
      <div className="absolute left-0 top-0 h-[59px] w-[59px] bg-[#E48D8B]"></div>

      <div className="container relative mx-auto px-4 py-24">
        <h2 className="mb-12 text-center text-[38px] leading-tight text-[#FFFFFF]">What&#39;s Included?</h2>

        <div className="flex flex-row gap-10">
          {items.map(({ title, text }) => (
            <Item key={title} title={title} text={text} />
          ))}
        </div>

        <div className="absolute right-[-11px] bottom-0 h-[59px] w-[59px] bg-[#87CDFF]"></div>
      </div>
    </section>
  );
};

export default Included;
