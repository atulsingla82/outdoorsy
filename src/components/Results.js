import React, { Component } from 'react';
import { Grid, Row,Thumbnail,Button,Col,Image} from 'react-bootstrap';
import Modal from 'react-awesome-modal';

export default class Results extends React.Component {

constructor(props) {
        super(props);

}

render(){
  return (
   <div className = "panel panel-default">
      <div className = "panel-heading">
        <h3 className = "panel-title text center" > Results </h3> 
        

      <Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="/images/hiking2.jpg" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
    </Grid>

        </div> 

      </div>




  	)


}

}




