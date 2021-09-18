import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useData } from './useData';



const LineChartGraph: React.FC = () => {

  const data =  useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

    return (
      <ResponsiveContainer width="100%" aspect={2.2}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4 6"/>
          <XAxis dataKey="name" tick={{fill: "#fff", fontSize: 12}} />
          <YAxis height={500} tickCount={4} tick={{fill: "#fff", fontSize: 12 }} domain={['dataMin', 'dataMax + 2']} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="homologa" 
            strokeWidth={2}
            stroke="#EB008A" 
            dot={{ fill:"#EB008A", stroke:"#fd6ac0", strokeWidth: 2, r: 3 }} 
            activeDot={{ stroke:"#fd6ac0", r: 8 }} 
          />
          <Line 
            type="monotone" 
            dataKey="mensal" 
            stroke="#82ca9d" 
            dot={{ fill:"#82ca9d", stroke:"#82ca9d", strokeWidth: 2, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
}


export default LineChartGraph