import Link from 'next/link';
import React from 'react';

interface Link {
  url: string;
  text: string;
}

interface Menu {
  title: string;
  links: Link[];
}

const Menu = ({ title, links }: Menu) => {
  return (
    <div className="w-[120px]">
      <span className="mb-4 block text-sm uppercase tracking-wider text-[#B1B1B1]">{title}</span>

      {links.map(({ url, text }) => (
        <Link
          key={text}
          href={url}
          className="mb-2 block text-sm text-[#0F0F0F] transition-opacity duration-300 ease-in last:mb-0 hover:opacity-80"
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
