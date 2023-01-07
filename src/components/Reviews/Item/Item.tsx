import Image from 'next/image';
import React from 'react';

interface ItemProps {
  text: string;
  imageSrc: string;
  name: string;
}

const Item = ({ text, imageSrc, name }: ItemProps) => {
  return (
    <div className="mb-8 bg-[#EDEDED] p-8">
      <Image src="/images/Stars@2x.png" alt="rating" width={116} height={20} />

      <p className="mt-6 text-base text-[#0F0F0F]">{text}</p>

      <div className="mt-4 flex flex-row items-center gap-3">
        <Image src={imageSrc} alt="rating" width={48} height={48} />

        <p className="text-[15px] leading-relaxed text-[#0F0F0F]">{name}</p>
      </div>
    </div>
  );
};

export default Item;
