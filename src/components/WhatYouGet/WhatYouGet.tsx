import React from 'react';

import Coins from '../../../public/icons/coins.svg';
import Community from '../../../public/icons/community.svg';
import Microphone from '../../../public/icons/microphone.svg';
import Item from './Item/Item';

const WhatYouGet = () => {
  return (
    <section className="container mx-auto flex flex-row justify-between px-4 py-24">
      <Item
        icon={<Microphone />}
        title="Learn what the best gear is and where to get it"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <Item
        icon={<Community />}
        title="How to find guests for your episodes"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <Item
        icon={<Coins />}
        title="And how to finally make some money"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </section>
  );
};

export default WhatYouGet;
