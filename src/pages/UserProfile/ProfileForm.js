import React from 'react';
import { connect } from 'react-redux';
import DatePicker from './Date'

const ProfileForm = (props) => (
  <div className="card">
  
    <div className="header">
      <h4 className="title">
      <button className="btn btn-info btn-fill pull-right">Ask edit permission</button>Edit Profile</h4>
    </div>
    <div className="content">
      <form>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" disabled={props.state} placeholder="Company" defaultValue="Mike" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" disabled={props.state} placeholder="Last Name" defaultValue="Andrew" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>House Name</label>
              <input type="text" className="form-control"  disabled={props.state} placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
            </div>
          </div>
          </div>

          <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>District</label>
              <input type="text" className="form-control" disabled={props.state} placeholder="Country" defaultValue="Andrew" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>State</label>
              <input type="number" className="form-control" disabled={props.state} placeholder="ZIP Code" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Postal Code</label>
              <input type="number" className="form-control" disabled={props.state} placeholder="ZIP Code" />
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
          <div className="form-group">
          <label>Phone number</label>
          <input type="number" className="form-control" disabled={props.state} placeholder="Phone number" />
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
          <label>Alt. Phone number</label>
          <input type="number" className="form-control" disabled={props.state} placeholder="Alternaive Phone number" />
          </div>
          </div>
          </div>
          
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Alt. Email Address</label>
              <input type="text" className="form-control"  disabled={props.state} placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
            </div>
          </div>
          </div>

          <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Alt. Email Address</label>
              <input type="text" className="form-control"  disabled={props.state} placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
            </div>
          </div>
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
              <input type="number" className="form-control" disabled={props.state} placeholder="Alternaive Phone number" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Admission Number</label>
              <input type="number" className="form-control" disabled={props.state} placeholder="Alternaive Phone number" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Roll Number</label>
              <input type="number" className="form-control" disabled={props.state} placeholder="Alternaive Phone number" />
            </div>
          </div>
        </div>


        <button type="submit" className="btn btn-info btn-fill pull-right" disabled={props.state}>Update Profile</button>
        <div className="clearfix"></div>
      </form>
    </div>
  </div>
);

const mapsStatetoprops=(state)=>{
  console.log(state.Auth.user.editpermissions)
  return {state:state.Auth.user.editpermissions}
}
export default connect(mapsStatetoprops)(ProfileForm);