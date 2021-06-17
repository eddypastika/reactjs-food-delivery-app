import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = props => {
    const cartItems = <ul className={classes.cartItems}>{[{
        id: "c1",
        name: "Chicken Betutu",
        price: 17.99,
        amount: 2
    }].map(cart => (
        <li>{cart.name}</li>
    ))}</ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.98</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;