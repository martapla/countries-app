import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="flex justify-center my-10 mx-20">
            <input
                placeholder="Search a country"
                value={searchQuery}
                onChange={handleChange}
                className="border border-cyan-600 rounded-2xl text-center p-1 w-48 md:w-64 text-base md:text-lg"
            />
             <Link to={`/country/${searchQuery}`}>
                <button className='flex align-center border border-cyan-600 hover:bg-amber-200 bg-green-100 rounded-2xl p-2 ml-4 text-cyan-600 text-base md:text-lg'>Search</button>
            </Link>
            
        </div>
    );
};

export default SearchBar;
