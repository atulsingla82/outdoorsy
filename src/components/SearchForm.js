import React, { Component } from "react";
import { ButtonToolbar, Button, ButtonGroup, Well } from 'react-bootstrap';
import './searchform.css';
import Geosuggest from 'react-geosuggest';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''

        };
       // Binding our component since we'll be passing this
       // method to child components
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount() {
    
    }

    handleInputChange(event) {
        this.setState({ searchValue: event.target.value });
    }

    handleButtonClick() {
        const newSearch = this.state.searchValue;

        this.setState({ searchValue: '' });
    }

    render() {

        return (


       <Well bsSize = "large"
          className = "searchContainer">

         <div className="heading">
          <h3 className= "text-center"> Search </h3>
        </div> 
            <input className = "input"
            id = "input-box"
            type = "text"
            onChange = { this.handleInputChange }
            placeholder = "new search here!"
            value = { this.state.searchValue }
            required/>

            <div className = "container-button">

            <ButtonToolbar>

            <Button bsStyle = "success"
            onClick = { this.handleButtonClick }>
            Hiking </Button>

            <Button bsStyle = "success"
             onClick = { this.handleButtonClick }>
            Biking </Button> 

            <Button bsStyle = "success"
            onClick = { this.handleButtonClick }>
            Mountain Climbing </Button> 

            <Button bsStyle = "success"
            onClick = { this.handleButtonClick }>

            Snow Sports </Button> 

            <Button bsStyle = "success"
            onClick = { this.handleButtonClick }>
            Camping </Button> 

            </ButtonToolbar> 

            </div>


            <ButtonGroup bsSize = "large">
            <Button> 10 miles </Button> 
            <Button> 20 miles </Button> 
            <Button> 30 miles </Button> 
            </ButtonGroup> 

            </Well>




        )
    }

}


export default SearchForm
