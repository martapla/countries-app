
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <p>Population: {country.population}</p>
    </div>
  );
};

export default CountryCard;








