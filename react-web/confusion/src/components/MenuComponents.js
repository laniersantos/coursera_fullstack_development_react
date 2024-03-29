import React/*, { Component }*/ from 'react';

import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
} from 'reactstrap';

/**
 * Class Component
 */

/*class Menu extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        // console.log('Menu Component componentDidMount invoked');
    }

    render = () => {
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name}/>
                        <CardImgOverlay body className='ml-5'>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
            </div>
        );
    }
}*/

/**
 * Functional Component
 */

function RenderMenuItem({dish, onClick}) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width='100%' src={dish.image} alt={dish.name}/>
            <CardImgOverlay body className='ml-5'>
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    });

    return (
        <div className='container'>
            <div className='row'>
                {menu}
            </div>
        </div>
    );
}

export default Menu;