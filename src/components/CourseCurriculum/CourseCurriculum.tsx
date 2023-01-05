import React from 'react';

import Item from './Item/Item';

const items = [
  {
    title: 'Outlining your Idea',
  },
  {
    title: 'Finding Guests',
  },
  {
    title: 'Growing & Connecting',
  },
  {
    title: 'Profiting From Your Podcast',
  },
  {
    title: 'Building Your Brand',
  },
  {
    title: 'Long Term Thinking',
  },
];

const CourseCurriculum = () => {
  return (
    <section className="py-24">
      <h2 className="text-center text-[38px] font-bold leading-tight text-[#0F0F0F]">The Course Curriculum</h2>

      <div className="mx-auto mt-16 w-[600px]">
        {items.map(({ title }) => (
          <Item key={title} title={title} />
        ))}
      </div>
    </section>
  );
};

export default CourseCurriculum;
