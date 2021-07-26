import React, {useEffect, useState} from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const resp = await fetch(
                "https://react-http-c60f9-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
            );

            if (!resp.ok) {
                throw new Error("Something went wrong!");
            }

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
            setIsLoading(false);
        };

        fetchMeals().catch(err => {
            setIsLoading(false);
            setHttpError(err.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.mealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.mealsError}>
                <p>{httpError}</p>
            </section>
        );
    }

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