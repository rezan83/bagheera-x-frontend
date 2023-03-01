import React, { FC } from 'react';
import { Pie, measureTextWidth } from '@ant-design/plots';
interface IProps {
  solvedCount: {isSolvedCount:number;notSolvedCount:number}
}
const BugsSolvedPie:FC<IProps> = ({ solvedCount }) => {
  let IPie:any = Pie
  function renderStatistic(containerWidth: number, text: string, style: { fontSize: number; }) {
    const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(
        Math.sqrt(
          Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))
        ),
        1
      );
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
      scale < 1 ? 1 : 'inherit'
    };">${text}</div>`;
  }

  const data = [
    {
      type: 'Solved',
      value: solvedCount.isSolvedCount
    },
    {
      type: 'Pending',
      value: solvedCount.notSolvedCount
    }
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v: any) => `${v}`
      }
    },
    theme: {
      // 'dark',{
      colors10: ['green', 'purple']
    },
    legend: {
      position: 'bottom'
    },
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        textAlign: 'center'
      },
      autoRotate: false,
      content: '{value}'
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container: { getBoundingClientRect: () => { width: any; height: any; }; }, view: any, datum: { type: any; }) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : 'Total';
          return renderStatistic(d, text, {
            fontSize: 28
          });
        }
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: '32px'
        },
        customHtml: (container: { getBoundingClientRect: () => { width: any; }; }, view: any, datum: { value: any; }, data: any[]) => {
          const { width } = container.getBoundingClientRect();
          const text = datum
            ? `Bugs ${datum.value}`
            : `Bugs ${data.reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 32
          });
        }
      }
    },
    interactions: [
      {
        type: 'element-selected'
      },
      {
        type: 'element-active'
      },
      {
        type: 'pie-statistic-active'
      }
    ]
  };
  return <IPie {...config} />;
};

export default BugsSolvedPie;
