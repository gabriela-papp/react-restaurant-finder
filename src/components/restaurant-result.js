import React, { Component } from 'react';
import {Panel,Heading,Body} from 'react-bootstrap';
import '../App.css';

class Restaurant extends Component {
  render() {
    const venues = this.props.venues;
    const list = venues.map((venue,i)=>{
       return(
        <Panel key={venue.id} className='panel'>
          <Panel.Heading>{i +1}. {venue.name}</Panel.Heading>
          <Panel.Body>Address: {venue.location.address}</Panel.Body>         
        </Panel>
          )
    })

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default Restaurant;
