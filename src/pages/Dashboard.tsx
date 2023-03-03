import React, { FC } from 'react';
import Charts from '../components/Charts';
import BugsPriorityPie from '../components/Charts/BugsPriorityPie';
import BugsSolvedPie from '../components/Charts/BugsSolvedPie';
import BugsSolvedByAssigneeBar from '../components/Charts/BugsSolvedByAssigneeBar';

const Dashboard: FC<any> = ({ solvedCount, solvedBy, priorityData }) => (
  <Charts>
    <BugsPriorityPie priorityData={priorityData} />
    <BugsSolvedPie solvedCount={solvedCount} />
    <BugsSolvedByAssigneeBar solvedBy={solvedBy} />
  </Charts>
);

export default Dashboard;
