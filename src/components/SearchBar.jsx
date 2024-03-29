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
                className="border border-cyan-600 rounded-xl text-center p-1 w-32 md:w-48 text-sm md:text-base"
            />
             <Link to={`/country/${searchQuery}`}>
                <button className='flex align-center border border-cyan-600 hover:bg-amber-200 bg-green-100 rounded-xl p-1 ml-4 text-cyan-600 text-sm md:text-base'>Search</button>
            </Link>
            
        </div>
    );
};

export default SearchBar;
