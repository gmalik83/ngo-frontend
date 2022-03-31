import React from 'react';
import Articles from './Articles';
import Slider from './Slider';
import Footer from './Footer';

export const Home = () => {
  return (
    <div>
      <Slider />
      <Articles />
      <Articles />
      <Footer />
    </div>
  );
};
