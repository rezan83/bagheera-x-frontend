import React, { FC, ReactNode } from 'react';
import './charts.scss';
interface IProps {
  children: ReactNode;
}
const Charts: FC<IProps> = ({ children }) => {
  return (
    <div className="charts-container">
      <h2>Issues Tracking State</h2>
      <div className="charts">{children}</div>
    </div>
  );
};

export default Charts;
