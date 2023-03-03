import React, { FC } from 'react';
import BugForm from '../components/BugForm';
import BugsList from '../components/BugsList';
import SortAndFilter from '../components/SortAndFilter';

const Report: FC = () => {
  return (
    <>
      <BugForm />
      <SortAndFilter />
      <BugsList />
    </>
  );
};

export default Report;
