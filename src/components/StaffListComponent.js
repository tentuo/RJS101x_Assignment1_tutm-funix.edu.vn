import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';


class StaffList extends Component {
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

    renderstaff(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardBody>
                      <CardText><h5><b>Họ và tên: {dish.name} </b></h5></CardText>
                      <CardText>Ngày sinh: {dish.doB} </CardText>
                      <CardText>Ngày vào công ty: {dish.startDate} </CardText>
                      <CardText>Phòng ban: {dish.department.name} </CardText>
                      <CardText>Số ngày nghỉ còn lại: {dish.annualLeave} </CardText>
                      <CardText>Số ngày đã làm thêm: {dish.overTime} </CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    };

    render() {
        const menu = this.props.dish.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardTitle>{dish.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderstaff(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    };

};



export default StaffList;