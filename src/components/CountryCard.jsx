
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryCard = () => {
  const params = useParams()
  const [country, setCountry] = useState(null)
  const name = params.name

  useEffect(() => {
    const fetchCountryData = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const [data] = await response.json();
        setCountry(data);
    };

    fetchCountryData();
  }, [name]);

  
  if (!country) {
    return <div className='flex justify-center text-cyan-800 text-lg font-semibold'>Loading...</div>;
  }

  return (
    <div className="background-image pt-10 pb-80">

      <h1 className='flex justify-center border-2 bg-white bg-opacity-30 mx-20 rounded-md text-cyan-800 text-2xl md:text-4xl'>{country.name.common}</h1>

      <img className="flex justify-center px-6 mx-auto py-10" src={country.flags.png} alt={`${country.name.common} flag`} />

      <div className='flex flex-col items-start text-sm p-4 border-2 bg-white bg-opacity-30 mx-2 md:mx-10 rounded-md'>
          <p className='flex md:text-xl gap-2'><strong>Capital:</strong> {country.capital}</p>

          <p className='flex   md:text-xl gap-2'><strong>Population:</strong> {country.population}</p>

          <p className='flex  md:text-xl gap-2'><strong>Continent:</strong> {country.continents}</p>

          <p className='flex  md:text-xl gap-2'>
            <strong>Languages:</strong> 
            {Object.entries(country.languages).map(([languageCode, languageName]) => (
              <span key={languageCode}>{languageName}</span>
            ))}
          </p>

          <p className='flex flex-col md:text-xl  hover:text-red-400'>
            <strong>Map:</strong>
            <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
              {country.maps.googleMaps}
            </a>
          </p>
      </div>
    </div>
  );
};

export default CountryCard;








