import React, { FC } from 'react';
import { getPriorityName } from '../../helpers';
import { IBug } from '../../interfaces';

interface IProps {
  bug: IBug;
  handleDeleteBug: (id: string) => void;
  handleGlobalChange: (editedBug: IBug) => void;
}
const BugCard: FC<IProps> = ({ bug, handleDeleteBug, handleGlobalChange }) => {
  const toggleSolved = () => {
    handleGlobalChange({ ...bug, solved: !bug.solved });
  };

  const handleLocalChange = (event: { target: { name: any; value: any } }) => {
    const eventName = event.target.name;
    let eventValue = event.target.value;
    if (eventName === 'priority') {
      eventValue = Number(eventValue);
    }
    handleGlobalChange({ ...bug, [eventName]: eventValue });
  };
  return (
    <div
      className={`bug-card bug-priority ${getPriorityName(bug.priority)}  ${
        bug.solved ? 'solved' : ''
      }`}>
      <header className="card-header">
        <h2>{bug.title}</h2>
      </header>
      <p>{bug.description}</p>
      <div className="submit__button">
        <label htmlFor="assignee">Assignee:</label>
        <input
          type="text"
          id="assignee"
          name="assignee"
          value={bug.assignee}
          onChange={handleLocalChange}
        />

        <label htmlFor="priority">Priority:</label>
        <select id="priority" name="priority" value={bug.priority} onChange={handleLocalChange}>
          <option value="1">Low</option>
          <option value="2">Normal</option>
          <option value="3">Critical</option>
        </select>
        <button className={`btn ${bug.solved ? 'solved' : ''}`} onClick={toggleSolved}>
          {bug.solved ? <span>Solved &#128504;</span> : <span>Solve &#10005;</span>}
        </button>
        <button className="btn btn-delete" onClick={() => handleDeleteBug(bug.id)}>
          &#128465;
        </button>
      </div>
    </div>
  );
};

export default BugCard;
