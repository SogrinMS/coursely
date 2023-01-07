/* eslint-disable react/jsx-newline */
import Link from 'next/link';
import React from 'react';

import Logo from '../../../public/icons/coursely.svg';
import Menu from './Menu/Menu';

const site = [
  {
    url: '#',
    text: 'Home',
  },
  {
    url: '#',
    text: 'Contact',
  },
  {
    url: '#',
    text: 'FAQs',
  },
  {
    url: '#',
    text: 'Terms & Conditions',
  },
  {
    url: '#',
    text: 'Privacy Policy',
  },
];

const admin = [
  {
    url: '#',
    text: 'Style Guide',
  },
  {
    url: '#',
    text: 'Licenses',
  },
  {
    url: '#',
    text: 'Instructions',
  },
  {
    url: '#',
    text: 'Password',
  },
  {
    url: '#',
    text: '404',
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#FBFBFB]">
      <div className="container mx-auto flex flex-row justify-between px-4 py-16">
        <div className="w-[395px]">
          <Link href="#" className="w-[156px] transition-opacity duration-300 ease-in hover:opacity-80">
            <Logo />
          </Link>

          <p className="my-6 text-lg text-[#0F0F0F]">
            The last landing page you&#39;ll ever need to launch your next course.
          </p>

          <p className="text-sm text-[#0F0F0F]">
            Built by{' '}
            <Link href="#" className="text-[#017CFF] underline hover:no-underline">
              Nikolai Bain
            </Link>
            . Powered by{' '}
            <Link href="#" className="text-[#017CFF] underline hover:no-underline">
              Webflow
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-row gap-20">
          <Menu title="Site" links={site} />
          <Menu title="Admin" links={admin} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
