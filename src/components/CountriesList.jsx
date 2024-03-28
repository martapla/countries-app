import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import RegionButtons from "./RegionButtons";

const ApiUrl = "https://restcountries.com/v3.1/all?fields=name";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const searchCountries = async (query) => {
    const response = await fetch(`${ApiUrl}&name=${query}`);
    const data = await response.json();
    setCountries(data);
  };

  const handleSearch = (query) => {
      setSearchQuery(query);
      searchCountries(query);
  };
  
  const handleRegionChange = async (region) => {
    
      let apiUrl = ApiUrl; 
      if (region !== 'All') {
        apiUrl = `https://restcountries.com/v3.1/region/${region}?fields=name`; 
      }
      const response = await fetch(apiUrl);
      const data = await response.json();
      setFilteredCountries(data);
  };

  useEffect(() => {
    const handleShowAll = async () => {
      const response = await fetch(ApiUrl);
      const data = await response.json();
      setFilteredCountries(data);
    };

    handleShowAll();
  }, []);
  


  return (

    <div>
      
      <h2 className="flex justify-center text-2xl md:text-3xl font-bold mt-16">Countries</h2>
     
      <SearchBar onSearch={handleSearch} />

      <RegionButtons onRegionChange={handleRegionChange} />

      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mx-10">
        {filteredCountries.map((country, index) => (
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