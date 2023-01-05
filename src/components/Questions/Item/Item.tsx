import React from 'react';

interface ItemProps {
  title: string;
}
const Item = ({ title }: ItemProps) => {
  return (
    <button className="mb-2 flex w-full flex-row items-center justify-between border-b-[1px] border-[#DBDBDB] pt-5 pb-[23px]">
      <span className="text-[22px] leading-[31px] text-[#0F0F0F]">{title}</span>

      <span className="origin-center rotate-90">&gt;</span>
    </button>
  );
};

export default Item;
