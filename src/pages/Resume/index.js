import React, { Component } from 'react'
import Template from './template'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default class index extends Component {
  render() {
    return (
      <Query query={gql`{
        UserQuery(id:"5c5ede058643fa0704c91e09"){
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
          ktu_no
          tcgpa
        }}`}>{({loading,error,data})=>{
    if (loading || !data) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
      
          <Template profile={data.UserQuery}/>
    )}}
  </Query>
      
    )
  }
}