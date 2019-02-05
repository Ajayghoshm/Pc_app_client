import React from 'react';
import Upcoming from './Upcoming'
import Registered from './Registered'
import UserBehaviorChart from './UserBehaviorChart';
import Tasks from './Tasks';
import Placed from './Placed'

const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Placed />
        </div>
        <div>
        <div className="col-md-6">
          <Tasks />
        </div>
        <div className="col-md-6">
          <Upcoming />
        </div>
        </div>
        <div>
          <div className="col-md-12">
            <Registered />
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-md-12">
          <UserBehaviorChart />
        </div>
      </div>

    </div>
  </div>
);

export default Dashboard;