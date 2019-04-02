import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import generateData from './generateData';
import moment from 'moment';
import Alert from 'sweetalert-react';
//const data = generateData(10);
import Swal from 'sweetalert2'
import { ApolloConsumer } from 'react-apollo';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


class Upcoming extends Component {

  constructor(props) {
    super(props)
    this.onViewclick = this.onViewclick.bind(this)
  }


  state = {
    data: this.props.upcoming_Drives
  }

  Query2 =
    gql`
      query company_eligiblity_check($company_id:String!,$user_id:String!){
        company_eligiblity_check(company_id:$company_id,user_id:$user_id)
      }`

  onViewclick = (item, company_check) => {
    console.log(company_check)
    MySwal.fire({
      title: <span>{item.Name}</span>,
      html: <div>
        <h2>
        <p>Post: {item.Job}</p>
        <p>Semester: {item.Semester}</p>
        <p>Slot: {item.Slot}</p>
        <p>Location: {item.Location}</p>
        </h2>
      </div>,
      showConfirmButton: company_check,
      showCancelButton: !company_check,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> APPLY',
      cancelButtonText:
      '<i class="fa fa-thumbs-down"></i> NOT ELIGIBLE'
    }).then(((result) => {
      console.log("clicked", result)
      if (result.value != null && result.value == true) {
        console.log("clicked", result.value)
      }

    }
    ))
  }


  render() {
    return (
      <div>
        <h4 className="title">Upcoming Drives <small></small></h4>
        <div className="card" >
          <div className="content" style={{
            'max-height': 400,
            'min-height': 400, 'overflow-y': 'scroll'
          }}>
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
                    <tr key={item.id}>
                      <td className="td-name">
                        {item.Name}
                      </td>
                      <td className="td-number text-center">{item.Job}</td>
                      <td className="buttons-with-margin text-center">
                        <ApolloConsumer>
                          {client => (
                            <button type="button" rel="tooltip"
                              data-placement="left" title=""
                              className="btn btn-info btn-fill btn-xs"
                              data-original-title="View Post"
                              onClick={async () => {
                                const { data } = await client.query({
                                  query: this.Query2,
                                  variables: { company_id: "5c5edfa62674a74544ddaf629", user_id: "5beac691c0833d3264e7d6e2" }
                                });
                                console.log(data)
                                this.onViewclick(item, data.company_eligiblity_check)
                              }}>
                              View
                  </button>)
                          }
                        </ApolloConsumer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Upcoming;