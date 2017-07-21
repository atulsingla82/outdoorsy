import React, { Component } from 'react';
import { Grid, Row,Thumbnail,Button,Col,Image} from 'react-bootstrap';
import CreateOuting from './CreateOuting';

class Results extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderPlaces = this.renderPlaces.bind(this);
    this.state = {
      selectedPlace: {},
      visible: false
    };
  }
  openModal() {
    this.setState({
        visible : true
    });
  }
  closeModal() {
    this.setState({
        visible : false
    });
  }
  handleClick(event, key) {
    const selectedPlace = this.props.places[key];
    this.setState({selectedPlace: selectedPlace});
  }

  renderPlaces(key) {
    const selectedPlace = this.props.places[key];
    return (
    <div className="view-places" key={key} onClick={this.handleClick}>
      <Col xs={6} md={4}>
        <Thumbnail src="/images/hiking2.jpg" alt="242x200">
        <h4>{selectedPlace.name}</h4>
        Description
          <CreateOuting selectedPlace={selectedPlace} activity={this.props.activity} />
          <Button bsStyle="default">Button</Button>
          </Thumbnail>
      </Col>
    </div>
    )
  }

render(){
  return (
   <div className = "panel panel-default">
      <div className = "panel-heading">
        <h3 className = "panel-title text center" > Results </h3> 
        

      <Grid>
    <Row>
      {Object.keys(this.props.places).map(this.renderPlaces)}    
    </Row>
    </Grid>

        </div> 

      </div>
  	)
  }
}

export default Results;



