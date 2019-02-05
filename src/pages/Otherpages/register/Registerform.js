import React from 'react'
import {reduxForm } from 'redux-form';
import _ from 'lodash'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'
import Thirdpage from './ThirdPage'
import submit from './submit'

import validate from './validate'



class Registerform extends React.Component{

  constructor(props){
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    console.log(this.props.Post_method)
    this.state={
      page:1
    }
  }


  nextPage(){
    this.setState({page:this.state.page+1})
  }

  previousPage(){
    this.setState({page:this.state.page-1})
  }
  render(){
    const {OnSubmit}=this.props
    const {page}=this.state
    console.log(this.props)
    return(
      <div>
        {page===1 && <Firstpage onSubmit={this.nextPage}/>}
        {page===2 && (<Secondpage previousPage={this.previousPage} OnSubmit={OnSubmit}/>)}
        {page===3 && (<Thirdpage previousPage={this.previousPage} OnSubmit={OnSubmit}/>)}
        </div>
      )
    }
  }

  
    
    export default reduxForm({
      form:'register',
    })(Registerform)
