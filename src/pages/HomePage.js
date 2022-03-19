import React from 'react';
import Hero from '../components/Hero/Hero';
import Essentials from '../components/Essentials/Essentials';
import CategoryGrid from '../components/Essentials/CategoryGrid';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Essentials />
      <CategoryGrid />
    </>
  );
};

export default HomePage;
