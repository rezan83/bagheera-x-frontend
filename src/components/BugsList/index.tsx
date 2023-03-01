import React, { FC } from 'react';
import { IBug } from '../../interfaces';
import BugCard from './BugCard';
import './bugslist.scss';
interface IProps {
  bugsDataState: IBug[];
  handleDeleteBug: (id: string) => void;
  handleGlobalChange: (editedBug: IBug) => void;
}
const BugsList: FC<IProps> = ({ bugsDataState, handleGlobalChange, handleDeleteBug }) =>{
  return (
    <div className="card-container">
      {/* <h1>Bugs</h1> */}

      {bugsDataState.map(bug => {
        return (
          <BugCard
            bug={bug}
            handleDeleteBug={handleDeleteBug}
            handleGlobalChange={handleGlobalChange}
            key={bug.id}
          />
        );
      })}
    </div>
  );
}

export default BugsList;
