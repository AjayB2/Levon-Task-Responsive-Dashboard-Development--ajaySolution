import React from 'react';
import PropTypes from 'prop-types';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

const Widget = ({ type, data }) => {
  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

  switch (type) {
    case 'line':
      return <LineChart data={data} />;
    case 'bar':
      return <BarChart data={data} />;
    case 'pie':
      return <PieChart data={data} />;
    default:
      return <div>Unknown chart type</div>;
  }
};

Widget.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default Widget;