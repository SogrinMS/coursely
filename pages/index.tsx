import Head from 'next/head';

import CourseCurriculum from 'src/components/CourseCurriculum/CourseCurriculum';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import Included from 'src/components/Included/Included';
import Intro from 'src/components/Intro/Intro';
import Learn from 'src/components/Learn/Learn';
import Questions from 'src/components/Questions/Questions';
import Quote from 'src/components/Quote/Quote';
import Result from 'src/components/Result/Result';
import Reviews from 'src/components/Reviews/Reviews';
import SubscriptionPlans from 'src/components/SubscriptionPlans/SubscriptionPlans';
import WhatYouGet from 'src/components/WhatYouGet/WhatYouGet';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>

        <meta name="description" content="Generated by create next app" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Intro />

      <WhatYouGet />

      <Learn />

      <Included />

      <CourseCurriculum />

      <Result />

      <Quote />

      <Questions />

      <SubscriptionPlans />

      <Reviews />

      <Footer />
    </>
  );
};

export default Home;
