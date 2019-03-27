import React from 'react';


const ProfileForm = (props) => (
  <div className="card">
    <div className="content">
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Semester 1 Gradecard</label>
              <input type="file" className="form-control" placeholder="Company" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Semester 2 Gradecard</label>
              <input type="file" className="form-control" placeholder="Last Name" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Semester 3 Gradecard</label>
              <input type="file" className="form-control" placeholder="Home Address" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Semester 4 Gradecard</label>
              <input type="file" className="form-control"   placeholder="Home Address" />
            </div>
          </div>
          </div>

          <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Photo</label>
              <input type="file" className="form-control"  placeholder="District"  />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>SSLC Gradecard</label>
              <input type="file" className="form-control" placeholder="ZIP Code" />
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
          <div className="form-group">
          <label>+2 Gradecard</label>
          <input type="file" className="form-control"  placeholder="Phone number"/>
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
          <label>Diploma Gradecard</label>
          <input type="file" className="form-control" placeholder="Alternaive Phone number"  />
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
        <button type="submit" className="btn btn-info btn-fill pull-right">Next</button>
        <div className="clearfix"></div>
      </form>
    </div>
  </div>
);


export default ProfileForm;