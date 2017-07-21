import React, { Component } from 'react';
import { Grid, Row,Thumbnail,Button,Col,Image} from 'react-bootstrap';
import Modal from 'react-awesome-modal';

class Results extends React.Component {

constructor(props) {
    super(props);
    this.renderPlaces = this.renderPlaces.bind(this);
}

renderPlaces(key) {
    const place = this.props.places[key];
    return (
    <div className="view-places" key={key}>
      <Col xs={6} md={4}>
        <Thumbnail src="/images/hiking2.jpg" alt="242x200">
        <h4>{place.name}</h4>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
          </p>
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



