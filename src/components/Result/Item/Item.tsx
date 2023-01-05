import React, { ReactNode } from 'react';

interface ItemProps {
  icon: ReactNode;
  text: string;
}

const Item = ({ icon, text }: ItemProps) => {
  return (
    <div className="w-[247px]">
      <div className="mb-3 h-10 w-10">{icon}</div>

      <p className="text-[15px] font-normal leading-6 text-[#0F0F0F]">{text}</p>
    </div>
  );
};

export default Item;
