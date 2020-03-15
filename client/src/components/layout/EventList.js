import React, { Component } from "react";
import axios from "axios";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
   componentDidMount() {
    try {
        axios.get('/api/events')
        .then(res => {
          const users = res.data;
          this.setState({ users });
        })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
    <div>
    <h1 >All Events registered are</h1>
        {this.state.users.map(user => (
          <li key={user.id} className='container' type="none" style={{backgroundColor:'gray'} }>
            <li>organisation: {user.Organisation}</li>
            <li>email: {user.Email}</li>
            <li>event: {user.Event}</li>
            <li>Address: {user.Address}</li>
            <li>City:{user.City}</li>
            <li>PostCode: {user.PostCode}</li>
            <li>State: {user.State}</li>
            <li>Mobile: {user.Mobile}</li>
            <li>TimeZone: {user.TimeZone}</li>
            <li>DateOfEvent: {user.DateOfEvent}</li>
          </li>
        ))}
      </div>
    );
  }
}

export default EventList;
