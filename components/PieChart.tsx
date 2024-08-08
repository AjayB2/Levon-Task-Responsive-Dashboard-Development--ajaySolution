import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const PieChart = ({ data }) => {
  return (
    <PieChart width={400} height={300}>
      <Pie data={data} cx={200} cy={200} outerRadius={100} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChart;