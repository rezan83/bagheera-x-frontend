import { useEffect, useState } from 'react';
import { getPriorityName } from '../helpers';
import { IBug } from '../interfaces';

interface IinitialChartsData {
  priorityData: { low: number; normal: number; critical: number } | any;
  solvedCount: { notSolvedCount: number; isSolvedCount: number };
  solvedBy: { userName: string; solved: number; pending: number }[];
}
export const usePopulateCharts = (bugsData: IBug[]) => {
  // the shape of data consumed by charts
  const initialChartsData: IinitialChartsData = {
    priorityData: { low: 0, normal: 0, critical: 0 },
    solvedCount: { notSolvedCount: 0, isSolvedCount: 0 },
    solvedBy: []
  };
  const [chartsData, setChartsData] = useState(initialChartsData);

  // responsible of sorting data for the charts
  useEffect(() => {
    let calcData = bugsData.reduce((accu, bug) => {
      // give each assignee an empty object to start with``
      if (!accu.solvedBy.find(user => user.userName === bug.assignee)) {
        accu.solvedBy.push({ userName: bug.assignee, solved: 0, pending: 0 });
      }
      const foundUser = accu.solvedBy.find(user => user.userName === bug.assignee);
      if (!bug.solved) {
        foundUser && (foundUser.pending += 1);
      } else {
        foundUser && (foundUser.solved += 1);
        accu.solvedCount.isSolvedCount += 1;
      }

      // how many bug of each priority
      accu.priorityData[getPriorityName(bug.priority)] += 1;
      return accu;
    }, initialChartsData);
    calcData.solvedCount.notSolvedCount = bugsData.length - calcData.solvedCount.isSolvedCount;
    // finnaly setting data for charts``
    setChartsData(calcData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bugsData]);

  return chartsData;
};
