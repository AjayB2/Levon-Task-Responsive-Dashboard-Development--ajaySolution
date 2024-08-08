import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const BarChart = ({ data }) => {
  return (
    <BarChart width={400} height={300} data={data}>
      <Bar dataKey="value" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
    </BarChart>
  );
};

export default BarChart;