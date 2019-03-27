import React from 'react';


const ProfileForm = (props) => (
  <div className="card">
    <div className="content">
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="Company" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>House Name</label>
              <input type="text" className="form-control" placeholder="Home Address" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Street</label>
              <input type="text" className="form-control"   placeholder="Home Address" />
            </div>
          </div>
          </div>

          <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>District</label>
              <input type="text" className="form-control"  placeholder="District"  />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>State</label>
              <input type="text" className="form-control" placeholder="ZIP Code" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Postal Code</label>
              <input type="number" className="form-control" placeholder="ZIP Code"/>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
          <div className="form-group">
          <label>Phone number</label>
          <input type="number" className="form-control"  placeholder="Phone number"/>
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
          <label>Alt. Phone number</label>
          <input type="number" className="form-control" placeholder="Alternaive Phone number"  />
          </div>
          </div>
          </div>
          
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" className="form-control"  placeholder="Home Address"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Alt. Email Address</label>
              <input type="text" className="form-control"  placeholder="Home Address"/>
            </div>
          </div>
          </div>

          <div className="row">
          
          </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Date of birth</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>KTU Number</label>
              <input type="number" className="form-control" placeholder="Alternaive Phone number" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Admission Number</label>
              <input type="number" className="form-control"  placeholder="Alternaive Phone number" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Roll Number</label>
              <input type="number" className="form-control"  placeholder="Alternaive Phone number" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-info btn-fill pull-right" onClick={()=>{ props.next(2)}}>Next</button>
        <div className="clearfix"></div>
      </form>
    </div>
  </div>
);


export default ProfileForm;