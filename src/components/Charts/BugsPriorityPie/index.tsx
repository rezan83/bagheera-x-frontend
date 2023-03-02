import React, { FC } from 'react';
import ReactECharts from 'echarts-for-react';
import ChartContainer from '../ChartContainer';

const BugsPriorityPie: FC<any> = ({ priorityData }) => {
  const { low, normal, critical } = priorityData;
  const option = {
    legend: {
      top: 'bottom',
    },
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    labelLine: {
      // lineStyle: {
      //   color: 'hsl(182, 97%, 62%)'
      // },
      smooth: 0.8,
      length: 12,
      length2: 40,
    },
    label: {
      color: '#ccc',
    },
    title: {
      text: 'Priority',
      left: 'center',
      top: 5,
      textStyle: {
        color: '#ccc',
      },
    },
    // toolbox: {
    //   show: true,
    //   feature: {
    //     mark: { show: true },
    //     dataView: { show: true, readOnly: false },
    //     restore: { show: true },
    //     saveAsImage: { show: true }
    //   }
    // },
    color: ['purple', 'blue', 'green'],
    series: [
      {
        name: 'Priority',
        type: 'pie',
        radius: [5, '60%'],
        center: ['50%', '50%'],
        roseType: 'area',
        animationType: 'scale',
        itemStyle: {
          borderRadius: 2,
        },
        // label: {
        //   position: 'middle'
        // },
        data: [
          { value: critical, name: 'Critical' },
          { value: normal, name: 'Normal' },
          { value: low, name: 'Low' },
        ].sort((a, b) => a.value - b.value),
      },
    ],
  };
  return (
    <ChartContainer>
      <ReactECharts option={option} />
    </ChartContainer>
  );
};
export default BugsPriorityPie;
