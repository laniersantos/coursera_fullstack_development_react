// import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
} from 'reactstrap';

/**
 * Class Component
 *

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish = (dish) => {
        return (
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText body>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments = (comments) => {
        return comments ? comments.map(c => (
            <ul key={c.id} className='list-unstyled'>
                <li>{c.comment}</li>
                <li>-- {c.author}, {(new Date(c.date)).toDateString()}</li>
            </ul>
        )) : <div></div>;
    }

    render = () => {
        const dish = this.props.dish;

        if (dish) {
            return (
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}*/

/**
 * Functional Component
 */

function renderDish(dish) {
    return (
        <Card>
            <CardImg width='100%' src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle heading>{dish.name}</CardTitle>
                <CardText body>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function renderComments(comments) {
    return comments ? comments.map(c => (
        <ul key={c.id} className='list-unstyled'>
            <li>{c.comment}</li>
            <li>-- {c.author}, {new Intl.DateTimeFormat(
                'en-US',
                {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }
            ).format(new Date(Date.parse(c.date)))}</li>
        </ul>
    )) : <div></div>;
}

function DishDetail(props) {
    const dish = props.dish;

    if (dish) {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {renderDish(dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        {renderComments(dish.comments)}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;