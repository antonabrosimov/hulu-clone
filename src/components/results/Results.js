import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from '../videoCard/VideoCard';
import Axios from '../../axios';
import FlipMove from 'react-flip-move';

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await Axios.get(selectedOption);

      setMovies(res.data.results);
      return res;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className='results'>
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
