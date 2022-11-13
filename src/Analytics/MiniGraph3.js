import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const bitSortedName = [{"":0,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":117.3,"BIT_DEPTH_max":20974.52,"BIT_DEPTH_mean":8518.402048443213,"RATE_OF_PENETRATION_mean":271.264033781133,"HOOK_LOAD_mean":148.8392843965896,"total_depth":20857.22,"total_hours":76.88899891840607,"CPR":1000,"CPF":4,"CPH":2500,"cost":276651.37729601515},{"":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":111.26,"BIT_DEPTH_max":23160.56,"BIT_DEPTH_mean":9712.262705419675,"RATE_OF_PENETRATION_mean":284.000366123127,"HOOK_LOAD_mean":145.32799214642333,"total_depth":23049.300000000003,"total_hours":81.15940241431622,"CPR":3000,"CPF":1,"CPH":1500,"cost":147788.40362147434},{"":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":153.59,"BIT_DEPTH_max":22452.51,"BIT_DEPTH_mean":8774.155481376878,"RATE_OF_PENETRATION_mean":279.160049428297,"HOOK_LOAD_mean":148.22412034831348,"total_depth":22298.92,"total_hours":79.87862176434933,"CPR":5000,"CPF":1.5,"CPH":0,"cost":38448.38},{"":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":147.13,"BIT_DEPTH_max":20724.53,"BIT_DEPTH_mean":11990.415799953596,"RATE_OF_PENETRATION_mean":198.9843711669059,"HOOK_LOAD_mean":155.9138493090793,"total_depth":20577.399999999998,"total_hours":103.41214176433938,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}]

const data = [
  {
    name: 'Apollo',
    uv: bitSortedName[0]['total_hours'],
    pv: bitSortedName[0]['total_hours'],
    amt: bitSortedName[0]['total_hours'],
  },
  {
    name: 'AstroBit',
    uv: bitSortedName[1]['total_hours'],
    pv: bitSortedName[1]['total_hours'],
    amt: bitSortedName[1]['total_hours'],
  },
  {
    name: 'Buzz Drilldrin',
    uv: bitSortedName[2]['total_hours'],
    pv: bitSortedName[2]['total_hours'],
    amt: bitSortedName[2]['total_hours'],
  },
  {
    name: 'ChallengDriller',
    uv: bitSortedName[3]['total_hours'],
    pv: bitSortedName[3]['total_hours'],
    amt: bitSortedName[3]['total_hours'],
  }
];

export default class MiniGraph3 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
