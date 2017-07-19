import React, { Component } from 'react';
import { Nav, NavItem, Navbar} from 'react-bootstrap';
import Modal from 'react-awesome-modal';

export default class Header extends Component {
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
        <Navbar inverse collapseOnSelect >
                      
              <Navbar.Header>
                <Navbar.Brand>
                    <a href = "/"> Outdoorsy </a> 
                </Navbar.Brand> 
                <Navbar.Toggle/>
              </Navbar.Header> 
            
            <Navbar.Collapse >
                <Nav pullRight>
                <section>
                    <div id="signInSignUp">
                        <input type="button" value="Sign Up" onClick={() => this.openModal()} />
                         &nbsp;
                         &nbsp;
                        <input type="button" value="Log In " onClick={() => this.openModal()} />
                    </div>
                        <Modal 
                            visible={this.state.visible}
                            width="30%"
                            height="60%"
                            effect="fadeInUp"
                            onClickAway={() => this.closeModal()}>
                            <div>
                                <h1>Welcome </h1>
                                <p>Some Contents</p>
                                <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                            </div>
                        </Modal>

                    </section>
         
                </Nav> 
            </Navbar.Collapse> 
        </Navbar> 
      )
    }
}
