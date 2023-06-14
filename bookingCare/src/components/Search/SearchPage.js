import React from 'react';

import SearchPageData from './SearchPageData';
import Home from '../HomeScreen/Home'

const SearchPage = ({ searchTerm, searchData, setSearch }) => {
  return (
    <div className="search-page">
      {/* <HeaderSearchPage searchTerm={searchTerm} setSearch={setSearch} /> */}
      {/* <Home data={searchData} searchTerm={searchTerm} setSearch={setSearch}/>
      <SearchPageData data={searchData}/> */}
      <Home searchTerm={searchTerm} setSearch={setSearch}/>
      <SearchPageData data={searchData}/>
      
    </div>
  );
};

export default SearchPage;
