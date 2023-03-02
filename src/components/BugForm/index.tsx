import React, { FC, useState } from 'react';
import { IBug } from '../../interfaces';
import './bugform.scss';

interface IProps {
  bugsDataState: IBug[];
  setBugsDataState: React.Dispatch<React.SetStateAction<IBug[]>>;
}
const BugForm: FC<IProps> = ({ bugsDataState, setBugsDataState }) => {
  const [reportSuccess, setReportSuccess] = useState(false);
  const [newBug, setNewBug] = useState({
    id: '0',
    title: '',
    description: '',
    priority: 1,
    solved: false,
    reporter: '',
    assignee: '',
  });

  const handleReportBug = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const id = Math.random() + '';
    if (newBug.assignee === '') {
      newBug.assignee = newBug.reporter;
    }

    setBugsDataState([newBug, ...bugsDataState]);
    setNewBug({
      id,
      title: '',
      description: '',
      priority: 1,
      solved: false,
      reporter: '',
      assignee: '',
    });

    setReportSuccess(true);
    setTimeout(() => setReportSuccess(false), 1000);
  };
  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setNewBug({ ...newBug, [name]: value });
  };

  return (
    <form className="bug-form" onSubmit={handleReportBug}>
      <div className="form-group">
        <label>Title</label>
        <input type="text" name="title" id="title" value={newBug.title} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={newBug.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Reporter</label>
        <input type="text" name="reporter" id="reporter" value={newBug.reporter} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Assignee</label>
        <input
          type="text"
          name="assignee"
          id="assignee"
          value={newBug.assignee}
          placeholder="same as reporter if left empty"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Priority</label>
        <select name="priority" id="priority" value={newBug.priority} onChange={handleChange}>
          <option value="1">Low</option>
          <option value="2">Normal</option>
          <option value="3">Critical</option>
        </select>
      </div>

      <button className={`btn btn-report ${reportSuccess ? 'report-success' : ''}`} type="submit">
        {reportSuccess ? 'Reported Successfully' : 'Report'}
      </button>
    </form>
  );
};

export default BugForm;
