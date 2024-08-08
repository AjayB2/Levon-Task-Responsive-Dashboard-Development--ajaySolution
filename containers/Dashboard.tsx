import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const DashboardContainer = ({ data }) => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <MainContent data={data} />
    </div>
  );
};

DashboardContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

DashboardContainer.defaultProps = {
  data: {},
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps)(DashboardContainer);