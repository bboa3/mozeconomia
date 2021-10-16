import React, { memo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface Props {
  data: Data[]
}

type Data = {
  name: string
  homologa: number
}

const BarChartGraph:React.FC<Props> = memo(({data}) => {
  
  return (
    <ResponsiveContainer width="100%" aspect={2.5}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
        stackOffset="sign"
      >
        <XAxis 
          dataKey="name" 
          interval={0} 
          angle={30} 
          scale="point" 
          tickSize={13} 
          padding={{ left: 25, right: 10 }} 
          tick={{fontSize: 11}} 
        />
        <YAxis axisLine={false} />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="homologa" fill="#020046" background={{ fill: '#eee' }} stackId="stack" />
      </BarChart>
    </ResponsiveContainer>
  );
})

export default BarChartGraph;