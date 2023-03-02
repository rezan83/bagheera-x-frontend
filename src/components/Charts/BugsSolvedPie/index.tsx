import React, { FC } from 'react';
import ChartContainer from '../ChartContainer';
import ReactECharts from 'echarts-for-react';

interface IProps {
  solvedCount: { isSolvedCount: number; notSolvedCount: number };
}
const BugsSolvedPie: FC<IProps> = ({ solvedCount }) => {
  const option = {
    title: {
      text: 'Bugs',

      left: 'center',
      top: '35%',
      textStyle: {
        color: '#ccc',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    color: ['green', 'purple'],
    legend: {
      top: 'bottom',
      left: 'center',
    },
    series: [
      {
        name: 'Bugs',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: 'center',
          color: 'white',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            // fontWeight: 'bold',
            // position: 'center',
            formatter: '{b}: {c} ({d}%)',
            // formatter: '{a}\n\n{b} : {c} ({d}%)'
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: solvedCount.isSolvedCount, name: 'Solved' },
          { value: solvedCount.notSolvedCount, name: 'Pending' },
        ],
      },
    ],
  };

  return (
    <ChartContainer>
      <ReactECharts option={option} />
    </ChartContainer>
  );
};

export default BugsSolvedPie;
