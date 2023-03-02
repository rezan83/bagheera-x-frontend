import React, { FC } from 'react';
import BugsList from '../components/BugsList';
const SearchPage: FC<any> = ({
  bugsDataState,
  handleGlobalChange,
  handleDeleteBug,
  searchGlobalQuery,
  bugsDataSearch,
}) => {
  return (
    <>
      <h2 className="search-page-header">Search Results:</h2>
      <BugsList
        bugsDataState={searchGlobalQuery ? bugsDataSearch : bugsDataState}
        handleGlobalChange={handleGlobalChange}
        handleDeleteBug={handleDeleteBug}
      />
    </>
  );
};

export default SearchPage;
