import React, { Component } from "react";
import { ButtonToolbar, Button, ButtonGroup, Well } from 'react-bootstrap';
/*import loadGoogleMapsAPI from 'load-google-maps-api';
*/import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import '../styles/searchform.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.getLocation = this.getLocation.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            lat: null,
            lng: null,
            activity: "",
            searchRadius: null,
        }
  }

    componentDidUpdate() {
        this.getLocation();
    }

    getLocation() {
        const googleAPI = this.props.googleAPI;
        const input = document.getElementById('autocomplete');
        const defaultBounds = new googleAPI.LatLngBounds(
            googleAPI.LatLng(-90, -180),
            googleAPI.LatLng(90, 180));
        const options = {
            types: ['(cities)'],
            bounds: defaultBounds
        }
        const autocomplete = new googleAPI.places.Autocomplete(input, options);
        const onPlaceChanged = () => {
            const place = autocomplete.getPlace();
            const placeLat = place.geometry.location.lat();
            const placeLng = place.geometry.location.lng();
            this.setState({lat: placeLat, lng: placeLng});
        }
         autocomplete.addListener('place_changed', onPlaceChanged);
    }

    /*  Grabs values from input button groups and stores them in state */
    handleChange(event) {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
        console.log(this.state);
    }

    /* Gets triggered when a user clicks on the submit button in the search form
    /* Stores queryresults in state */
    handleSubmit(event) {
        event.preventDefault();
        const newLat = this.state.lat;
        const newLng = this.state.lng;
        const newActivity = this.state.activity;
        const newSearchRadius = this.state.searchRadius;
        this.props.setParentLocation(newLat, newLng, newActivity, newSearchRadius);
    }

    render() {
        return (
        <Well bsSize = "large"
          className = "searchContainer">

         <div className="heading">
          <h3 className= "text-center"> Search </h3>
        </div> 
            {/*This is the location search bar */}
        <div>
            <input id="autocomplete" size={50} placeholder="Start typing the name of a city or town" type="text"></input>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className = "container-button">
                <ButtonGroup bsSize = "large">
                    <Button 
                        type="button"
                        name="activity"
                        value = "hiking"
                        onClick = { this.handleChange }>
                        Hiking 
                        </Button>
                    <Button 
                         type="button"
                        name="activity"
                        value = "mountain biking"
                        onClick = { this.handleChange }>
                        Biking 
                    </Button> 
                    <Button 
                        type="button"
                        name="activity"
                        value="camping"
                        onClick = { this.handleChange }>
                        Camping 
                    </Button> 
                    <Button 
                         type="button"
                        name="activity"
                        value="skiing"
                        onClick = { this.handleChange }>
                        Snow Sports 
                        </Button> 
                    <Button 
                         type="button"
                        name="activity"
                        value="paddling"
                        onClick = { this.handleChange }>
                        Paddling 
                    </Button> 
                  </ButtonGroup>
            </div>
            <div>
            <ButtonGroup bsSize = "large">
                <Button
                    type="button"
                    name="searchRadius"
                    value={16094}
                    onClick = { this.handleChange }>
                    10 miles 
                 </Button> 
                <Button
                    type="button"
                    name="searchRadius"
                    value={32187}
                    onClick = { this.handleChange }> 
                    20 miles 
                </Button> 
                <Button
                    type="button"
                    name="searchRadius"
                    value={48280}
                    onClick = { this.handleChange }> 
                    30 miles 
                </Button> 
            </ButtonGroup> 
            </div>
            <br />
            <br />
            {/*<Link to="/Results">*/}
                <Button type="submit">Submit</Button> 
            {/*</Link>*/}
           
        </form>
            </Well>
        )
    }
}

export default SearchForm
