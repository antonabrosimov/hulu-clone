import React, { useState } from 'react';

import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Results from './components/results/Results';
import requests from './requests';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className='App'>
      <Header />

      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
