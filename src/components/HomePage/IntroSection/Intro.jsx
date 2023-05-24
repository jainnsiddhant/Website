import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Intro.css';

const Intro = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My React Homepage</h1>
        <p>This is the introduction section of my React homepage.</p>
      </header>
      <footer>
        <form>
        <SearchBar />
        </form>
      </footer>
    </div>
  );
};

export default Intro;