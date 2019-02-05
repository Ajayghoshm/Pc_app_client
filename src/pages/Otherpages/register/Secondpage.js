import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from 'components/FormInputs/renderField';
import validate from './validate'
import submit from './submit'

const Secondpage = (props) => {
    const  handleSubmit  = props.handleSubmit
    return (
        <div>
            <div className="card">
                <div className="header">
                    <h4>Previous Academics Details</h4>
                </div>
                <div className="form-horizontal">
                    <div className="content">
                        <div className="header">
                            <h6>SSLC</h6>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Institution</label>
                                <div className="col-sm-9">
                                    <Field name="sslc_institution" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Board</label>
                                <div className="col-sm-9">
                                    <Field name="sslc_board" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Aggregate</label>
                                <div className="col-sm-9">
                                    <Field name="sslc_aggregate" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Year</label>
                                <div className="col-sm-9">
                                    <Field name="sslc_year" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Document upload</label>
                                <div className="col-sm-9">
                                    <Field name="sslc_document" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="header">
                                <h6>Higher secondary</h6>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Institution</label>
                                <div className="col-sm-9">
                                    <Field name="higher_instiution" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Board</label>
                                <div className="col-sm-9">
                                    <Field name="higher_board" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Aggregate</label>
                                <div className="col-sm-9">
                                    <Field name="higher_aggregate" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Year</label>
                                <div className="col-sm-9">
                                    <Field name="higher_year" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Document uplo</label>
                                <div className="col-sm-9">
                                    <Field name="higher_document" type="text" component={renderField}></Field>
                                </div>
                            </div>
                            <div className="header">
                                <h6>Diploma</h6>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Institution</label>
                                <div className="col-sm-9">
                                    <Field name="Diploma_institution" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Board</label>
                                <div className="col-sm-9">
                                    <Field name="Diploma_board" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Aggregate</label>
                                <div className="col-sm-9">
                                    <Field name="Diploma_aggregate" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Year</label>
                                <div className="col-sm-9">
                                    <Field name="Diploma_year" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Document upload</label>
                                <div className="col-sm-9">
                                    <Field name="" type="text" component={renderField}></Field>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-fill btn-info">Submit</button>
                        </form>
                    </div>


                </div>
                <div className="content">

                </div>
            </div>
        </div>
    )
}

export default reduxForm({
    form: "register",
    destroyOnUnmount: false,
    onSubmit:submit,
    forceUnregisterOnUmount: true
})(Secondpage);
