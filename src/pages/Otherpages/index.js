import React from 'react'
import {Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'

const Otherpages = ({match}) => {
  return (
    <div className="content">
      <Route path={`${match.url}/register`} component={Register}/>
      <Route path={`${match.url}/login`} component={Login}/>
    </div>
  )
}

export default Otherpages
