import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
   const totalFee = cart.reduce((sum,course) => sum + course.Fee,0);
    
    return (
        <div>
            <h2>This is Cart: {cart.length}</h2>
            <small>Fee : {totalFee}</small>
        </div>
    );
};

export default Cart;