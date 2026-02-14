"use client"
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, TooltipIndex, ResponsiveContainer } from 'recharts';

// #region Sample data
const data01 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];
const data02 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];


const Chart = () => {
  return (
    <div className='neu-inset p-5 rounded-xl mt-5 '>



      <ScatterChart
      
      style={{ width: '100%', maxWidth: '100%', maxHeight: '70vh', aspectRatio: 1.618 , color: 'white' }}
      responsive
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="click" unit=" click" stroke="#7878ec" />
      <YAxis type="number" dataKey="y" name="view" unit=" view" width="auto" stroke="#3737dd" />
      <ZAxis type="number" range={[100, 100]} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={1} />
      <Legend />
      <Scatter name="A view" data={data01} fill="#7878ec" line shape="circle" />
      <Scatter name="B click" data={data02} fill="#3737dd" line lineJointType="monotone" shape="circle" />
    </ScatterChart>
    </div>
  )
}

export default Chart