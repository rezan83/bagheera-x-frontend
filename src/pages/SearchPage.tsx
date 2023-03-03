import React, { FC } from 'react';
import BugsList from '../components/BugsList';
const SearchPage: FC<any> = () => {
  return (
    <>
      <h2 className="search-page-header">Search Results:</h2>
      <BugsList />
    </>
  );
};

export default SearchPage;
