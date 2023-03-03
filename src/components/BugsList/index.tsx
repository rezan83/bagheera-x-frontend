import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import BugCard from './BugCard';
import './bugslist.scss';

const BugsList: FC = () => {
  const bugsFilter = useSelector((state: RootState) => state.bugs.bugsFilter);
  const bugsDataState = useSelector((state: RootState) => {
    if (bugsFilter.active) {
      return state.bugs.value
        .filter((bug) => {
          if (bugsFilter.showSolved) return bug;
          if (!bug.solved) return bug;
        })
        .sort((bug, bug2) => {
          return bugsFilter.sortOrder * (bug.priority - bug2.priority);
        });
    }

    return state.bugs.value;
  });
  const isSearch = useSelector((state: RootState) => state.bugs.isSearch);
  const searchQuery = useSelector((state: RootState) => state.bugs.searchQuery);
  return (
    <div className="card-container">
      {/* <h1>Bugs</h1> */}

      {bugsDataState.length !== 0 &&
        bugsDataState.map((bug) => {
          if (!isSearch) {
            return <BugCard bug={bug} key={bug.id} />;
          }
          if (
            bug.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bug.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bug.assignee.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return <BugCard bug={bug} key={bug.id} />;
          }
        })}
    </div>
  );
};

export default BugsList;
