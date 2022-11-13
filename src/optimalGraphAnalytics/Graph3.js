import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page 1',
    uv: 590,
    pv: 800,
    amt: 1401,
  },
  {
    name: 'Page 2',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page 3',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page 4',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page 5',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page 6',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page 7',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page 8',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page 9',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page 10',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page 11',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page 12',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },{
    name: 'Page 13',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },{
    name: 'Page 14',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },{
    name: 'Page 15',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },{
    name: 'Page 16',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },{
    name: 'Page 17',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page 18',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page 19',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page 20',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-with-axis-label-55s1s';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
          <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
