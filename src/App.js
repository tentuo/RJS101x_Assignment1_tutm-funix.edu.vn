import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import DishDetail from './components/DishdetailComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">ristorant</NavbarBrand>
        </div>
      </Navbar>
      <DishDetail dishes={this.state.dishes} />
    </div>
   );
  }
}
export default App;