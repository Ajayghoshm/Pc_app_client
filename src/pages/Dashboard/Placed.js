import React from 'react'
import faker from 'faker'

    const Placed = () => (
        <div>
          <h4 className="title">Placement <small>Congrats</small></h4>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-counter success">
                <div className="inline">
                  <img  className ="img card "src={faker.image.avatar()}></img>
                  <span className="companyname">
                  <span>Bloomberg</span>
                  </span>
                  
                </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
              <div className="card-counter success">
                <div className="inline">
                  <img  className ="img card "src={faker.image.avatar()}></img>
                  <span className="companyname">Bloomberg</span>
                </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
              <div className="card-counter success">
                <div className="inline">
                  <img  className ="img card "src={faker.image.avatar()}></img>
                  <span className="companyname">Bloomberg</span>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
)

export default Placed;