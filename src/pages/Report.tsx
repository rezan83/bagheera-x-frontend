import React, { FC } from 'react';
import BugForm from '../components/BugForm';
import BugsList from '../components/BugsList';
import SortAndFilter from '../components/SortAndFilter';

const Report:FC<any> = ({
  bugsDataState,
  setBugsDataState,
  handleGlobalChange,
  handleDeleteBug,
  bugsFilter,
  setBugsFilter,
  bugsFilterDataState
}) => {
  return (
    <>
      <BugForm bugsDataState={bugsDataState} setBugsDataState={setBugsDataState} />
      <SortAndFilter {...{ bugsFilter, setBugsFilter }} />
      <BugsList
        bugsDataState={!bugsFilter.set ? bugsDataState : bugsFilterDataState}
        handleGlobalChange={handleGlobalChange}
        handleDeleteBug={handleDeleteBug}
      />
    </>
  );
};

export default Report;
