 // Include React
import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import Modal from 'react-awesome-modal';

export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          visible : false
      }
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
 
  render() {
    return (
      <section>

        <input 
        	type="button" 
        	value="Register" 
        	onClick={() => this.openModal()} 
        />
        <Modal 
        	visible={this.state.visible} 
        	width="40%" 
        	height="60%" 
        	effect="fadeInUp" 
        	onClickAway={() => this.closeModal()}>
          <div>
            <h1>Register</h1>
            <p>Some Contents</p>
            <a 
            	href="javascript:void(0);" 
            	onClick={() => this.closeModal()}>Close</a>
          </div>
        </Modal>
      </section>
  	);
  }
}
