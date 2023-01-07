import React, { ReactNode } from 'react';

import CheckMark from '../../../../public/icons/check-mark.svg';

interface Price {
  actual: string;
  full: string;
}

interface CardProps {
  icon: ReactNode;
  title: string;
  price: Price;
  description: string;
  advantages: string[];
}

const Card = ({ icon, title, price, description, advantages }: CardProps) => {
  const { actual, full } = price;

  return (
    <div className="w-[430px] bg-[#FFFFFF] p-12 pb-8">
      <div className="mx-auto mb-[11px] h-10 w-10">{icon}</div>

      <h3 className="mb-4 text-center text-4xl font-normal text-[#464646]">{title}</h3>

      <p className="mb-9 text-center text-3xl tracking-wide text-[#017CFF]">
        {actual}

        <span className="ml-2 inline-block text-xl text-[#757575]">{full}</span>
      </p>

      <p className="mx-auto mb-3 w-[230px] text-[17px] leading-7 text-[#464646]">{description}</p>

      <button className="mx-auto mb-14 block bg-[#017CFF] py-2 px-8 text-lg text-[#FFFFFF]">Get Access Now</button>

      <ul>
        {advantages.map((advantage) => (
          <li
            key={advantage}
            className="mb-[10px] flex flex-row items-center gap-1 text-[17px] leading-[25px] text-[#464646] last:mb-0"
          >
            <span className="inline-block h-[23px] w-[22px]">
              <CheckMark />
            </span>

            {advantage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
