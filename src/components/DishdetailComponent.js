import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
        console.log('menu component constructor isvold');
    }
    
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderComments(dish) {
        if (dish != null)
            return(
                <Card>
                    <h4>nhan xet</h4>
                    <CardBody>
                      <CardTitle>tac gia nhan xet</CardTitle>
                      <CardText>ngay thang</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
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
                    {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }

}

export default DishDetail;