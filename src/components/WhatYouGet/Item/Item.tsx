import React, { ReactNode } from 'react';

interface ItemProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const Item = ({ icon, title, text }: ItemProps) => {
  return (
    <div className="flex w-[334px] flex-col gap-[13px]">
      <div className="h-10 w-10">{icon}</div>

      <span className="text-[25px] font-normal leading-8 text-[#0F0F0F]">{title}</span>

      <p className="text-lg font-normal text-[#0F0F0F]">{text}</p>
    </div>
  );
};

export default Item;
