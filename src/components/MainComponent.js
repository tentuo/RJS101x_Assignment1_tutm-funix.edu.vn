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
import newtp from './newtpComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DEPARTMENTS, 
      dishes1 : STAFFS,
      stay: '0',
    };
  }
  
  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }

  annut(e){

    console.log(e.target.value);
  }
  render() {    
    return (

      <div>
        <Navbar dark color="primary">
         <div className="container">
           <NavbarBrand href="/" > ứng dụng quản lý nhân sự v1.0  gtstay: {this.state.stay} <newtp/></NavbarBrand>
           <input type='text' onChange={annut = () =>  e.target.value}/>
           <Button onClick={annut}> </Button>
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

