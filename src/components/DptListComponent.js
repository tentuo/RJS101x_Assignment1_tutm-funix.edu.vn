import { getByDisplayValue, render } from "@testing-library/react";
import React, { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

class DptList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    
    componentDidMount(){
        console.log('menu component constructor isvold');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDpt(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardBody>
                      <CardText> {dish.id} </CardText>
                      <CardText> {dish.name} </CardText>
                      <CardText> {dish.numberOfStaff} </CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    
    render() {

        const menu = this.props.dish.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => {this.onDishSelect(dish);}}>
                        <CardTitle>{dish.id}</CardTitle>
                    </Card>
                </div>
            );
        });

        
        return (
            <div className="container">
                <div className="row" >
                        {menu}
                </div>
                <div className="row">
                <Route path='/dpt/dptss'>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDpt(this.state.selectedDish)}
                  </div>
                </Route>
                </div>
            </div>
        );
    }

};

export default DptList;
