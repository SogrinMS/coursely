import Image from 'next/image';
import React from 'react';

const Learn = () => {
  return (
    <section className="container mx-auto py-4">
      <div className="flex flex-row justify-between py-24">
        <Image src="/images/Teacher@2x.png" alt="teacher" width={498} height={520} />

        <div className="flex w-[500px] flex-col justify-center">
          <p className="mb-[18px] text-[38px] font-bold leading-tight text-[#0F0F0F]">
            Learn with Joyce and Rob, your podcast teachers
          </p>

          <p className="text-lg font-normal text-[#0F0F0F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between pb-24">
        <div className="flex w-[500px] flex-col justify-center">
          <p className="mb-[18px] text-[38px] font-bold leading-tight text-[#0F0F0F]">
            Get the editing skills you need to thrive
          </p>

          <p className="text-lg font-normal text-[#0F0F0F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <Image src="/images/Learn@2x.png" alt="learn" width={512} height={487} />
      </div>
    </section>
  );
};

export default Learn;
