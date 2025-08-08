import React from 'react'
import search from "../assets/search.svg"
const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='search'>
            <div>
                <img src={search} alt="search" />

                <input type="text"
                    placeholder='Search through thousands of movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </div>
        </div>
    )
}

export default Search
