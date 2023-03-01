import React, { FC } from 'react';

import { Rose } from '@ant-design/plots';
interface IProps {
  priorityData:{low: number;
  normal: number;
  critical: number;}
}
const BugsPriorityPie:FC<IProps> = ({ priorityData }) => {
  const IRose:any = Rose
  const { low, normal, critical } = priorityData;
  const data = [
    {
      type: 'Low',
      value: low
    },
    {
      type: 'Normal',
      value: normal
    },
    {
      type: 'Critical',
      value: critical
    }
  ];
  const config = {
    data,
    xField: 'type',
    theme: {
      colors10: ['green', 'blue', 'purple']
    },
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: { offset: -15 },
    legend: {
      position: 'bottom'
    },
    interactions: [
      {
        type: 'element-active'
      }
    ]
  };
  return <IRose {...config} />;
};

export default BugsPriorityPie;
