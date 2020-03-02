// import chartXkcd from 'chart.xkcd';
// import chartXkcd from '../../dist/chart.xkcd';
import chartXkcd from '../src';

const svgLineUnxkcdify = document.querySelector('.line-chart-unxkcdify');
new chartXkcd.Line(svgLineUnxkcdify, {
  title: '指数函数',
  xLabel: '',
  yLabel: '',
  data: {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: '1ˣ',
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
     {label: '2ˣ',
      data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
    },
     {label: '3ˣ',
      data: [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049],
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
