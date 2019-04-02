import React from 'react';
import { connect } from 'react-redux';
import DatePicker from './Date'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const permissionmutation=gql`
mutation permission($id:String!){
  permission(id: $id){
    status
}
}`


class ProfileForm extends React.Component{

  constructor(props){
    super(props)

    this.state={
      status:this.props.status
    }
  }

  render(){
  return(
  <div className="card">
    <div className="header">
      <h4 className="title">

      <Mutation mutation={permissionmutation}>
      {(permission,{data}) =>(
      <button className="btn btn-info btn-fill pull-right" 
      onClick={()=>{permission({variables:{id:"5c5ede058643fa0704c91e09"}});this.setState({status:2})}} 
      disabled={(this.state.status)? true:false}>
      Ask edit permission
      </button>)} 
      </Mutation>

      Edit Profile
      </h4>
      
    </div>
    <div className="content">
      <form>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" disabled={this.state.status} placeholder="Company" defaultValue={this.props.profile.name.f_name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" disabled={this.state.status} placeholder="Last Name" defaultValue={this.props.profile.name.l_name} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>House Name</label>
              <input type="text" className="form-control"  disabled={this.state.status} placeholder="Home Address" defaultValue={this.props.profile.address_1.h_name}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Street</label>
              <input type="text" className="form-control"  disabled={this.state.status} placeholder="Home Address" defaultValue={this.props.profile.address_1.street}/>
            </div>
          </div>
          </div>

          <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>District</label>
              <input type="text" className="form-control" disabled={this.state.status} placeholder="District" defaultValue={this.props.profile.address_1.district} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>State</label>
              <input type="text" className="form-control" disabled={this.state.status} placeholder="ZIP Code" defaultValue={this.props.profile.address_1.state}/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Postal Code</label>
              <input type="number" className="form-control" disabled={this.state.status} placeholder="ZIP Code" defaultValue={this.props.profile.address_1.pincode}/>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
          <div className="form-group">
          <label>Phone number</label>
          <input type="number" className="form-control" disabled={this.state.status} placeholder="Phone number" value={this.props.profile.phone.no_1}/>
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
          <label>Alt. Phone number</label>
          <input type="number" className="form-control" disabled={this.state.status} placeholder="Alternaive Phone number" value={this.props.profile.phone.no_2} />
          </div>
          </div>
          </div>
          
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" className="form-control"  disabled={this.state.status} placeholder="Home Address" value={this.props.profile.email.email_1}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Alt. Email Address</label>
              <input type="text" className="form-control"  disabled={this.state.status} placeholder="Home Address" value={this.props.profile.email.email_2}/>
            </div>
          </div>
          </div>

          <div className="row">
          
          </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Date of birth</label>
              <DatePicker/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>KTU Number</label>
              <input type="number" className="form-control" disabled={this.state.status} placeholder="Alternaive Phone number" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Admission Number</label>
              <input type="number" className="form-control" disabled={this.state.status} placeholder="Alternaive Phone number" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Roll Number</label>
              <input type="number" className="form-control" disabled={this.state.status} placeholder="Alternaive Phone number" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-info btn-fill pull-right" disabled={this.state.status}>Update Profile</button>
        <div className="clearfix"></div>
      </form>
    </div>
  </div>
);
      }
}
export default ProfileForm
