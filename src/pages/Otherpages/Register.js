import React from 'react'
import Registerform from './register/Registerform'
import {connect} from 'react-redux'

const Register = () => {
  console.log("resgiter",this.props)
  return (
    <div>
      <Registerform/>
    </div>
  )
}


export default connect()(Register)
