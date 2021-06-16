import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = props => {
    return (
        <div className={classes.backdrop}/>
    )
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const portalElem = document.getElementById("overlays");

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, portalElem)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElem)}
        </>
    );
};

export default Modal;