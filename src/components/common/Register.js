 // Include React
import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import Login from './Login.js';

export default class Register extends Component {
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
            <br/>
            <h1>Register</h1>
            <form>
              <br/>
              <label>First Name:</label>
              <input
                name="firstName"
                type="text"
                // width="80%"
              />
              <br/>
              <label>Last Name:</label>
              <input
                name="lastName"
                type="text"
                // width="80%"
              />
              <br/>
              <lable>Email</lable>
              <input
                name="email"
                type="text"
                // width="80%"
              />
              <br/>
              <lable>Password</lable>
              <input
                name="password"
                type="text"
                // width="80%"
              />
              <br/>
              <input
                type="submit"
                value="submit"
              />
            </form>
            
              <br/>
              <h4>Have an account?</h4>
              {/*route to Login modal popup and sign in*/}
              <a href={Login}> Login</a>
              <br/><br/>
              <a 
              href="javascript:void(0);" 
              onClick={() => this.closeModal()}>Close</a>
          </div>
        </Modal>
      </section>
  	);
  }
}
