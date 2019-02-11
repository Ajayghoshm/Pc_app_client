import React, { Component } from 'react';
import generateData from './generateData';
import moment from 'moment';
import Alert from 'sweetalert-react';
//const data = generateData(10);
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


class BigTable extends Component {

  constructor(props){
    super(props)
    this.onViewclick=this.onViewclick.bind(this)
  }


  state={
    data:this.props.upcoming_Drives
  }

  
  onViewclick=(item)=>{
    MySwal.fire({
      title:<h3>{item.Name}</h3>,
    html:<div>
      <p>Post: {item.Job}</p>
      <p>Semester: {item.Semester}</p>
      <p>Slot: {item.Slot}</p>
      <p>Location: {item.Location}</p>
      </div>,
    showConfirmButton:true,
    confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> APPLY'})
  }

  
  render(){
  return(
    <div>
      <h4 className="title">Upcoming Drives <small></small></h4>
  <div className = "card" >
      <div className="content" style={{'max-height': 400, 'min-height': 400, 'overflow-y': 'scroll'}}>
      <div className="table-responsive table-full-width">
        <table className="table table-sm">
          <thead>
            <tr>
              <th className>Name</th>
              <th className="th-description text-center">Job Post</th>
              <th className="text-center">Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(item => (
              <tr>
                <td className="td-name">
                  {item.Name}
                </td>
                <td className="td-number text-center">{item.Job}</td>
                <td className="buttons-with-margin text-center">
                  <button type="button" rel="tooltip" data-placement="left" title="" className="btn btn-info btn-fill btn-xs" data-original-title="View Post" onClick={()=>this.onViewclick(item)} item={item}>
                    View
            </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Alert
    title="asds"
    show={this.state.show}
    text={<span>error</span>}
    onConfirm={() => this.setState({ show: false })} />
      </div>
  </div>
  </div>
  </div>
)
          }
        }

export default BigTable;