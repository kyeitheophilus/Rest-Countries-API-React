import Countries from '../Components/Countries';
import axios from 'axios'
import "../index.css";

import { useEffect, useState } from 'react';
const Home = () => {
const [countryData, setCountryData] = useState([])

  const [searchquery, setSearchquery] = useState('')
  const [filter, setFilter] = useState('All')
  const [sortBy, setSortBy] = useState('default')

async function getCountryData() {
  try {
    const res = await axios.get('https://restcountries.com/v3.1/all')
    setCountryData(res.data)
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getCountryData();
},[])

return (
  <>
    <div className="searchBox">
      <input
        className="searchInput"
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => setSearchquery(e.target.value)}
      />
      <div>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="default" defaultValue={`default`}>
            Default
          </option>
          <option value="az">Name (A-Z)</option>
          <option value="za">Name (Z-A)</option>
          <option value="populationIncreasing">Population &#8593;</option>
          <option value="populationDecreasing">Population &#8595;</option>
        </select>
        <select
          aria-label="Filter by Region"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
    <Countries
      countryArr={countryData}
      query={searchquery}
      filter={filter}
      sort={sortBy}
    />
  </>
);

  
  
};

export default Home;
