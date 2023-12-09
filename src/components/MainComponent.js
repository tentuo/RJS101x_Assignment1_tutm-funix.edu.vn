import { Navbar, NavbarBrand } from 'reactstrap';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import { DEPARTMENTS, ROLE, STAFFS} from '../shared/staffs';
import DptList from './DptListComponent';
import StaffList from './StaffListComponent';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DEPARTMENTS, 
      dishes1 : STAFFS,
    };
  }
  
  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }

  render() {    
    return (

      <div>
        <Navbar dark color="primary">
         <div className="container">
           <NavbarBrand href="/" > ứng dụng quản lý nhân sự v1.0</NavbarBrand>
         </div>
        </Navbar>
          <Route path='/staff'>
            <div className="containernhv" >
            <StaffList dish={this.state.dishes1} />
            </div>
          </Route>
      </div>

    );
  }
}
export default Main;

