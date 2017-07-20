import React, { Component } from "react";
import { ButtonToolbar, Button, ButtonGroup, Well } from 'react-bootstrap';
import loadGoogleMapsAPI from 'load-google-maps-api';

import '../styles/searchform.css';

class SearchForm extends Component {
    constructor() {
        super();
        this.getLocation = this.getLocation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
                lat: null,
                lng: null,
                activity: "",
                searchRadius: null,
          apiLoaded: false,
          results: []
        }
  }

    componentDidMount() {
    /* Loads the Google Maps API with Places library into this component */    
    loadGoogleMapsAPI({
      key: 'AIzaSyCUX8t_7WDEjYpCH34o4MPRPREZi_HpOzo',
      libraries: ["places"]
    })
    .then((googleAPI) => {
          this.setState({apiLoaded: true, googleAPI: googleAPI});
        }).catch((err) => {
          console.error(err)
    })
  }

    componentDidUpdate() {
        this.getLocation()
    }

    // method to handle autocomplete in search bar and capturing lat/lng data from selected location
    getLocation() {
        const googleAPI = this.state.googleAPI;
        console.log("The Google API", googleAPI)
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
            /*get the place*/
        const place = autocomplete.getPlace();
        console.log(place);
        /*get lng/lat for place*/
        const placeLat = place.geometry.location.lat();
        const placeLng = place.geometry.location.lng();
        console.log(placeLat, placeLng); 
        this.setState({lat: placeLat, lng: placeLng})
      }
      autocomplete.addListener('place_changed', onPlaceChanged);
    }

    /*  Grabs values from input button groups and stores them in state */
    handleInputChange(event) {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    /* Gets triggered when a user clicks on the submit button in the search form
    /* Stores queryresults in state */
    handleSubmit(event) {
        event.preventDefault();
        const queryPlaces = () => { 
        const googleAPI = this.state.googleAPI;
        let service;
        const initialize = () => {
          const locationCoords = {lat: this.state.lat, lng: this.state.lng};
          const request = {
            location: locationCoords,
            radius: this.state.searchRadius,
            keyword: [this.state.activity]
          };    
          service = new googleAPI.places.PlacesService(document.createElement('div.attributions'));
          let callback = (results, status) => {
            if (status === googleAPI.places.PlacesServiceStatus.OK) {
              console.log(results);
              this.setState({results: results});
            }
          }
          service.nearbySearch(request, callback);      
        }
        initialize();
      }
      queryPlaces();
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
                <ButtonToolbar>
                    <Button 
                        bsStyle = "success"
                        name="activity"
                        value = "hiking"
                        onClick = { this.handleInputChange }>
                        Hiking 
                        </Button>
                    <Button 
                        bsStyle = "success"
                        name="activity"
                        value = "mountain biking"
                        onClick = { this.handleInputChange }>
                        Biking 
                    </Button> 
                    <Button 
                        bsStyle = "success"
                        name="activity"
                        value=""
                        onClick = { this.handleInputChange }>
                        Camping 
                    </Button> 
                    <Button 
                        bsStyle = "success"
                        name="activity"
                        value="skiing"
                        onClick = { this.handleInputChange }>
                        Snow Sports 
                        </Button> 
                    <Button 
                        bsStyle = "success"
                        name="activity"
                        value="paddling"
                        onClick = { this.handleInputChange }>
                        Kayaking/Canoeing 
                    </Button> 
                </ButtonToolbar> 
            </div>
            <ButtonGroup bsSize = "large">
                <Button
                    name="searchRadius"
                    value={16094}
                    onClick = { this.handleInputChange }>
                    10 miles 
                 </Button> 
                <Button
                    name="searchRadius"
                    value={32187}
                    onClick = { this.handleInputChange }> 
                    20 miles 
                </Button> 
                <Button
                    name="searchRadius"
                    value={48280}
                    onClick = { this.handleInputChange }> 
                    30 miles 
                </Button> 
            </ButtonGroup> 
            <button type="submit">Submit</button>
        </form>
            </Well>
        )
    }
}

export default SearchForm
