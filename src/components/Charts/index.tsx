import React, { FC, ReactNode } from 'react';
import { IChildren } from '../../interfaces';
import './charts.scss';

const Charts: FC<IChildren> = ({ children }) => {
  return (
    <div className="charts-container">
      <h2>Issues Tracking State</h2>
      <div className="charts">{children}</div>
    </div>
  );
};

export default Charts;
