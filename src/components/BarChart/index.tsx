import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useData } from './useData';

const BarChartGraph:React.FC = () => {  
  const data = useData();
  
  if (!data) {
    return <pre>Loading...</pre>;
  }
  
  return (
    <ResponsiveContainer width="98%" aspect={2.5}>
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
        stackOffset="sign"
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="homologa" fill="#8884d8" background={{ fill: '#eee' }} stackId="stack" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartGraph;