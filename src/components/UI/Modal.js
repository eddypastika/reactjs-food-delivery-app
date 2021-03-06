import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}/>
    )
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
};

const portalElem = document.getElementById("overlays");

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElem)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElem)}
        </>
    );
};

export default Modal;