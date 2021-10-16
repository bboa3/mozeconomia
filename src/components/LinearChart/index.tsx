import React, { memo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { useData } from './useData';

const LineChartGraph: React.FC = memo(() => {

  const data =  useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

    return (
      <ResponsiveContainer width="97%" aspect={2.5}>
        <AreaChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4 6" opacity={0.4} vertical={false} />
          <defs>
            <linearGradient id="colorHomologa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EB008A" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#EB008A" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorMensal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            stroke="#fff" 
            tick={{fill: "#fff", 
            fontSize: 11}} 
          />
          <YAxis 
            axisLine={false} 
            tickCount={6} 
            tick={{fill: "#fff", 
            fontSize: 11 
          }}  />
          <Tooltip />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="homologa" 
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorHomologa)"
            stroke="#EB008A" 
            dot={{ fill:"#EB008A", stroke:"#fd6ac0", strokeWidth: 2, r: 3 }} 
            activeDot={{ stroke:"#fd6ac0", r: 8 }} 
          />
          <Area 
            type="monotone" 
            dataKey="mensal" 
            fill="url(#colorMensal)"
            fillOpacity={1}
            stroke="#82ca9d" 
            dot={{ fill:"#82ca9d", stroke:"#82ca9d", strokeWidth: 2, r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
})


export default LineChartGraph