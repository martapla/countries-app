
import React from 'react';

const RegionButtons = ({ onRegionChange }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania','All'];

  return (
    <div className='flex flex-wrap justify-center text-2xl md:text-3xl font-bold gap-4 md:gap-6 my-8 md:my-14 mx-2 md:mx-6'>
      {regions.map((region, index) => (
          <button
              className=' text-cyan-800 hover:text-red-500 hover:underline'
              key={index}
              onClick={() => onRegionChange(region)}>{region}
          </button>
      ))}
    </div>
  );
};

export default RegionButtons;






