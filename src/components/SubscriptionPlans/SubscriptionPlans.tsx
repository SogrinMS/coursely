import React from 'react';

import Book from '../../../public/icons/book.svg';
import Books from '../../../public/icons/books.svg';
import Card from './Card/Card';

const essential = [
  '24 videos',
  '1 month free access',
  'Helpful templates and resources',
  'All course updates for free',
];

const premium = [
  '24 videos',
  '1 month free access',
  'Helpful templates and resources',
  'All course updates for free',
  'Access to all future courses',
  '1-on-1 help with the tutors',
  'Monthly catch-ups',
];

const SubscriptionPlans = () => {
  return (
    <section className="bg-[#E48D8B]">
      <div className="container mx-auto py-24 px-4">
        <h2 className="mb-16 text-center text-4xl font-normal text-[#FFFFFF]">It&#39;s Time to Start Your Podcast</h2>

        <div className="flex flex-row items-start justify-center gap-10">
          <Card
            icon={<Book />}
            title="Essential"
            price={{ actual: '$189', full: '$399' }}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            advantages={essential}
          />

          <Card
            icon={<Books />}
            title="Premium"
            price={{ actual: '$399', full: '$899' }}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            advantages={premium}
          />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
