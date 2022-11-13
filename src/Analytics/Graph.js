import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Asteroid 1',
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Asteroid 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Asteroid 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Asteroid 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Asteroid 5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Asteroid 6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Asteroid 7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const IntervalAnalysis = [
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":745.01,"BIT_DEPTH_max":6399.11,"RATE_OF_PENETRATION_mean":371.06010123506786,"total_depth":5654.099999999999,"total_hours":15.23769325017811,"CPR":5000,"CPF":1.5,"CPH":0,"cost":13481.15},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":6400.53,"BIT_DEPTH_max":14318.52,"RATE_OF_PENETRATION_mean":198.23593029831756,"total_depth":7917.990000000001,"total_hours":39.9422546058352,"CPR":3000,"CPF":1,"CPH":1500,"cost":70831.3719087528},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":14320.5,"BIT_DEPTH_max":18654.52,"RATE_OF_PENETRATION_mean":157.22973982839747,"total_depth":4334.02,"total_hours":27.564886927436277,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":18655.01,"BIT_DEPTH_max":20628.53,"RATE_OF_PENETRATION_mean":114.27903870162297,"total_depth":1973.5200000000004,"total_hours":17.269308723822622,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":242.59,"BIT_DEPTH_max":10989,"RATE_OF_PENETRATION_mean":225.18257091935246,"total_depth":10746.41,"total_hours":47.72309844463385,"CPR":1000,"CPF":4,"CPH":2500,"cost":163293.3861115846},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":10990.51,"BIT_DEPTH_max":13781,"RATE_OF_PENETRATION_mean":42.90476439790576,"total_depth":2790.49,"total_hours":65.03916381221772,"CPR":1000,"CPF":4,"CPH":2500,"cost":174759.8695305443}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":730.65,"BIT_DEPTH_max":5522.55,"RATE_OF_PENETRATION_mean":358.7773299748111,"total_depth":4791.900000000001,"total_hours":13.356195053729923,"CPR":1000,"CPF":4,"CPH":2500,"cost":53558.08763432481},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":5523.02,"BIT_DEPTH_max":14098.5,"RATE_OF_PENETRATION_mean":218.18887787772528,"total_depth":8575.48,"total_hours":39.30301160816164,"CPR":3000,"CPF":1,"CPH":1500,"cost":70529.99741224246},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":14100.52,"BIT_DEPTH_max":17206.6,"RATE_OF_PENETRATION_mean":232.10986765278318,"total_depth":3106.079999999998,"total_hours":13.381938611271936,"CPR":3000,"CPF":1,"CPH":1500,"cost":26178.987916907903},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":17208.01,"BIT_DEPTH_max":18754.52,"RATE_OF_PENETRATION_mean":181.46917057902974,"total_depth":1546.510000000002,"total_hours":8.522163820253411,"CPR":3000,"CPF":1,"CPH":1500,"cost":17329.75573038012}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":370.07,"BIT_DEPTH_max":13938.62,"RATE_OF_PENETRATION_mean":351.76784204291044,"total_depth":13568.550000000001,"total_hours":38.57245711034848,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":13939.08,"BIT_DEPTH_max":14203.01,"RATE_OF_PENETRATION_mean":175.22739130434783,"total_depth":263.9300000000003,"total_hours":1.5062142855370553,"CPR":5000,"CPF":1.5,"CPH":0,"cost":5395.895},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":14204.54,"BIT_DEPTH_max":19331.03,"RATE_OF_PENETRATION_mean":157.95193242305024,"total_depth":5126.489999999998,"total_hours":32.45601317665094,"CPR":1000,"CPF":4,"CPH":2500,"cost":102645.99294162735}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":105.22,"BIT_DEPTH_max":3095.02,"RATE_OF_PENETRATION_mean":450.18833458364594,"total_depth":2989.8,"total_hours":6.641220507779481,"CPR":1000,"CPF":4,"CPH":2500,"cost":29562.251269448705},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":3096.63,"BIT_DEPTH_max":7076.69,"RATE_OF_PENETRATION_mean":474.55407843137255,"total_depth":3980.0599999999995,"total_hours":8.386947201372697,"CPR":5000,"CPF":1.5,"CPH":0,"cost":10970.09},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":7077.07,"BIT_DEPTH_max":11200.53,"RATE_OF_PENETRATION_mean":195.4552689218788,"total_depth":4123.460000000001,"total_hours":21.096694004437914,"CPR":3000,"CPF":1,"CPH":1500,"cost":38768.50100665687},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":11201.04,"BIT_DEPTH_max":14734.5,"RATE_OF_PENETRATION_mean":110.32434866516566,"total_depth":3533.459999999999,"total_hours":32.027925319768244,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":117.3,"BIT_DEPTH_max":9316.52,"RATE_OF_PENETRATION_mean":356.2963076737742,"total_depth":9199.220000000001,"total_hours":25.819015807547547,"CPR":1000,"CPF":4,"CPH":2500,"cost":102344.41951886888},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":9317.01,"BIT_DEPTH_max":9328.54,"RATE_OF_PENETRATION_mean":118.2,"total_depth":11.530000000000655,"total_hours":0.09754653130288202,"CPR":5000,"CPF":1.5,"CPH":0,"cost":5017.295000000001},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":9329.03,"BIT_DEPTH_max":9342.52,"RATE_OF_PENETRATION_mean":117.45714285714287,"total_depth":13.489999999999782,"total_hours":0.11485040136219711,"CPR":5000,"CPF":1.5,"CPH":0,"cost":5020.235},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":9343.07,"BIT_DEPTH_max":10510.51,"RATE_OF_PENETRATION_mean":110.78089117395031,"total_depth":1167.4400000000005,"total_hours":10.53827955009735,"CPR":5000,"CPF":1.5,"CPH":0,"cost":6751.160000000001},{"":4,"DRILL_BIT_ID":5,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":10511.04,"BIT_DEPTH_max":15323,"RATE_OF_PENETRATION_mean":108.80234729934377,"total_depth":4811.959999999999,"total_hours":44.2266193647554,"CPR":5000,"CPF":1.5,"CPH":0,"cost":12217.939999999999}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":146.3,"BIT_DEPTH_max":12982.5,"RATE_OF_PENETRATION_mean":282.9751814223512,"total_depth":12836.2,"total_hours":45.36157529957189,"CPR":3000,"CPF":1,"CPH":1500,"cost":83878.56294935783},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":12986.61,"BIT_DEPTH_max":17876.5,"RATE_OF_PENETRATION_mean":104.92768781523759,"total_depth":4889.889999999999,"total_hours":46.60247549350735,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":199.18,"BIT_DEPTH_max":19424.51,"RATE_OF_PENETRATION_mean":257.135054749429,"total_depth":19225.329999999998,"total_hours":74.76744086384701,"CPR":5000,"CPF":1.5,"CPH":0,"cost":33837.994999999995}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":153.59,"BIT_DEPTH_max":4134.59,"RATE_OF_PENETRATION_mean":436.31612209802233,"total_depth":3981,"total_hours":9.12411849660149,"CPR":5000,"CPF":1.5,"CPH":0,"cost":10971.5},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":4135.04,"BIT_DEPTH_max":10171.07,"RATE_OF_PENETRATION_mean":285.86584644004733,"total_depth":6036.03,"total_hours":21.114904334211516,"CPR":1000,"CPF":4,"CPH":2500,"cost":77931.38083552879},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":10172.54,"BIT_DEPTH_max":11313.03,"RATE_OF_PENETRATION_mean":119.89640035118525,"total_depth":1140.4899999999998,"total_hours":9.512295587352263,"CPR":3000,"CPF":1,"CPH":1500,"cost":18408.933381028393}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":111.26,"BIT_DEPTH_max":6260.71,"RATE_OF_PENETRATION_mean":499.3330328638497,"total_depth":6149.45,"total_hours":12.315327837877561,"CPR":3000,"CPF":1,"CPH":1500,"cost":27622.44175681634},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":6261.03,"BIT_DEPTH_max":16071,"RATE_OF_PENETRATION_mean":187.60072769953052,"total_depth":9809.970000000001,"total_hours":52.29174812003968,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":16072.53,"BIT_DEPTH_max":19075.01,"RATE_OF_PENETRATION_mean":145.46242821985234,"total_depth":3002.4799999999977,"total_hours":20.64093138512744,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":19076.55,"BIT_DEPTH_max":19337.05,"RATE_OF_PENETRATION_mean":135.23248730964465,"total_depth":260.5,"total_hours":1.9263122729047177,"CPR":1000,"CPF":4,"CPH":2500,"cost":6857.780682261794}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":170.55,"BIT_DEPTH_max":5557.19,"RATE_OF_PENETRATION_mean":401.4176296633303,"total_depth":5386.639999999999,"total_hours":13.41904192030077,"CPR":5000,"CPF":1.5,"CPH":0,"cost":13079.96},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":5558.03,"BIT_DEPTH_max":12327.06,"RATE_OF_PENETRATION_mean":272.839433866032,"total_depth":6769.03,"total_hours":24.809573543257272,"CPR":5000,"CPF":1.5,"CPH":0,"cost":15153.545},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":12328.63,"BIT_DEPTH_max":15878.56,"RATE_OF_PENETRATION_mean":182.63049901510178,"total_depth":3549.9300000000003,"total_hours":19.43777199944274,"CPR":1000,"CPF":4,"CPH":2500,"cost":63794.14999860685},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":15879.05,"BIT_DEPTH_max":21170.55,"RATE_OF_PENETRATION_mean":149.6955397871262,"total_depth":5291.5,"total_hours":35.3484145721693,"CPR":3000,"CPF":1,"CPH":1500,"cost":61314.121858253944}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":745.01,"BIT_DEPTH_max":5748.55,"RATE_OF_PENETRATION_mean":390.97762289406876,"total_depth":5003.54,"total_hours":12.79750990085603,"CPR":3000,"CPF":1,"CPH":1500,"cost":27199.804851284047},{"":1,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":16922.5,"BIT_DEPTH_max":20628.53,"RATE_OF_PENETRATION_mean":106.30626248708234,"total_depth":3706.029999999999,"total_hours":34.861821997084434,"CPR":3000,"CPF":1,"CPH":1500,"cost":58998.76299562665},{"":2,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":5749.07,"BIT_DEPTH_max":12720.56,"RATE_OF_PENETRATION_mean":199.6892872,"total_depth":6971.49,"total_hours":34.91168754094286,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":3,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":12722.52,"BIT_DEPTH_max":16920.04,"RATE_OF_PENETRATION_mean":196.5152312215985,"total_depth":4197.52,"total_hours":21.359769285601622,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":1358.55,"BIT_DEPTH_max":5269.06,"RATE_OF_PENETRATION_mean":497.88751418256834,"total_depth":3910.51,"total_hours":7.854203788219665,"CPR":5000,"CPF":1.5,"CPH":0,"cost":10865.765},{"":1,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":7448.54,"BIT_DEPTH_max":8402.53,"RATE_OF_PENETRATION_mean":226.2015497382199,"total_depth":953.9900000000007,"total_hours":4.217433528214289,"CPR":5000,"CPF":1.5,"CPH":0,"cost":6430.985000000001},{"":2,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":5270.64,"BIT_DEPTH_max":7447.05,"RATE_OF_PENETRATION_mean":519.2028156682028,"total_depth":2176.41,"total_hours":4.1918301178683075,"CPR":1000,"CPF":4,"CPH":2500,"cost":20185.21529467077},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":8403.02,"BIT_DEPTH_max":10910.52,"RATE_OF_PENETRATION_mean":161.31319539765846,"total_depth":2507.5,"total_hours":15.544295640655307,"CPR":1000,"CPF":4,"CPH":2500,"cost":49890.73910163827}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":554.07,"BIT_DEPTH_max":6240.62,"RATE_OF_PENETRATION_mean":482.23467088357387,"total_depth":5686.55,"total_hours":11.792080377756387,"CPR":3000,"CPF":1,"CPH":1500,"cost":26374.67056663458},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":6241.12,"BIT_DEPTH_max":13212.51,"RATE_OF_PENETRATION_mean":240.96562233951985,"total_depth":6971.39,"total_hours":28.93105635698246,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":13213,"BIT_DEPTH_max":20974.52,"RATE_OF_PENETRATION_mean":136.22729160012776,"total_depth":7761.52,"total_hours":56.974780228198576,"CPR":1000,"CPF":4,"CPH":2500,"cost":174483.03057049646}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":201.22,"BIT_DEPTH_max":4858.43,"RATE_OF_PENETRATION_mean":509.84192506459954,"total_depth":4657.21,"total_hours":9.134615595627817,"CPR":3000,"CPF":1,"CPH":1500,"cost":21359.133393441727},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":4859.66,"BIT_DEPTH_max":8331.02,"RATE_OF_PENETRATION_mean":252.32726054922972,"total_depth":3471.3600000000006,"total_hours":13.757372043131776,"CPR":5000,"CPF":1.5,"CPH":0,"cost":10207.04},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":8332.25,"BIT_DEPTH_max":12889.85,"RATE_OF_PENETRATION_mean":142.5098020861193,"total_depth":4557.6,"total_hours":31.98095803435207,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":12892.07,"BIT_DEPTH_max":13550,"RATE_OF_PENETRATION_mean":126.63988095238095,"total_depth":657.9300000000003,"total_hours":5.195282837066111,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":216.63,"BIT_DEPTH_max":12415.01,"RATE_OF_PENETRATION_mean":288.07256986027943,"total_depth":12198.380000000001,"total_hours":42.3448161201757,"CPR":5000,"CPF":1.5,"CPH":0,"cost":23297.57},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":12416.74,"BIT_DEPTH_max":17762.74,"RATE_OF_PENETRATION_mean":121.51646000000001,"total_depth":5346.000000000002,"total_hours":43.99403998437744,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":1252.71,"BIT_DEPTH_max":7788.59,"RATE_OF_PENETRATION_mean":378.030736677116,"total_depth":6535.88,"total_hours":17.289281970694443,"CPR":1000,"CPF":4,"CPH":2500,"cost":70366.7249267361},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":7789.02,"BIT_DEPTH_max":11328.52,"RATE_OF_PENETRATION_mean":138.3770704391394,"total_depth":3539.5,"total_hours":25.57865973580307,"CPR":1000,"CPF":4,"CPH":2500,"cost":79104.64933950767},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":11329.05,"BIT_DEPTH_max":14213.03,"RATE_OF_PENETRATION_mean":90.99530634181296,"total_depth":2883.9800000000014,"total_hours":31.693722631875936,"CPR":1000,"CPF":4,"CPH":2500,"cost":91770.22657968986},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":14214.55,"BIT_DEPTH_max":23160.56,"RATE_OF_PENETRATION_mean":101.98243320068221,"total_depth":8946.010000000002,"total_hours":87.72108802695402,"CPR":3000,"CPF":1,"CPH":1500,"cost":143527.64204043103}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":138.57,"BIT_DEPTH_max":4945.05,"RATE_OF_PENETRATION_mean":497.44906387665196,"total_depth":4806.4800000000005,"total_hours":9.662255593653747,"CPR":1000,"CPF":4,"CPH":2500,"cost":44381.55898413437},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":4946.5,"BIT_DEPTH_max":10946.5,"RATE_OF_PENETRATION_mean":314.8257460097155,"total_depth":6000,"total_hours":19.058161780119597,"CPR":1000,"CPF":4,"CPH":2500,"cost":72645.40445029899},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":10947.01,"BIT_DEPTH_max":14506.53,"RATE_OF_PENETRATION_mean":263.7140044994376,"total_depth":3559.5200000000004,"total_hours":13.497652529892822,"CPR":5000,"CPF":1.5,"CPH":0,"cost":10339.28},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":14507.08,"BIT_DEPTH_max":17263,"RATE_OF_PENETRATION_mean":178.37489019033674,"total_depth":2755.92,"total_hours":15.450156673168895,"CPR":5000,"CPF":1.5,"CPH":0,"cost":9133.880000000001},{"":4,"DRILL_BIT_ID":5,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":17264.5,"BIT_DEPTH_max":19506.52,"RATE_OF_PENETRATION_mean":152.5452247191011,"total_depth":2242.0200000000004,"total_hours":14.69741189295494,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":147.13,"BIT_DEPTH_max":2288.5,"RATE_OF_PENETRATION_mean":357.26828817733985,"total_depth":2141.37,"total_hours":5.99373096035065,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":2289.05,"BIT_DEPTH_max":4390.61,"RATE_OF_PENETRATION_mean":304.703086722195,"total_depth":2101.5599999999995,"total_hours":6.8970748626384655,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":4391.02,"BIT_DEPTH_max":6888.55,"RATE_OF_PENETRATION_mean":489.30101183868175,"total_depth":2497.5299999999997,"total_hours":5.1042812901915955,"CPR":1000,"CPF":4,"CPH":2500,"cost":23750.823225478987},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":6889,"BIT_DEPTH_max":10273.11,"RATE_OF_PENETRATION_mean":295.5136078782453,"total_depth":3384.1100000000006,"total_hours":11.451621548995773,"CPR":1000,"CPF":4,"CPH":2500,"cost":43165.49387248943},{"":4,"DRILL_BIT_ID":5,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":10274.55,"BIT_DEPTH_max":14512.53,"RATE_OF_PENETRATION_mean":121.86850907029478,"total_depth":4237.980000000001,"total_hours":34.77502131051344,"CPR":5000,"CPF":1.5,"CPH":0,"cost":11356.970000000001},{"":5,"DRILL_BIT_ID":6,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":14513.01,"BIT_DEPTH_max":17022.56,"RATE_OF_PENETRATION_mean":115.33338664534186,"total_depth":2509.550000000001,"total_hours":21.7590939882572,"CPR":5000,"CPF":1.5,"CPH":0,"cost":8764.325},{"":6,"DRILL_BIT_ID":7,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":17023.01,"BIT_DEPTH_max":18043.01,"RATE_OF_PENETRATION_mean":129.86125860373647,"total_depth":1020,"total_hours":7.854536533582093,"CPR":5000,"CPF":1.5,"CPH":0,"cost":6530}],
  [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":113.08,"BIT_DEPTH_max":11569.02,"RATE_OF_PENETRATION_mean":412.188574648492,"total_depth":11455.94,"total_hours":27.79295862280862,"CPR":3000,"CPF":1,"CPH":1500,"cost":56145.377934212935},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":11570.54,"BIT_DEPTH_max":13959.04,"RATE_OF_PENETRATION_mean":85.36768692610407,"total_depth":2388.5,"total_hours":27.978970568425172,"CPR":1000,"CPF":4,"CPH":2500,"cost":80501.42642106293},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":13959.51,"BIT_DEPTH_max":16825,"RATE_OF_PENETRATION_mean":121.54446878422782,"total_depth":2865.49,"total_hours":23.575651188923864,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":16826.51,"BIT_DEPTH_max":20724.53,"RATE_OF_PENETRATION_mean":127.33956739646531,"total_depth":3898.0200000000004,"total_hours":30.611223830089763,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":4,"DRILL_BIT_ID":5,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":20725.01,"BIT_DEPTH_max":22452.51,"RATE_OF_PENETRATION_mean":96.54506752789196,"total_depth":1727.5,"total_hours":17.893197904708323,"CPR":5000,"CPF":1.5,"CPH":0,"cost":7591.25}]
]

