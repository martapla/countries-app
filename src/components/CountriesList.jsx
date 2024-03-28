import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const ApiUrl = "https://restcountries.com/v3.1/all?fields=name";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(ApiUrl)
        const data = await response.json()
        setCountries(data);
    };

    fetchData();
  }, []);

  const searchCountries = async (query) => {
    const response = await fetch(`${ApiUrl}&name=${query}`);
    const data = await response.json();
    setCountries(data);
};

const handleSearch = (query) => {
    setSearchQuery(query);
    searchCountries(query);
};

  return (

    <div>
        <h2 className="flex justify-center text-2xl font-bold mt-16">Countries List</h2>
        <SearchBar onSearch={handleSearch} />
      
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mx-10">
          {countries.map((country, index) => (
              <Link key={index} to={`/country/${country.name.common}`}>
                  <div key={index} className="flex items-center justify-center bg-red-100 hover:bg-red-400 p-2 border-grey-600 rounded-md shadow-md text-xs hover:text-white font-semibold">
                    {country.name.common}
                  </div>
              </Link>
          ))}
        </div>
    </div>

   
  )
}

export default CountriesList