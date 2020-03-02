// import chartXkcd from 'chart.xkcd';
// import chartXkcd from '../../dist/chart.xkcd';
import chartXkcd from '../src';

const svgLineUnxkcdify = document.querySelector('.line-chart-unxkcdify');
new chartXkcd.Line(svgLineUnxkcdify, {
  title: '对数函数',
  xLabel: '',
  yLabel: '',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'log₂ n',
      data: [0, 1, 1.58, 2, 2.32, 2.58, 2.81, 3, 3.17, 3.32],
    },
     {label: 'log₄ n',
      data: [0.0, 0.5, 0.79, 1.0, 1.16, 1.29, 1.40, 1.5, 1.58, 1.66],
    },
     {label: 'log₆ n',
      data: [0.0, 0.39, 0.61, 0.77, 0.90, 1.0, 1.09, 1.16, 1.23, 1.29],
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

