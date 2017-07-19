import React, { Component } from 'react';
import {  Grid, Row, Col} from 'react-bootstrap';

import './styles/App.css';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Banner from './components/common/Banner';
import Featured from './components/Featured';

class App extends Component {

    render() {
        return ( 
          <div className = "App">
              
          <Header />

            <Grid>
            <Row className = "show-grid">
            <Banner />
            <SearchForm />
            <Featured/>

    
            </Row> 
            </Grid>

            <Footer />
            
            </div>

        );
    }

}



export default App;
