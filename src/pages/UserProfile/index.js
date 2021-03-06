import React from 'react';
import ProfileForm from './ProfileForm';
import UserInfo from './UserInfo';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const UserProfile = () => (
  <div className="content">
    <div className="container-fluid">
      <Query query={gql`{ 
  UserQuery(id:"5c5ede058643fa0704c91e09"){
    id
  name{
    f_name
    l_name
  }
    address_1{
      h_name
      street
      district
      state
      pincode
    }
    phone{
      no_1
      no_2
    }
    email{
      email_1
      email_2
    }
    status
  }}`}>
        {({ loading, error, data }) => {
          if (loading || !data) return <p>Loading...</p>;
          else if (error) return <p>Error :(</p>;
          else if(data.UserQuery!=null){
          return (
            <div className="row">
              <div className="col-md-8">
                <ProfileForm profile={data.UserQuery} status={data.UserQuery.status==1? false:true}/>
              </div>
              <div className="col-md-4">
                <UserInfo />
              </div>
            </div>
          )
          }
        }}
      </Query>
    </div>
  </div>
);

export default UserProfile;