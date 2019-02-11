import React from 'react';
import Upcoming from './Upcoming'
import Registered from './Registered'
import UserBehaviorChart from './UserBehaviorChart';
import Tasks from './Tasks';
import Placed from './Placed'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class Dashboard extends React.Component {

  componentDidMount() {
    console.log("Dashboard")
  }
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <Query query={gql`
          {
          user(id: "5c5ede058643fa0704c91e09"){
            id,
            name{
              f_name
              l_name
            }
            company{
             name
             pay
             slot
            }
            upcoming_Drives{
              
              status
              Name
              Branch
              Job
              Backlogs
              History
              Semester
              Slot
              Location
              CloseTime
              External
              Date
              Logo

            }
          }
        }`}>
              {({ loading, error, data }) => {
                if (loading || !data) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return (
                  <div>
                  <div className="col-md-12">
                    <Placed placed={data.user.company} />
                  </div>
                  <div>
                  <div className="col-md-6">
                      <Upcoming upcoming_Drives={data.user.upcoming_Drives}/>
                    </div>
                    <Query
                    query={gql`
                    {
                    notification{
                      content
                      count
                      completed
                    }
                  }
                    `}>{({loading,err,data})=>{
                      if (loading || !data) return <p>Loading...</p>;
                      if (error) return <p>Error :(</p>;
                      return (
                        <div className="col-md-6">
                      <Tasks notification={data.notification} />
                    </div>
                      )
                    }}
                    
                    </Query>
                  </div>
                  </div>
                    )
              }
              }
            </Query>

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
    )
  }
}


export default Dashboard;