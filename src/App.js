import React, { Component } from 'react';
import {  Grid, Row, Col} from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import loadGoogleMapsAPI from 'load-google-maps-api';
import './styles/App.css';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Banner from './components/common/Banner';
import Featured from './components/Featured';

class App extends Component {
    constructor(props) {
        super(props);
        this.setParentLocation = this.setParentLocation.bind(this);
        this.queryPlaces = this.queryPlaces.bind(this);
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
        const googleAPI = this.state.googleAPI;
        const lat = this.state.lat;
        const lng = this.state.lng;
        const activity = this.state.activity;
        const searchRadius = this.state.searchRadius; 
        if (lat !== null && lng !== null && searchRadius !== null && activity !== "") {
            this.queryPlaces();
        }
    }

    queryPlaces () { 
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

    setParentLocation(newLat, newLng, newActivity, newSearchRadius) {
        this.setState({
            lat: newLat,
            lng: newLng,
            activity: newActivity,
            searchRadius: newSearchRadius
        });
    }

    render() {
        const ResultsPageProps = (props) => {
            return (
                <Results
                locations={this.state.results}
                {...props}
                />  
            )
        }
        
        return ( 
            <Router>
          <div className = "App">
              
          <Header />

            <Grid>
            <Row className = "show-grid">
            <Banner />
            <SearchForm setParentLocation={this.setParentLocation} googleAPI={this.state.googleAPI} />
            <Featured/>

           <Route path="/Results" render={ResultsPageProps}/>
            </Row> 
            </Grid>

            <Footer />
            
            </div>
            </Router>
        );
    }

}



export default App;
