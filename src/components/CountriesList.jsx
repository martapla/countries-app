import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const ApiUrl = "https://restcountries.com/v3.1/all?fields=name";


const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(ApiUrl)
        const data = await response.json()
        setCountries(data);
   
    };

    fetchData();
  }, []);

  return (

    <div>
        <h2 className="flex justify-center text-2xl font-bold my-20">Countries List</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mx-10">
          {countries.map((country, index) => (
              <Link key={index} to={`/country/${country.name.common}`}>
                  <div key={index} className="flex items-center justify-center bg-red-100 p-2 border-grey-600 rounded-md shadow-md">
                    {country.name.common}
                  </div>
              </Link>
          ))}
        </div>
    </div>

   
  )
}

export default CountriesList