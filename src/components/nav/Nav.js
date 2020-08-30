import React from 'react';

import requests from '../../requests';
import './Nav.css';

const Nav = ({ setSelectedOption }) => {
  return (
    <div className='nav'>
      <h3 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchActionsMovies)}>
        Action
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchHororMovies)}>
        Horor
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romance
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchMistery)}>Mistery</h3>
      <h3 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h3>
      <h3 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h3>
      <h3 onClick={() => setSelectedOption(requests.fetchAnimation)}>
        Animation
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchTV)}>TVMovie</h3>
    </div>
  );
};

export default Nav;
