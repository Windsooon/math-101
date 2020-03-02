// import chartXkcd from 'chart.xkcd';
// import chartXkcd from '../../dist/chart.xkcd';
import chartXkcd from '../src';

const svgLineUnxkcdify = document.querySelector('.line-chart-unxkcdify');
new chartXkcd.Line(svgLineUnxkcdify, {
  title: '幂函数',
  xLabel: '',
  yLabel: '',
  data: {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'x',
      data: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
    },
     {label: 'x²',
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
     {label: 'x³',
      data: [0, 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
    },
    ],
  },
  options: {
    // showLegend: false,
    // unxkcdify: true,
    // strokeColor: 'white',
    // backgroundColor: 'black',
  },
});
