import React, { Component } from 'react';
import generateData from './generateData';
import moment from 'moment';
import Alert from 'sweetalert-react';
const data = generateData(10);

class BigTable extends Component {

  state={
    
  }

  alert=()=>(
    <Alert
    title=""
    show={this.state.message1}
    text="Here's a message!"
    onConfirm={() => this.setState({ message1: false })} />
  )
  alertfunction(){
    console.log("viewclick")
    alert()
  }

  render(){
  return(
    <div>
      <h4 className="title">Upcoming Drives <small></small></h4>
  <div className = "card" >
      <div className="content table-responsive table-full-width">
        <table className="table table-sm">
          <thead>
            <tr>
              <th className>Name</th>
              <th className="th-description text-center">Date</th>
              <th className="text-center">Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr>
                <td className="td-name">
                  {item.name}
                </td>
                <td className="td-number text-center">{moment(item.birthdate).format('YYYY-MM-DD')}</td>
                <td className="buttons-with-margin text-center">
                  {/*<button type="button" rel="tooltip" data-placement="left" title="" className="btn btn-info btn-fill btn-xs" data-original-title="View Post" onClick={()=>this.alertfunction()}>
                    View
            </button>*/}
                  <button className="btn btn-success btn-fill btn-xs" data-original-title="Remove Post">
                    Apply
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
  </div>
)
          }
        }

export default BigTable;