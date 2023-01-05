import React from 'react';

interface ItemProps {
  title: string;
  text: string;
}

const Item = ({ title, text }: ItemProps) => {
  return (
    <div className="w-[194px] text-center">
      <span className="mb-[33px] block text-[80px] font-bold leading-[64px] text-[#FFFFFF]">{title}</span>

      <p className="text-lg text-[#FFFFFF]">{text}</p>
    </div>
  );
};

export default Item;
