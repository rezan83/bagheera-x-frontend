import React from 'react';
import type { FC } from 'react';
import { Bar } from '@ant-design/plots';

interface IProps {
  solvedBy: { userName: string; solved: number; pending: number }[];
}
type IAccu = { assignee: string; value: number; type: string }[];

const BugsSolvedByAssigneeBar: FC<IProps> = ({ solvedBy }) => {
  const IBar: any = Bar;
  const data = solvedBy.reduce((accu: IAccu, user) => {
    const newAccu = [...accu];
    if (user.solved)
      newAccu.push({ assignee: user.userName, value: user.solved, type: 'solved' });
    if (user.pending)
      newAccu.push({ assignee: user.userName, value: user.pending, type: 'pending' });

    return newAccu;
  }, []);
  console.log(data);
  const config = {
    data: data,
    isStack: true,
    xField: 'value',
    yField: 'assignee',
    seriesField: 'type',
    theme: {
      // 'dark',{
      colors10: ['green', 'purple']
    } as const,
    legend: {
      position: 'bottom'
    },
    label: {
      // label
      position: 'middle',
      // 'left', 'middle', 'right'

      layout: [
        {
          type: 'interval-adjust-position'
        },
        {
          type: 'interval-hide-overlap'
        },
        {
          type: 'adjust-color'
        }
      ]
    } as const
  };
  return <IBar {...config} />;
};

export default BugsSolvedByAssigneeBar;
