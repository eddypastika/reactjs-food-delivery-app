import React from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
// import mealsImg from "../../assets/meals.jpeg"
const imgURL = "https://appgrooves.com/cdn/lifegoal/220/e/53014-45519-56524-56048_w1200.png"

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>E-meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes["main-image"]}>
                <img src={imgURL} alt="Food food food!"/>
            </div>
        </>
    )
};

export default Header;