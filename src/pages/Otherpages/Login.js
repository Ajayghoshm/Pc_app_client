import React from 'react'
import LogInform from './LogInform'

const Login = () => {
  return (
    <div className="col-md-12">
        <LogInform onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
      </div>
  )
}

export default Login
