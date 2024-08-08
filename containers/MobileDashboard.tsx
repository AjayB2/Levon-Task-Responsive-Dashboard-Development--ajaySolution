import React from 'react';
import { connect } from 'react-redux';
import MobileHeader from '../components/MobileHeader';
import MobileSidebar from '../components/MobileSidebar';
import MobileMainContent from '../components/MobileMainContent';

const MobileDashboard = ({ data }) => {
  return (
    <div className="mobile-dashboard">
      <MobileHeader />
      <MobileSidebar />
      <MobileMainContent data={data} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps)(MobileDashboard);