const performanceSortedBits = [{"":4,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":111.26,"BIT_DEPTH_max":12982.5,"BIT_DEPTH_mean":5089.340237383186,"RATE_OF_PENETRATION_mean":406.2728352730049,"HOOK_LOAD_mean":115.87925277354775,"total_depth":12871.24,"total_hours":31.68127150650094,"CPR":3000,"CPF":1,"CPH":1500,"cost":63393.14725975141},{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":117.3,"BIT_DEPTH_max":10989,"BIT_DEPTH_mean":4255.993222893856,"RATE_OF_PENETRATION_mean":354.29665208029473,"HOOK_LOAD_mean":117.89451552407307,"total_depth":10871.7,"total_hours":30.685302658564588,"CPR":1000,"CPF":4,"CPH":2500,"cost":121200.05664641147},{"":15,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":147.13,"BIT_DEPTH_max":13938.62,"BIT_DEPTH_mean":6234.106534081387,"RATE_OF_PENETRATION_mean":352.4914911454943,"HOOK_LOAD_mean":118.10215354018152,"total_depth":13791.490000000002,"total_hours":39.12573876657757,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":8,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":153.59,"BIT_DEPTH_max":19424.51,"BIT_DEPTH_mean":6531.690410221468,"RATE_OF_PENETRATION_mean":329.19781805696266,"HOOK_LOAD_mean":133.39890824538608,"total_depth":19270.92,"total_hours":58.53902712279053,"CPR":5000,"CPF":1.5,"CPH":0,"cost":33906.38},{"":9,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":3096.63,"BIT_DEPTH_max":14203.01,"BIT_DEPTH_mean":7367.417219600965,"RATE_OF_PENETRATION_mean":325.9672339108924,"HOOK_LOAD_mean":158.9755027846539,"total_depth":11106.380000000001,"total_hours":34.072074873133054,"CPR":5000,"CPF":1.5,"CPH":0,"cost":21659.57},{"":10,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":7448.54,"BIT_DEPTH_max":14506.53,"BIT_DEPTH_mean":11702.409955791381,"RATE_OF_PENETRATION_mean":255.39683465959334,"HOOK_LOAD_mean":148.26784703801982,"total_depth":7057.990000000001,"total_hours":27.635385573228696,"CPR":5000,"CPF":1.5,"CPH":0,"cost":15586.985},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":4135.04,"BIT_DEPTH_max":13959.04,"BIT_DEPTH_mean":8838.391561633971,"RATE_OF_PENETRATION_mean":245.48281112272204,"HOOK_LOAD_mean":156.02291789722497,"total_depth":9824,"total_hours":40.01909524772704,"CPR":1000,"CPF":4,"CPH":2500,"cost":140343.7381193176},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":6889,"BIT_DEPTH_max":19337.05,"BIT_DEPTH_mean":9377.829204979314,"RATE_OF_PENETRATION_mean":235.1003626556014,"HOOK_LOAD_mean":188.89867717842367,"total_depth":12448.05,"total_hours":52.94781283785237,"CPR":1000,"CPF":4,"CPH":2500,"cost":183161.7320946309},{"":5,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":5523.02,"BIT_DEPTH_max":14318.52,"BIT_DEPTH_mean":10113.38054246546,"RATE_OF_PENETRATION_mean":207.87905637524662,"HOOK_LOAD_mean":167.06957131321934,"total_depth":8795.5,"total_hours":42.31065963722227,"CPR":3000,"CPF":1,"CPH":1500,"cost":75261.4894558334},{"":6,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":7077.07,"BIT_DEPTH_max":17206.6,"BIT_DEPTH_mean":11503.14873559547,"RATE_OF_PENETRATION_mean":196.54265685019192,"HOOK_LOAD_mean":184.8734122919334,"total_depth":10129.529999999999,"total_hours":51.5385828315168,"CPR":3000,"CPF":1,"CPH":1500,"cost":90437.40424727519},{"":16,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":2289.05,"BIT_DEPTH_max":17876.5,"BIT_DEPTH_mean":11087.20448415803,"RATE_OF_PENETRATION_mean":187.33499267632348,"HOOK_LOAD_mean":168.8490694156974,"total_depth":15587.45,"total_hours":83.20629145315058,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":4391.02,"BIT_DEPTH_max":20974.52,"BIT_DEPTH_mean":14419.881377139267,"RATE_OF_PENETRATION_mean":185.52569333013028,"HOOK_LOAD_mean":175.08948431592418,"total_depth":16583.5,"total_hours":89.38654103553623,"CPR":1000,"CPF":4,"CPH":2500,"cost":290800.3525888405},{"":11,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":9343.07,"BIT_DEPTH_max":17263,"BIT_DEPTH_mean":14093.851602975194,"RATE_OF_PENETRATION_mean":158.1434983329057,"HOOK_LOAD_mean":156.75547576301616,"total_depth":7919.93,"total_hours":50.08065512328471,"CPR":5000,"CPF":1.5,"CPH":0,"cost":16879.895},{"":17,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":8332.25,"BIT_DEPTH_max":19075.01,"BIT_DEPTH_mean":14705.88239274779,"RATE_OF_PENETRATION_mean":155.1091813153049,"HOOK_LOAD_mean":155.9228844499076,"total_depth":10742.759999999998,"total_hours":69.25934305695411,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":19,"DRILL_BIT_ID":5,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":17264.5,"BIT_DEPTH_max":19506.52,"BIT_DEPTH_mean":18407.420557116184,"RATE_OF_PENETRATION_mean":152.5452247191013,"HOOK_LOAD_mean":142.278511235955,"total_depth":2242.0200000000004,"total_hours":14.697411892954921,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":14,"DRILL_BIT_ID":7,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":17023.01,"BIT_DEPTH_max":18043.01,"BIT_DEPTH_mean":17532.98015732534,"RATE_OF_PENETRATION_mean":129.8612586037364,"HOOK_LOAD_mean":181.09400196656813,"total_depth":1020,"total_hours":7.854536533582098,"CPR":5000,"CPF":1.5,"CPH":0,"cost":6530},{"":7,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":14214.55,"BIT_DEPTH_max":23160.56,"BIT_DEPTH_mean":18612.791701347505,"RATE_OF_PENETRATION_mean":119.85712816268682,"HOOK_LOAD_mean":173.5835829983442,"total_depth":8946.010000000002,"total_hours":74.63894836406583,"CPR":3000,"CPF":1,"CPH":1500,"cost":123904.43254609875},{"":18,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":11201.04,"BIT_DEPTH_max":20724.53,"BIT_DEPTH_mean":16614.5384146075,"RATE_OF_PENETRATION_mean":119.26940770429715,"HOOK_LOAD_mean":165.87767312402636,"total_depth":9523.489999999998,"total_hours":79.84855616631755,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":13,"DRILL_BIT_ID":6,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":14513.01,"BIT_DEPTH_max":17022.56,"BIT_DEPTH_mean":15766.369940024031,"RATE_OF_PENETRATION_mean":115.33338664534213,"HOOK_LOAD_mean":181.8851259496202,"total_depth":2509.550000000001,"total_hours":21.759093988257145,"CPR":5000,"CPF":1.5,"CPH":0,"cost":8764.325},{"":12,"DRILL_BIT_ID":5,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":10274.55,"BIT_DEPTH_max":22452.51,"BIT_DEPTH_mean":14307.596812248916,"RATE_OF_PENETRATION_mean":111.54609485478063,"HOOK_LOAD_mean":183.59947786359206,"total_depth":12177.96,"total_hours":109.17423882794115,"CPR":5000,"CPF":1.5,"CPH":0,"cost":23266.94}]

