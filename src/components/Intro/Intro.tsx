import React from 'react';

import Content from './Content/Content';

const Intro = () => {
  return (
    <section className="container mx-auto flex flex-row justify-between">
      <div className="w-[500px] pt-[160px]">
        <Content />
      </div>
    </section>
  );
};

export default Intro;
