import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Intro from '../components/IntroSection/Intro';
import Path from '../components/PathsHomepage/Path';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <Path/>
        </div>
    );
};

export default Home;
