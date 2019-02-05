import React from 'react'

function Semestertable({data}) {
  return (
    <div className="card card-plain">
    <div className="header">
      <h4 className="title">Semester</h4>
      <p className="category">if any change contact PC Coodinator</p>
    </div>
    <div className="content table-responsive table-full-width">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Subject code</th>
            <th>Credit Points</th>
            <th>Grade Points</th>
          </tr>
        </thead>
        <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>$ {item.salary}</td>
            <td>{item.country}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Semestertable
