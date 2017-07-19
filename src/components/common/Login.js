 // Include React
import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import Modal from 'react-awesome-modal';

export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        visible : false,
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
      <section
      	align="left"
      >
        <input 
        	type="button" 
        	value="Login" 
        	onClick={() => this.openModal()} 
        />
        <Modal 
        	visible={this.state.visible} 
        	width="40%" 
        	height="60%" 
        	effect="fadeInUp" 
        	onClickAway={() => this.closeModal()}>
          <div>
            <h1>Login</h1>
            <form>
            	<br/>
	            <label>First Name:</label>
	            <input
	            	name="firstName"
	            	type="text"
	            	width="80%"
	            />
	            <br/>
	            <label>Last Name:</label>
	            <input
	            	name="lastName"
	            	type="text"
	            	width="80%"
	            />
	            <br/>
	            <lable>Email</lable>
	            <input
	            	name="email"
	            	type="text"
	            	width="80%"
	            />
	            <br/>
	            <lable>Password</lable>
	            <input
	            	name="password"
	            	type="text"
	            	width="80%"
	            />
	            <br/>
	            <input
	            	type="submit"
	            	value="submit"
	            />
	          </form>
            <a 
            	href="javascript:void(0);" 
            	onClick={() => this.closeModal()}>Close</a>
          </div>
        </Modal>
      </section>
  	);
  }
}