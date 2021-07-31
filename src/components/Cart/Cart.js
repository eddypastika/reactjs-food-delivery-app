import React, {useContext, useState} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = props => {
        const cartCtx = useContext(CartContext);
        const [isCheckout, setIsCheckout] = useState(false);

        const cartItemRemoveHandler = id => {
            cartCtx.removeItem(id);
        };

        const cartItemAddHandler = item => {
            cartCtx.addItem({...item, amount: 1});
        };

        const orderHandler = () => {
            setIsCheckout(true);
        };

        const submitOrderHandler = (userData) => {
            fetch("https://react-http-c60f9-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json", {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items,
                })
            })

        };

        const cartItems = <ul className={classes["cart-items"]}>{cartCtx.items.map(cart => (
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

        const modalActions = (
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
            </div>
        );

        return (
            <Modal onClose={props.onClose}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
                {!isCheckout && modalActions}
            </Modal>
        )
    }
;

export default Cart;