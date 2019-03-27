import React from 'react'
import {Route} from 'react-router-dom'
import Register from './Register'
import Register_simple from './register_simple'
import Login from './Login'

const Otherpages = ({match}) => {
  return (
    <div className="content">
      <Route path={`${match.url}/register`} component={Register_simple}/>
      <Route path={`${match.url}/login`} component={Login}/>
    </div>
  )
}

export default Otherpages
