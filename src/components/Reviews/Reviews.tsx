import React from 'react';

import Item from './Item/Item';

const Reviews = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-center text-4xl font-normal">More Praise From our Students</h2>

        <div className="columns-3 gap-8">
          <Item
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            imageSrc="/images/Matthew@2x.png"
            name="Jamie Matthew"
          />

          <Item
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="/images/Matthew@2x.png"
            name="Jamie Matthew"
          />

          <Item
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            imageSrc="/images/Matthew@2x.png"
            name="Jamie Matthew"
          />

          <Item
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            imageSrc="/images/Matthew@2x.png"
            name="Jamie Matthew"
          />

          <Item
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            imageSrc="/images/Matthew@2x.png"
            name="Jamie Matthew"
          />

          <Item
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageSrc="/images/Matthew@2x.png"
            name="Jamie Matthew"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
