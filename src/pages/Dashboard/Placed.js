import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import faker from 'faker'

    const Placed = (props) => (
        <div>
          <h4 className="title">Placement <small>Congrats</small></h4>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-counter success">
                <div className="inline">
                  <img  className ="img card "src={faker.image.avatar()}></img>
                  <span >Name: {props.placed[0]? props.placed[0].name:"null"}</span>
                  <span >Slot: {props.placed[0]? props.placed[0].slot:"null"}</span>
                  <span >Pay: {props.placed[0]? props.placed[0].pay:"null"}</span>
                </div>
  
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
              <div className="card-counter success">
                <div className="inline">
                  <img  className ="img card "src={faker.image.avatar()}></img>
                  <span >Name: {props.placed[1]? props.placed[1].name:"null"}</span>
                  <span >Slot: {props.placed[1]? props.placed[1].slot:"null"}</span>
                  <span >Pay: {props.placed[1]? props.placed[1].pay:"null"}</span>
                </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
              <div className="card-counter success">
                <div className="inline">
                  <img  className ="img card "src={faker.image.avatar()}></img>
                  <span className="companyname">Name: {props.placed[2]? props.placed[2].name:"null"}</span>
                  <span className="companyname">Slot: {props.placed[2]? props.placed[2].slot:"null"}</span>
                  <span className="companyname">Pay: {props.placed[2]? props.placed[2].pay:"null"}</span>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
)

export default Placed;