import React, {useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
        const cartCtx = useContext(CartContext);

        const cartItemRemoveHandler = id => {
        };
        const cartItemAddHandler = item => {
        };

        const cartItems = <ul className={classes["cart-item"]}>{cartCtx.items.map(cart => (
            <CartItem
                key={cart.id}
                name={cart.name}
                amount={cart.amount}
                price={cart.price}
                onRemove={cartItemRemoveHandler.bind(null, cart.id)}
                onAdd={cartItemAddHandler.bind(null, cart)}
            />
        ))}</ul>;

        const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
        const hasItems = cartCtx.items.length > 0;

        return (
            <Modal onClose={props.onClose}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                    {hasItems && <button className={classes.button}>Order</button>}
                </div>
            </Modal>
        )
    }
;

export default Cart;