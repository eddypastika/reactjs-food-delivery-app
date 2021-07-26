import React, {useEffect, useState} from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const resp = await fetch("https://react-http-c60f9-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
            const respData = await resp.json();

            const loadedMeals = [];
            for (const key in respData) {
                loadedMeals.push({
                    id: key,
                    name: respData[key].name,
                    description: respData[key].description,
                    price: respData[key].price,
                });
            }

            setMeals(loadedMeals);
        };

        fetchMeals();
    }, []);

    const mealsData = meals.map(meal => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsData}</ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;