import React from 'react';

interface ItemProps {
  title: string;
}

const Item = ({ title }: ItemProps) => {
  return (
    <button className="mb-3 flex w-full flex-row items-center justify-between bg-[#EDEDED] py-[18px] px-6">
      <span className="text-lg text-[#464646]">{title}</span>

      <span className="origin-center rotate-90">&gt;</span>
    </button>
  );
};

export default Item;
