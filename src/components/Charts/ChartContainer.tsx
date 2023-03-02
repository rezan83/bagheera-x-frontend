import { FC } from 'react';
import { IChildren } from '../../interfaces';
// import './charts.scss'

const ChartContainer: FC<IChildren> = ({ children }) => {
  return <div className="chart-container">{children}</div>;
};

export default ChartContainer