const idSortedBit = [{"":0,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":117.3,"BIT_DEPTH_max":10989,"BIT_DEPTH_mean":4255.993222893856,"RATE_OF_PENETRATION_mean":354.29665208029473,"HOOK_LOAD_mean":117.89451552407307,"total_depth":10871.7,"total_hours":30.685302658564588,"CPR":1000,"CPF":4,"CPH":2500,"cost":121200.05664641147},{"":1,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":4135.04,"BIT_DEPTH_max":13959.04,"BIT_DEPTH_mean":8838.391561633971,"RATE_OF_PENETRATION_mean":245.48281112272204,"HOOK_LOAD_mean":156.02291789722497,"total_depth":9824,"total_hours":40.01909524772704,"CPR":1000,"CPF":4,"CPH":2500,"cost":140343.7381193176},{"":2,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":4391.02,"BIT_DEPTH_max":20974.52,"BIT_DEPTH_mean":14419.881377139267,"RATE_OF_PENETRATION_mean":185.52569333013028,"HOOK_LOAD_mean":175.08948431592418,"total_depth":16583.5,"total_hours":89.38654103553623,"CPR":1000,"CPF":4,"CPH":2500,"cost":290800.3525888405},{"":3,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":6889,"BIT_DEPTH_max":19337.05,"BIT_DEPTH_mean":9377.829204979314,"RATE_OF_PENETRATION_mean":235.1003626556014,"HOOK_LOAD_mean":188.89867717842367,"total_depth":12448.05,"total_hours":52.94781283785237,"CPR":1000,"CPF":4,"CPH":2500,"cost":183161.7320946309},{"":4,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":111.26,"BIT_DEPTH_max":12982.5,"BIT_DEPTH_mean":5089.340237383186,"RATE_OF_PENETRATION_mean":406.2728352730049,"HOOK_LOAD_mean":115.87925277354775,"total_depth":12871.24,"total_hours":31.68127150650094,"CPR":3000,"CPF":1,"CPH":1500,"cost":63393.14725975141},{"":5,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":5523.02,"BIT_DEPTH_max":14318.52,"BIT_DEPTH_mean":10113.38054246546,"RATE_OF_PENETRATION_mean":207.87905637524662,"HOOK_LOAD_mean":167.06957131321934,"total_depth":8795.5,"total_hours":42.31065963722227,"CPR":3000,"CPF":1,"CPH":1500,"cost":75261.4894558334},{"":6,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":7077.07,"BIT_DEPTH_max":17206.6,"BIT_DEPTH_mean":11503.14873559547,"RATE_OF_PENETRATION_mean":196.54265685019192,"HOOK_LOAD_mean":184.8734122919334,"total_depth":10129.529999999999,"total_hours":51.5385828315168,"CPR":3000,"CPF":1,"CPH":1500,"cost":90437.40424727519},{"":7,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":14214.55,"BIT_DEPTH_max":23160.56,"BIT_DEPTH_mean":18612.791701347505,"RATE_OF_PENETRATION_mean":119.85712816268682,"HOOK_LOAD_mean":173.5835829983442,"total_depth":8946.010000000002,"total_hours":74.63894836406583,"CPR":3000,"CPF":1,"CPH":1500,"cost":123904.43254609875},{"":8,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":153.59,"BIT_DEPTH_max":19424.51,"BIT_DEPTH_mean":6531.690410221468,"RATE_OF_PENETRATION_mean":329.19781805696266,"HOOK_LOAD_mean":133.39890824538608,"total_depth":19270.92,"total_hours":58.53902712279053,"CPR":5000,"CPF":1.5,"CPH":0,"cost":33906.38},{"":9,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":3096.63,"BIT_DEPTH_max":14203.01,"BIT_DEPTH_mean":7367.417219600965,"RATE_OF_PENETRATION_mean":325.9672339108924,"HOOK_LOAD_mean":158.9755027846539,"total_depth":11106.380000000001,"total_hours":34.072074873133054,"CPR":5000,"CPF":1.5,"CPH":0,"cost":21659.57},{"":10,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":7448.54,"BIT_DEPTH_max":14506.53,"BIT_DEPTH_mean":11702.409955791381,"RATE_OF_PENETRATION_mean":255.39683465959334,"HOOK_LOAD_mean":148.26784703801982,"total_depth":7057.990000000001,"total_hours":27.635385573228696,"CPR":5000,"CPF":1.5,"CPH":0,"cost":15586.985},{"":11,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":9343.07,"BIT_DEPTH_max":17263,"BIT_DEPTH_mean":14093.851602975194,"RATE_OF_PENETRATION_mean":158.1434983329057,"HOOK_LOAD_mean":156.75547576301616,"total_depth":7919.93,"total_hours":50.08065512328471,"CPR":5000,"CPF":1.5,"CPH":0,"cost":16879.895},{"":12,"DRILL_BIT_ID":5,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":10274.55,"BIT_DEPTH_max":22452.51,"BIT_DEPTH_mean":14307.596812248916,"RATE_OF_PENETRATION_mean":111.54609485478063,"HOOK_LOAD_mean":183.59947786359206,"total_depth":12177.96,"total_hours":109.17423882794115,"CPR":5000,"CPF":1.5,"CPH":0,"cost":23266.94},{"":13,"DRILL_BIT_ID":6,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":14513.01,"BIT_DEPTH_max":17022.56,"BIT_DEPTH_mean":15766.369940024031,"RATE_OF_PENETRATION_mean":115.33338664534213,"HOOK_LOAD_mean":181.8851259496202,"total_depth":2509.550000000001,"total_hours":21.759093988257145,"CPR":5000,"CPF":1.5,"CPH":0,"cost":8764.325},{"":14,"DRILL_BIT_ID":7,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":17023.01,"BIT_DEPTH_max":18043.01,"BIT_DEPTH_mean":17532.98015732534,"RATE_OF_PENETRATION_mean":129.8612586037364,"HOOK_LOAD_mean":181.09400196656813,"total_depth":1020,"total_hours":7.854536533582098,"CPR":5000,"CPF":1.5,"CPH":0,"cost":6530},{"":15,"DRILL_BIT_ID":1,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":147.13,"BIT_DEPTH_max":13938.62,"BIT_DEPTH_mean":6234.106534081387,"RATE_OF_PENETRATION_mean":352.4914911454943,"HOOK_LOAD_mean":118.10215354018152,"total_depth":13791.490000000002,"total_hours":39.12573876657757,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":16,"DRILL_BIT_ID":2,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":2289.05,"BIT_DEPTH_max":17876.5,"BIT_DEPTH_mean":11087.20448415803,"RATE_OF_PENETRATION_mean":187.33499267632348,"HOOK_LOAD_mean":168.8490694156974,"total_depth":15587.45,"total_hours":83.20629145315058,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":17,"DRILL_BIT_ID":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":8332.25,"BIT_DEPTH_max":19075.01,"BIT_DEPTH_mean":14705.88239274779,"RATE_OF_PENETRATION_mean":155.1091813153049,"HOOK_LOAD_mean":155.9228844499076,"total_depth":10742.759999999998,"total_hours":69.25934305695411,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":18,"DRILL_BIT_ID":4,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":11201.04,"BIT_DEPTH_max":20724.53,"BIT_DEPTH_mean":16614.5384146075,"RATE_OF_PENETRATION_mean":119.26940770429715,"HOOK_LOAD_mean":165.87767312402636,"total_depth":9523.489999999998,"total_hours":79.84855616631755,"CPR":10000,"CPF":0,"CPH":0,"cost":10000},{"":19,"DRILL_BIT_ID":5,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":17264.5,"BIT_DEPTH_max":19506.52,"BIT_DEPTH_mean":18407.420557116184,"RATE_OF_PENETRATION_mean":152.5452247191013,"HOOK_LOAD_mean":142.278511235955,"total_depth":2242.0200000000004,"total_hours":14.697411892954921,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}]

const bitSortedName = [{"":0,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":117.3,"BIT_DEPTH_max":20974.52,"BIT_DEPTH_mean":8518.402048443213,"RATE_OF_PENETRATION_mean":271.264033781133,"HOOK_LOAD_mean":148.8392843965896,"total_depth":20857.22,"total_hours":76.88899891840607,"CPR":1000,"CPF":4,"CPH":2500,"cost":276651.37729601515},{"":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":111.26,"BIT_DEPTH_max":23160.56,"BIT_DEPTH_mean":9712.262705419675,"RATE_OF_PENETRATION_mean":284.000366123127,"HOOK_LOAD_mean":145.32799214642333,"total_depth":23049.300000000003,"total_hours":81.15940241431622,"CPR":3000,"CPF":1,"CPH":1500,"cost":147788.40362147434},{"":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":153.59,"BIT_DEPTH_max":22452.51,"BIT_DEPTH_mean":8774.155481376878,"RATE_OF_PENETRATION_mean":279.160049428297,"HOOK_LOAD_mean":148.22412034831348,"total_depth":22298.92,"total_hours":79.87862176434933,"CPR":5000,"CPF":1.5,"CPH":0,"cost":38448.38},{"":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":147.13,"BIT_DEPTH_max":20724.53,"BIT_DEPTH_mean":11990.415799953596,"RATE_OF_PENETRATION_mean":198.9843711669059,"HOOK_LOAD_mean":155.9138493090793,"total_depth":20577.399999999998,"total_hours":103.41214176433938,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}]

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="70%" height="60%">
        <LineChart
          width={80}
          height={30}
          data={data}
          margin={{
            top: 90,
            right: 90,
            left: 350,
            bottom: -20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
