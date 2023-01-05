import Image from 'next/image';
import React from 'react';

import Content from './Content/Content';

const Intro = () => {
  return (
    <section className="container mx-auto mb-[122px] flex flex-row justify-between px-4">
      <div className="w-[500px] pt-[160px]">
        <Content />
      </div>

      <Image src="/images/Intro@2x.png" alt="video" width={583} height={490.4} className="mt-[122px] mr-[-50px]" />
    </section>
  );
};

export default Intro;
