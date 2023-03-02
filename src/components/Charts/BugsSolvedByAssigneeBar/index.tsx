import React,{ FC }  from 'react';
import ChartContainer from '../ChartContainer';
import ReactECharts from 'echarts-for-react';

interface IProps {
  solvedBy: { userName: string; solved: number; pending: number }[];
}
const BugsSolvedByAssigneeBar: FC<IProps> = ({ solvedBy }) => {
  const option = {
    title: {
      text: 'Solved by Assignee',
      textStyle: {
        color: '#ccc',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    color: ['green', 'purple'],
    legend: {
      right: '0',
      top: '0',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: solvedBy.map((assignee) => assignee.userName),
    },
    series: [
      {
        name: 'Solved',
        type: 'bar',
        data: solvedBy.map((assignee) => assignee.solved),
      },
      {
        name: 'Pending',
        type: 'bar',
        data: solvedBy.map((assignee) => assignee.pending),
      },
    ],
  };

  return (
    <ChartContainer>
      <ReactECharts option={option} />
    </ChartContainer>
  );
};
export default BugsSolvedByAssigneeBar;
