import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from 'components/FormInputs/renderField';
import validate from './validate'

const Firstpage = (props) => {
  const { handleSubmit } = props
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="header"><h4>Register Form 1</h4></div>
          <div className="form-horizontal">
            <div className="content">

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Email</label>
                  <div className="col-sm-6">
                    <Field
                      name="Email"
                      type="text"
                      component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">Firstname</label>
                  <div className="col-sm-6">
                    <Field
                      name="Firstname"
                      type="text"
                      component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">Lastname</label>
                  <div className="col-sm-6">
                    <Field
                      name="Lastname"
                      type="text"
                      component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">Phone Number</label>
                  <div className="col-sm-6">
                    <Field name="Phone"
                      type="text"
                      component={renderField} /></div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">Alternative Email</label>
                  <div className='col-sm-6'>
                    <Field name="Email2" type="text" component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">Alternative Phone Number</label>
                  <div className='col-sm-6'>
                    <Field name="Phone2" type="text" component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">Date of Birth</label>
                  <div className='col-sm-6'>
                    <Field name="Dob" type="text" component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">KTU Number</label>
                  <div className='col-sm-6'>
                    <Field name="Ktu" type="text" component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">Admission Number</label>
                  <div className='col-sm-6'>
                    <Field name="Adno" type="text" component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">Roll Number</label>
                  <div className='col-sm-6'>
                    <Field name="Roll" type="text" component={renderField} />
                  </div>
                </div>
                <button type="submit" className="btn btn-fill btn-info">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'register',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Firstpage)