import { IBug } from '../interfaces';

// priority is stored as number, we need it as name
export const getPriorityName = (bugPriority: number) => {
  return ['low', 'normal', 'critical'][bugPriority - 1];
};

export const normalizeDataForCharts = (bugsData: IBug[]) => {
  interface IinitialChartsData {
    priorityData: { low: number; normal: number; critical: number } | any;
    solvedCount: { notSolvedCount: number; isSolvedCount: number };
    solvedBy: { userName: string; solved: number; pending: number }[];
  }

  // the shape of data consumed by charts
  const initialChartsData: IinitialChartsData = {
    priorityData: { low: 0, normal: 0, critical: 0 },
    solvedCount: { notSolvedCount: 0, isSolvedCount: 0 },
    solvedBy: [],
  };

  // responsible of sorting data for the charts

  let chartsData = bugsData.reduce((accu, bug) => {
    // give each assignee an empty object to start with``
    if (!accu.solvedBy.find((user) => user.userName === bug.assignee)) {
      accu.solvedBy.push({ userName: bug.assignee, solved: 0, pending: 0 });
    }
    const foundUser = accu.solvedBy.find((user) => user.userName === bug.assignee);
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
  chartsData.solvedCount.notSolvedCount = bugsData.length - chartsData.solvedCount.isSolvedCount;
  // finnaly setting data for charts``
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return chartsData;
};
