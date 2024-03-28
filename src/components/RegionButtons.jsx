
import React from 'react';

const RegionButtons = ({ onRegionChange }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania','All'];

  return (
    <div className='flex justify-center text-1xl font-bold gap-6 my-14  '>
      {regions.map((region, index) => (
          <button
              className='hover:text-red-400'
              key={index}
              onClick={() => onRegionChange(region)}>{region}
          </button>
      ))}
    </div>
  );
};

export default RegionButtons;






