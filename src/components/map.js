import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component{
  render(){
    
    const markers = this.props.markers.map((venue,i)=>{
         const marker={
          position:{
                lat:venue.location.lat,
                lng:venue.location.lng
            }
          }
            return <Marker key={venue.id} {...marker} />
    })

    return(
        <GoogleMap
          defaultZoom={13}        
          defaultCenter={this.props.center}>
          <div>{markers}</div>
        </GoogleMap>       
      )
  }
}

export default withGoogleMap(Map);
