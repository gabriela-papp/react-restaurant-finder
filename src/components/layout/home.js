import React, { Component } from 'react';
import Map from '../map';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Restaurant from '../restaurant-result';
import { Button, Form, FormControl } from 'react-bootstrap';
import '../../App.css';


class Home extends Component{
		state={
			searchText:'',
			venues:[],	
			location :{
				lat:51.51,
				lng:-0.11
			}
			
		}

	componentWillMount(){
		this.getLocation();
	}

	onTextChange = (e) =>{
		this.setState({[e.target.name]: e.target.value})
	
	}

	onTextSubmit = (e) =>{
		axios.get(`https://api.foursquare.com/v2/venues/search?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=1CYYIBFI2ETP0WMK5YDOXSMOYTPQ0CM4OQHOJNIPAQ3EMOYC&ll=${this.state.location.lat},${this.state.location.lng}&query=${this.state.searchText}&v=20189988`)
		    .then(res=>{
		      const venues=res.data.response.venues;
		      console.log(res);
			  this.setState({venues:venues})
		    })
		    .catch(err=>{
		      console.log(err)
		    })
	}
   
  	getLocation=()=>{
  		navigator.geolocation.getCurrentPosition((position)=>{  			
  			this.setState({
  				location:{
  					lat:position.coords.latitude,
  					lng:position.coords.longitude
  				}
  			})
  		})
  	}

	render(){
		 
		return(

			<div>			
				<Map
				  center={this.state.location}
				  markers={this.state.venues}
				  containerElement={<div style={{ height: `400px`,width:`100%` }} />}
				  mapElement={<div style={{ height: `100%`,width:`100%` }} />}
				/>
				<Form className='form'>
				<FormControl
					className='search-field'
					name='searchText'
					value={this.state.searchText}
					placeholder='Search Pizza,Italian...'
					onChange={this.onTextChange}
				 />
				<Button 
					className='button'
					bsStyle='info' 
					onClick={this.onTextSubmit}
					>Find</Button>
				</Form>				
				<Restaurant venues={this.state.venues}/>
			</div>
		)	
	}	
}

export default Home;