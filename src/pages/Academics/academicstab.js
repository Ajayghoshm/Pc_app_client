import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import Semestertable from "./Semestertable"
import generateData from './generateData';

const data=generateData(6)

export default class academicstag extends Component {
  render() {
    return (
    <div className="col-md-12">
      <div className="card">
        <div className="header">
          <h4 className="title">Semester</h4>
          <p className="category">Semester Details</p>
        </div>
        <div className="content">
          <Tabs defaultActiveKey={1} id="plan-text-tabs">
            <Tab eventKey={1} title="Semester 1"><Semestertable data={data}/></Tab>
            <Tab eventKey={2} title="Semester 2"><Semestertable data={data}/></Tab>
            <Tab eventKey={3} title="Semester 3"><Semestertable data={data}/></Tab>
            <Tab eventKey={4} title="Semester 4"><Semestertable data={data}/></Tab>
            <Tab eventKey={5} title="Semester 5"><Semestertable data={data}/></Tab>
            <Tab eventKey={6} title="Semester 6"><Semestertable data={data}/></Tab>
            <Tab eventKey={7} title="Semester 7"><Semestertable data={data}/></Tab>
            <Tab eventKey={8} title="Semester 8"><Semestertable data={data}/></Tab>
          </Tabs>
        </div>
      </div>
    </div>
    )
  }
}
