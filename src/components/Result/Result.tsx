import React from 'react';

import Coins from '../../../public/icons/coins.svg';
import Community from '../../../public/icons/community.svg';
import ImageIcon from '../../../public/icons/image.svg';
import Microphone from '../../../public/icons/microphone.svg';
import Music from '../../../public/icons/music.svg';
import Paper from '../../../public/icons/paper.svg';
import Repair from '../../../public/icons/repair.svg';
import Tv from '../../../public/icons/tv.svg';
import Item from './Item/Item';

const Result = () => {
  return (
    <section className="container relative mx-auto px-4 py-24">
      <div className="absolute right-[-11px] top-0 h-[59px] w-[59px] bg-[#87CDFF]"></div>

      <h2 className="text-4xl font-bold text-[#0F0F0F]">By the end of the 4-week course...</h2>

      <div className="mt-16">
        <div className="mb-12 flex flex-row justify-between">
          <Item
            icon={<Microphone />}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <Item
            icon={<ImageIcon />}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua."
          />

          <Item icon={<Tv />} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />

          <Item
            icon={<Coins />}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua."
          />
        </div>

        <div className="flex flex-row justify-between">
          <Item
            icon={<Music />}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          />

          <Item
            icon={<Community />}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua."
          />

          <Item
            icon={<Repair />}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <Item
            icon={<Paper />}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          />
        </div>
      </div>
    </section>
  );
};

export default Result;
