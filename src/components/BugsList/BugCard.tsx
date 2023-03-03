import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { getPriorityName } from '../../helpers';
import { IBug } from '../../interfaces';
import { updateBug, deleteBug } from '../../store/bugsDataSlice';

interface IProps {
  bug:IBug
}
const BugCard: FC<IProps> = ({ bug }) => {
  const dispatch = useDispatch();
  const toggleSolved = () => {
    dispatch(updateBug({ ...bug, solved: !bug.solved }));
  };

  const handleLocalChange = (event: { target: { name: any; value: any } }) => {
    const eventName = event.target.name;
    let eventValue = event.target.value;
    if (eventName === 'priority') {
      eventValue = Number(eventValue);
    }
    dispatch(updateBug({ ...bug, [eventName]: eventValue }));
  };
  return (
    <div className={`bug-card bug-priority ${getPriorityName(bug.priority)}  ${bug.solved ? 'solved' : ''}`}>
      <header className="card-header">
        <h2>{bug.title}</h2>
      </header>
      <p>{bug.description}</p>
      <div className="submit__button">
        <label htmlFor="assignee">Assignee:</label>
        <input type="text" id="assignee" name="assignee" value={bug.assignee} onChange={handleLocalChange} />

        <label htmlFor="priority">Priority:</label>
        <select id="priority" name="priority" value={bug.priority} onChange={handleLocalChange}>
          <option value="1">Low</option>
          <option value="2">Normal</option>
          <option value="3">Critical</option>
        </select>
        <button className={`btn ${bug.solved ? 'solved' : ''}`} onClick={toggleSolved}>
          {bug.solved ? <span>Solved &#128504;</span> : <span>Solve &#10005;</span>}
        </button>
        <button className="btn btn-delete" onClick={() => dispatch(deleteBug(bug.id))}>
          &#128465;
        </button>
      </div>
    </div>
  );
};

export default BugCard;
