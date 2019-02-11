import React from 'react';

import faker from 'faker'
const UserInfo = () => (
  <div className="card card-user">
    <div className="content">
      <div className="author">
        <a href="#">
          <img className="avatar border-gray" src={faker.image.avatar()} alt="Mike Andrew" />

          <h4 className="title">
            Varun<br />
            <small>varun.mec@gmail.com</small>
          </h4>
        </a>
      </div>
      <p className="description text-center">
        "Lamborghini Mercy <br />
        Your chick she so thirsty <br />
        I'm in that two seat Lambo"
      </p>
    </div>
    <hr />
    <div className="text-center">
      <button href="#" className="btn btn-simple"><i className="fa fa-facebook-square"></i></button>
      <button href="#" className="btn btn-simple"><i className="fa fa-twitter"></i></button>
      <button href="#" className="btn btn-simple"><i className="fa fa-google-plus-square"></i></button>
    </div>
  </div>
);

export default UserInfo;