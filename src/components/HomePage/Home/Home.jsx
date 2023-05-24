import React from 'react';
import Navbar from '../Navbar/Navbar';
import Intro from '../IntroSection/Intro';
import Path from '../CommonSteps/Path';

const steps = [
  'Step 1',
  'Step 2',
  'Step 3',
  'Step 4'
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Path steps={steps} />
    </div>
  );
};

export default Home;
