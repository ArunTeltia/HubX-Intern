import React, { Fragment, useState } from "react";

import axios from "axios";
const Dashboard = props => {
  const [formData, setFormData] = useState({
    Organisation: "",
    Email: "",
    Event: "",
    Address: "",
    City: "",
    PostCode: "",
    State: "",
    Mobile: "",
    TimeZone: "",
    DateOfEvent: ""
  });

  const {
    Organisation,
    Email,
    Event,
    Address,
    City,
    PostCode,
    State,
    Mobile,
    TimeZone,
    DateOfEvent
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
  
    const newEvent = {
      Organisation,
      Email,
      Event,
      Address,
      City,
      PostCode,
      State,
      Mobile,
      TimeZone,
      DateOfEvent
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(newEvent);

      const res = await axios.post("/api/events", body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Add Details of the event</h1>
      <p className="lead">
        <i className="fa fa-meetup" aria-hidden="true"></i>Set a event and Meet
        with the new people
      </p>
      <small>* = required field</small>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="* Name of the Organisation"
            name="Organisation"
            value={Organisation}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Email"
            name="Email"
            value={Email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Topic Of Event"
            name="Event"
            value={Event}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Address of the event"
            name="Address"
            value={Address}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* City"
            name="City"
            value={City}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* PostCode"
            name="PostCode"
            value={PostCode}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Name of the State"
            name="State"
            value={State}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Enter Your Organisation HelpLineNo."
            name="Mobile"
            value={Mobile}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* TimeZone"
            name="TimeZone"
            value={TimeZone}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <h4>Date of Event</h4>
          <input
            type="text"
            name="DateOfEvent"
            value={DateOfEvent}
            onChange={e => onChange(e)}
          />
        </div>
       
        <input
          onClick={e => {
            onSubmit(e);
          }}
          type="submit"
          className="btn btn-primary my-1"
        />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};
export default Dashboard;
