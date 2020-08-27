import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    
   const totalFee = cart.reduce((sum,course) => sum + course.Fee,0);
    
    return (
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                <FontAwesomeIcon icon={faBookOpen} />&nbsp;Total Course Added &nbsp;
                <span className="badge badge-primary badge-pill"> {cart.length}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                <FontAwesomeIcon icon={faDollarSign}/>Total Fee&nbsp;
                <span className="badge badge-primary badge-pill">{totalFee}</span>
                </li>
            </ul>          
    );
};

export default Cart;