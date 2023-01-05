import Image from 'next/image';
import React from 'react';

import QuoteIcon from '../../../public/icons/quote.svg';

const Quote = () => {
  return (
    <section className="bg-[#194677]">
      <div className="container mx-auto flex flex-col items-center gap-[25px] px-4 py-24">
        <QuoteIcon />

        <p className="w-[646px] text-center text-2xl italic text-[#FFFFFF]">
          At some point you have to say, damn, they shouldn&#39;t be giving out all the info I&#39;m learning, it&#39;s
          too much of a shortcut.
          <span className="text-[#E48D8B]"> And yet, there is all it, packaged up in an amazing course.</span>
        </p>

        <div>
          <Image src="/images/Matthew@2x.png" alt="Jamie Matthew" width={100} height={100} className="mx-auto" />

          <p className="mt-2 text-lg text-[#FFFFFF]">Jamie Matthew</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
