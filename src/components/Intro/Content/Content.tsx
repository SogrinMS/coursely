import React from 'react';

const Content = () => {
  return (
    <>
      <h1 className="mb-5 text-[49px] leading-tight text-[#0F0F0F]">Learn How To Launch a Successful Podcast</h1>

      <p className="pb-3 text-xl text-[#464646]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>

      <p className="mb-8 text-[31px] font-bold leading-tight tracking-[0.5px] text-[#0F0F0F]">
        $189
        <span className="ml-1.5 text-[20px] font-normal leading-[22px] text-[#757575] line-through">$399</span>
      </p>

      <div className="flex flex-row gap-3">
        <button className="bg-[#E48D8B] py-1 px-8 text-[15px] leading-relaxed text-[#FFFFFF] transition-colors duration-300 ease-in hover:bg-[#017CFF]">
          Enroll Now
        </button>

        <button disabled className="bg-[#EDEDED] px-6 py-2 text-[18px] font-bold leading-[27px] text-[#757575]">
          &gt; Watch Trailer
        </button>
      </div>
    </>
  );
};

export default Content;
